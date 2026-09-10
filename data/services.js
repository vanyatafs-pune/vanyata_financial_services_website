
// SERVICES = 6 primary cards on Home / Services page.
// ALL_SERVICES = complete list surfaced in the Services navbar dropdown & footer.

export const SERVICES = [
  {
    num: '01',
    slug: 'business-loan-consultants-pune',
    title: 'Business Loans',
    tagline: 'Right lender for your business profile.',
    description:
      'Funding for expansion, inventory or a new location, structured to fit your cash flow instead of forcing a bank template on it.',
    highlight: 'Expansion & OpEx',
    href: '/business-loan-consultants-pune',
  },
  {
    num: '02',
    slug: 'home-loan-consultants-pune',
    title: 'Home Loans',
    tagline: 'Save lakhs over your loan tenure.',
    description:
      'Purchase, resale, plot construction or balance transfer, advice from a team that has worked inside a leading bank&apos;s home loan desk.',
    highlight: 'Purchase / BT',
    href: '/home-loan-consultants-pune',
  },
  {
    num: '03',
    slug: 'loan-against-property-consultants-pune',
    title: 'Loan Against Property',
    tagline: 'Unlock the value in your property.',
    description:
      'Raise low-cost funds against residential or commercial property, matched to your loan-to-value comfort and lender criteria.',
    highlight: 'Residential / Commercial',
    href: '/loan-against-property-consultants-pune',
  },
  {
    num: '04',
    slug: 'msme-project-finance-consultants-pune',
    title: 'MSME & Project Finance',
    tagline: 'Scheme-matched funding for MSMEs.',
    description:
      'MSME schemes, project finance for new units and expansion identified, structured and taken through to sanction.',
    highlight: 'MSME schemes',
    href: '/msme-project-finance-consultants-pune',
  },
  {
    num: '05',
    slug: 'construction-finance-consultants-pune',
    title: 'Construction Finance',
    tagline: 'Project funding for builders.',
    description:
      'Construction finance for residential and commercial projects, structured around approvals, phases and sales velocity.',
    highlight: 'Builder finance',
    href: '/construction-finance-consultants-pune',
  },
  {
    num: '06',
    slug: 'machinery-working-capital-finance-pune',
    title: 'Machinery & Working Capital',
    tagline: 'Keep operations running.',
    description:
      'Finance for new or used machinery plus cash credit and overdraft facilities matched to your operating cycle.',
    highlight: 'CC / OD / Machinery',
    href: '/machinery-working-capital-finance-pune',
  },
]

// Full service catalogue (used by navbar dropdown & footer).
export const ALL_SERVICES = [
  { group: 'Business', items: [
    { title: 'Business Loan', href: '/business-loan-consultants-pune' },
    { title: 'MSME Loan', href: '/msme-loan-consultants-pune' },
    { title: 'Machine & Equipment Finance', href: '/machine-equipment-finance-pune' },
    { title: 'Project Finance for MSMEs', href: '/project-finance-msme-pune' },
    { title: 'Working Capital Finance', href: '/working-capital-finance-pune' },
    { title: 'Construction Finance', href: '/construction-finance-builders-pune' },
  ]},
  { group: 'Personal', items: [
    { title: 'Home Loan', href: '/home-loan-consultants-pune' },
    { title: 'Loan Against Property', href: '/loan-against-property-consultants-pune' },
    { title: 'Education Loan', href: '/education-loan-consultants-pune' },
    { title: 'Personal Loan', href: '/personal-loan-consultants-pune' },
  ]},
  { group: 'Advisory', items: [
    { title: 'Insurance Advisory', href: '/insurance-advisory-pune' },
    { title: 'Personal Financial Planning', href: '/personal-financial-planning-pune' },
    { title: 'Finance Career Training', href: '/finance-career-training-pune' },
  ]},
]

export const SECONDARY_SERVICES = [
  { title: 'Education Loan', href: '/education-loan-consultants-pune' },
  { title: 'Personal Loan', href: '/personal-loan-consultants-pune' },
  { title: 'Insurance Advisory', href: '/insurance-advisory-pune' },
]
