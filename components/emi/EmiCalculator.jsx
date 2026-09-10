'use client'
import { useMemo, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import {
  calculateEmi,
  amortizationSchedule,
  toYearlySummary,
  formatINR,
  compactINR,
} from '@/lib/emi'

const BRAND = {
  primary: '#17457B',
  accent: '#B9762A',
  ink: '#0F2140',
  border: 'rgba(23,69,123,0.10)',
}

function Slider({ label, value, min, max, step, onChange, format }) {
  const percent = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/70">
          {label}
        </label>
        <span className="font-numeric text-[18px] font-semibold tracking-tight text-brand-secondary">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full appearance-none bg-transparent"
        style={{
          background: `linear-gradient(to right, ${BRAND.primary} 0%, ${BRAND.primary} ${percent}%, rgba(23,69,123,0.15) ${percent}%, rgba(23,69,123,0.15) 100%)`,
          height: 4,
          borderRadius: 2,
        }}
      />
      <div className="mt-2 flex justify-between font-numeric text-[11px] text-brand-secondary/50">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

/**
 * Reusable EMI calculator.
 * Props act as defaults so this component can be dropped into
 * Home Loan / Personal Loan / Business Loan / LAP pages by
 * passing the appropriate defaults.
 */
export default function EmiCalculator({
  defaultAmount = 3000000,
  defaultRate = 8.5,
  defaultTenureYears = 20,
  amountMin = 100000,
  amountMax = 30000000,
  amountStep = 50000,
  rateMin = 5,
  rateMax = 24,
  rateStep = 0.05,
  tenureMin = 1,
  tenureMax = 30,
  tenureStep = 1,
  label = 'Loan',
}) {
  const [amount, setAmount] = useState(defaultAmount)
  const [rate, setRate] = useState(defaultRate)
  const [years, setYears] = useState(defaultTenureYears)
  const [view, setView] = useState('yearly') // 'yearly' | 'monthly'
  const [page, setPage] = useState(0)

  const months = years * 12

  const summary = useMemo(() => {
    const emi = calculateEmi(amount, rate, months)
    const totalPayment = emi * months
    const totalInterest = totalPayment - amount
    return { emi, totalPayment, totalInterest, principal: amount }
  }, [amount, rate, months])

  const schedule = useMemo(
    () => amortizationSchedule(amount, rate, months),
    [amount, rate, months]
  )
  const yearly = useMemo(() => toYearlySummary(schedule), [schedule])

  const chartData = [
    { name: 'Principal', value: summary.principal, color: BRAND.primary },
    { name: 'Interest', value: Math.max(0, summary.totalInterest), color: BRAND.accent },
  ]

  const monthlyRows = view === 'monthly' ? schedule.slice(page * 12, page * 12 + 12) : []
  const totalMonthlyPages = Math.ceil(schedule.length / 12)

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-0 border border-brand-primary/10 lg:grid-cols-12">
        {/* Inputs */}
        <div className="space-y-10 p-8 sm:p-10 lg:col-span-5 lg:border-r lg:border-brand-primary/10">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/70">
              {label} inputs
            </div>
            <h2 className="mt-3 text-[22px] font-medium tracking-tight text-brand-secondary sm:text-[26px]">
              Estimate your EMI
            </h2>
          </div>

          <Slider
            label="Loan amount"
            value={amount}
            min={amountMin}
            max={amountMax}
            step={amountStep}
            onChange={setAmount}
            format={(v) => compactINR(v)}
          />
          <Slider
            label="Interest rate (p.a.)"
            value={rate}
            min={rateMin}
            max={rateMax}
            step={rateStep}
            onChange={setRate}
            format={(v) => `${v.toFixed(2)}%`}
          />
          <Slider
            label="Loan tenure"
            value={years}
            min={tenureMin}
            max={tenureMax}
            step={tenureStep}
            onChange={setYears}
            format={(v) => `${v} ${v === 1 ? 'year' : 'years'}`}
          />
        </div>

        {/* Results */}
        <div className="p-8 sm:p-10 lg:col-span-7">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-5">
            <div className="sm:col-span-2">
              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      innerRadius="70%"
                      outerRadius="100%"
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                      isAnimationActive={false}
                    >
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">
                    Monthly EMI
                  </div>
                  <div className="font-numeric mt-1 text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold tracking-tight text-brand-secondary">
                    {formatINR(summary.emi)}
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <ul className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">
                <li className="flex items-baseline justify-between py-4">
                  <span className="flex items-center gap-3 text-[13px] font-medium tracking-tight text-brand-secondary">
                    <span className="inline-block h-2.5 w-2.5" style={{ background: BRAND.primary }} />
                    Principal amount
                  </span>
                  <span className="font-numeric text-[15px] font-semibold text-brand-secondary">
                    {formatINR(summary.principal)}
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-4">
                  <span className="flex items-center gap-3 text-[13px] font-medium tracking-tight text-brand-secondary">
                    <span className="inline-block h-2.5 w-2.5" style={{ background: BRAND.accent }} />
                    Total interest
                  </span>
                  <span className="font-numeric text-[15px] font-semibold text-brand-secondary">
                    {formatINR(summary.totalInterest)}
                  </span>
                </li>
                <li className="flex items-baseline justify-between py-4">
                  <span className="text-[13px] font-medium tracking-tight text-brand-secondary">
                    Total amount payable
                  </span>
                  <span className="font-numeric text-[15px] font-semibold text-brand-primary">
                    {formatINR(summary.totalPayment)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Amortization schedule */}
      <div className="mt-10 border border-brand-primary/10">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-brand-primary/10 bg-brand-neutral p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-[19px] font-medium tracking-tight text-brand-secondary sm:text-[21px]">
              Amortization schedule
            </h3>
            <p className="mt-1 text-[13px] text-brand-secondary/60">
              How your EMI is split between interest and principal over time.
            </p>
          </div>
          <div className="inline-flex overflow-hidden rounded-md border border-brand-primary/15 bg-white">
            {['yearly', 'monthly'].map((v) => (
              <button
                key={v}
                onClick={() => { setView(v); setPage(0) }}
                className={`px-4 py-2 text-[12.5px] font-medium tracking-tight transition-colors ${view === v ? 'bg-brand-primary text-white' : 'text-brand-secondary hover:bg-brand-neutral'}`}
              >
                {v === 'yearly' ? 'Yearly summary' : 'Monthly view'}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="font-numeric w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-white text-[11px] font-medium uppercase tracking-[0.18em] text-brand-primary/60">
                {(view === 'yearly'
                  ? ['Year', 'Principal (annual)', 'Interest (annual)', 'Total payment', 'Balance']
                  : ['Month', 'EMI', 'Principal', 'Interest', 'Balance']
                ).map((h) => (
                  <th key={h} className="border-b border-brand-primary/10 px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[13.5px] text-brand-secondary">
              {view === 'yearly' && yearly.map((y) => (
                <tr key={y.year} className="border-b border-brand-primary/10 last:border-b-0">
                  <td className="px-6 py-3.5 font-semibold">Year {y.year}</td>
                  <td className="px-6 py-3.5">{formatINR(y.principal)}</td>
                  <td className="px-6 py-3.5">{formatINR(y.interest)}</td>
                  <td className="px-6 py-3.5">{formatINR(y.totalPayment)}</td>
                  <td className="px-6 py-3.5 text-brand-secondary/75">{formatINR(y.balance)}</td>
                </tr>
              ))}
              {view === 'monthly' && monthlyRows.map((r) => (
                <tr key={r.month} className="border-b border-brand-primary/10 last:border-b-0">
                  <td className="px-6 py-3.5 font-semibold">{r.month}</td>
                  <td className="px-6 py-3.5">{formatINR(r.emi)}</td>
                  <td className="px-6 py-3.5">{formatINR(r.principal)}</td>
                  <td className="px-6 py-3.5">{formatINR(r.interest)}</td>
                  <td className="px-6 py-3.5 text-brand-secondary/75">{formatINR(r.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {view === 'monthly' && totalMonthlyPages > 1 && (
          <div className="flex items-center justify-between border-t border-brand-primary/10 bg-brand-neutral px-6 py-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-md border border-brand-primary/20 px-3 py-1.5 text-[12.5px] font-medium text-brand-secondary transition-colors hover:border-brand-primary hover:bg-white disabled:opacity-40"
            >
              Previous 12 months
            </button>
            <span className="font-numeric text-[12.5px] font-medium text-brand-secondary/70">
              Year {page + 1} of {totalMonthlyPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalMonthlyPages - 1, p + 1))}
              disabled={page >= totalMonthlyPages - 1}
              className="rounded-md border border-brand-primary/20 px-3 py-1.5 text-[12.5px] font-medium text-brand-secondary transition-colors hover:border-brand-primary hover:bg-white disabled:opacity-40"
            >
              Next 12 months
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
