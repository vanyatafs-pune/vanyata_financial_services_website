
// JS with JSDoc types (project is JS; matches existing architecture).

/**
 * Calculate monthly EMI using the standard reducing-balance formula.
 * EMI = P * r * (1+r)^n / ((1+r)^n - 1)
 * @param {number} principal   Loan principal in rupees.
 * @param {number} annualRate  Annual interest rate in percent (e.g. 8.5).
 * @param {number} months      Tenure in months.
 * @returns {number} Monthly EMI in rupees.
 */
export function calculateEmi(principal, annualRate, months) {
  if (!principal || !months) return 0
  const r = annualRate / 12 / 100
  if (r === 0) return principal / months
  const pow = Math.pow(1 + r, months)
  return (principal * r * pow) / (pow - 1)
}

/**
 * Build a full amortization schedule.
 * @param {number} principal
 * @param {number} annualRate  Annual rate in percent.
 * @param {number} months      Tenure in months.
 * @returns {{month:number,emi:number,principal:number,interest:number,balance:number}[]}
 */
export function amortizationSchedule(principal, annualRate, months) {
  if (!principal || !months) return []
  const r = annualRate / 12 / 100
  const emi = calculateEmi(principal, annualRate, months)
  const schedule = []
  let balance = principal
  for (let m = 1; m <= months; m++) {
    const interest = balance * r
    const principalPart = emi - interest
    balance = Math.max(0, balance - principalPart)
    schedule.push({
      month: m,
      emi,
      principal: principalPart,
      interest,
      balance,
    })
  }
  return schedule
}

/**
 * Group a monthly schedule into yearly summaries.
 * @param {ReturnType<typeof amortizationSchedule>} schedule
 * @returns {{year:number,principal:number,interest:number,totalPayment:number,balance:number}[]}
 */
export function toYearlySummary(schedule) {
  const years = []
  for (let y = 0; y < Math.ceil(schedule.length / 12); y++) {
    const slice = schedule.slice(y * 12, y * 12 + 12)
    const principal = slice.reduce((a, r) => a + r.principal, 0)
    const interest = slice.reduce((a, r) => a + r.interest, 0)
    const totalPayment = principal + interest
    const balance = slice[slice.length - 1]?.balance ?? 0
    years.push({ year: y + 1, principal, interest, totalPayment, balance })
  }
  return years
}

/** Format an amount in INR with Indian grouping. */
export function formatINR(amount, opts = {}) {
  const { withSymbol = true, fractionDigits = 0 } = opts
  const value = Number.isFinite(amount) ? amount : 0
  const s = Math.round(value * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits)
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  }).format(s)
  return withSymbol ? `\u20B9${formatted}` : formatted
}

/** Compact INR (₹ 12.5 L, ₹ 1.25 Cr) for chart labels. */
export function compactINR(amount) {
  const v = Number(amount) || 0
  if (v >= 1e7) return `\u20B9${(v / 1e7).toFixed(2)} Cr`
  if (v >= 1e5) return `\u20B9${(v / 1e5).toFixed(2)} L`
  if (v >= 1e3) return `\u20B9${(v / 1e3).toFixed(1)} K`
  return `\u20B9${Math.round(v)}`
}

/** Convenience preset defaults per loan type. */
export const EMI_PRESETS = {
  home: { amount: 3000000, rate: 8.5, tenureYears: 20, label: 'Home Loan' },
  personal: { amount: 500000, rate: 12.5, tenureYears: 3, label: 'Personal Loan' },
  business: { amount: 2000000, rate: 14, tenureYears: 5, label: 'Business Loan' },
  lap: { amount: 5000000, rate: 10, tenureYears: 15, label: 'Loan Against Property' },
}
