import './globals.css'
import { Inter, Fraunces } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import QuickActionsBar from '@/components/layout/QuickActionsBar'
import { ORGANIZATION_SCHEMA, LOCAL_BUSINESS_SCHEMA } from '@/data/schemas'
import { COMPANY } from '@/data/company'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL(COMPANY.websiteUrl),
  title: {
    default: 'Loan Consultant in Pune | Vanyata Financial Services',
    template: '%s | Vanyata Financial Services',
  },
  description:
    'Looking for a reliable loan consultant in Pune? Vanyata offers unbiased guidance for business, home, MSME & LAP loans. Ex-bankers. 1000+ customers served.',
  keywords: [
    'Loan Consultant Pune', 'Business Loan Pune', 'Home Loan Consultant Pune',
    'Loan Against Property Pune', 'MSME Loan Pune', 'Vanyata Financial Services',
  ],
  alternates: { canonical: COMPANY.websiteUrl },
  openGraph: {
    title: 'Loan Consultant in Pune | Vanyata Financial Services',
    description:
      'Independent financial advisors in Pune. We help you find the right business loan, home loan, or LAP without the bank bias.',
    url: COMPANY.websiteUrl,
    siteName: 'Vanyata Financial Services',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Consultant in Pune | Vanyata Financial Services',
    description:
      'Independent financial advisors in Pune. We help you find the right business loan, home loan, or LAP without the bank bias.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      </head>
      <body className="bg-white">
        <Providers>
          <Navbar />
          <QuickActionsBar />
          <main className="min-h-screen bg-white">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
