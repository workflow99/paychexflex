export const company = {
  name: 'Lander Tubular Products Inc',
  id: '70246097',
  icon: 'L',
}

export const employee = {
  initials: 'EJ',
  legalFirstName: 'Edward',
  legalLastName: 'Johnson',
  ssnLast4: '3643',
  birthDate: 'Jun 28, 1964',
  age: 62,
  sex: 'Male',
  employeeId: '4319',
  address: ['540 Sanderstown Road', 'Franklin, NC 28734', 'United States'],
  mobilePhone: '(828) 507-1067',
  homePhone: '(828) 524-3151',
  personalEmail: 'edward.j@email.com',
  emergencyContacts: [
    { initials: 'HJ', name: 'Johnson, Howard', relation: 'Parent', phone: '(828) 524-3151' },
  ],
  account: {
    username: 'EddieJ.4319',
    password: '••••••',
    userPhonePrimary: '(828) 507-1067',
    userPhoneSecondary: '—',
    userEmail: 'edward.j@yahoo.com',
    voicePin: '••••',
  },
  securityQuestions: [
    'What was your favorite sport as a child?',
    'What color was your first bicycle?',
    'What model year was your first car?',
    'What year did you go to your first music concert?',
  ],
  employment: {
    type: 'Full Time',
    organization: '2 Indirect',
    location: 'Franklin, NC',
    position: 'Worker',
    supervisor: '—',
    officerType: '—',
    hireDate: 'Mar 9, 1992',
    seasonal: 'No',
  },
}

export const userPreferences = {
  languages: ['English', 'Spanish'],
  defaultLanguage: 'English',
}

export const dashboardTiles = {
  retirement: { title: 'Retirement', sub: 'View Details' },
  checkStubs: [
    { date: 'Aug 12' },
    { date: 'Aug 5' },
    { date: 'Jul 29' },
  ],
  taxDocuments: [{ label: '2025 W2' }],
  events: [
    { date: 'MAR\n09', label: 'Happy Anniversary!', type: 'anniversary' },
    { date: 'JUN\n28', label: 'Happy Birthday!', type: 'birthday' },
  ],
}

export const pay = {
  rate: {
    label: 'Rate 1',
    isDefault: true,
    hourly: '$23.22 hourly',
    standardPayPeriod: '—',
    standardOvertime: '—',
    payFrequency: 'Weekly',
    calculatedHourlyRate: '$23.22',
    perPayPeriod: '—',
    annualized: '—',
    nextReview: '—',
  },
  history: [
    { date: 'Apr 13, 2026', label: 'Rate 1', rate: '$23.22' },
    { date: 'Aug 25, 2025', label: 'Rate 1', badge: 'Initial Rate', rate: '$22.76' },
  ],
  earnings: [
    { code: 'PX401 ERMTCH', period: '03/20/2026 - Ongoing', value: 'Calculated', sub: 'Every Pay Period' },
  ],
  deductions: [
    { code: 'DENTAL', period: '10/08/2025 - Ongoing', amount: '$11.52' },
    { code: 'HSA', period: '10/08/2025 - Ongoing', amount: '$28.85' },
    { code: 'Medical', period: '10/08/2025 - Ongoing', amount: '$36.96' },
    { code: 'Short Term Dis', period: '10/08/2025 - Ongoing', amount: '$11.97' },
    { code: 'TO-PX401 EEPRE', period: '10/08/2025 - Ongoing', amount: '5%' },
    { code: 'VISION', period: '10/08/2025 - Ongoing', amount: '$1.81' },
  ],
  directDeposit: {
    bankName: 'PNC BANK, NA - Checking',
    accountType: 'Checking',
    routingNumber: '054000030',
    accountNumber: '5322220017',
    usedFor: 'Net Pay',
    amount: 'Remainder',
  },
  taxes: {
    federal: { label: 'Federal Income Tax - Resident', sub: 'Taxable, Single, 0' },
    state: [
      { label: 'North Carolina State Income Tax - Resident', sub: 'Taxable, Single, 0, Worked 100%' },
      { label: 'North Carolina State Unemployment', sub: 'Taxable' },
    ],
  },
}

export const perks = [
  {
    name: 'BenefitsMe',
    title: 'Shop now, pay later',
    desc: "You're approved, up to $5,000. Pay interest-free via payroll deduction.",
    logo: 'benefitsme',
    ctaText: 'Get Started',
  },
  {
    name: 'GoSkills',
    title: 'GoSkills',
    desc: 'Build new skills with flexible, bite-sized courses.',
    logo: 'goskills',
    ctaText: 'Get started',
  },
  {
    name: 'Perpay',
    title: 'Perpay',
    desc: 'Unlock up to $1,000 to shop, pay over time, and even build your credit.',
    logo: 'perpay',
    ctaText: 'Launch',
  },
  {
    name: 'Marketplace',
    title: 'Affordable Benefits and Insurance Marketplace',
    desc: 'Browse a marketplace of voluntary benefits, insurance, and everyday discounts for you and your family.',
    icon: 'marketplace',
    ctaText: 'Get started',
  },
  {
    name: 'Employee Discounts',
    title: 'Employee Discounts',
    poweredBy: 'corestream',
    desc: 'Enjoy special employee savings on tickets, tech, travel and more, plus insurance protection.',
    icon: 'discounts',
    ctaText: 'Launch',
  },
  {
    name: 'Financial Wellness',
    title: 'Financial Wellness',
    poweredBy: 'FinFit',
    desc: 'Get short-term loans and access to financial wellness tools.',
    icon: 'financial-wellness',
    ctaText: 'Launch',
  },
  {
    name: 'Paycheck Pay',
    title: 'Paycheck Pay®',
    subtitle: 'an online account established by Central Bank of Kansas City, Member FDIC',
    desc: 'Get a debit Mastercard® and open an optional Savings Account.',
    descFootnote: '1',
    learnMoreText: 'Learn more',
    icon: 'paycheckPay',
    ctaText: 'Get started',
  },
  {
    name: 'Auto insurance',
    title: 'Auto insurance',
    desc: 'Get a free personalized car insurance quote today.',
    logo: 'allstate',
    ctaText: 'Get started',
  },
  {
    name: 'Home and renters insurance',
    title: 'Home and renters insurance',
    desc: 'Protect yourself and your family. Get a quote, find coverage options, and more.',
    logo: 'allstate',
    ctaText: 'Get started',
  },
]

export const locations = [
  {
    name: 'Franklin, NC',
    address: ['66 Van Raalte St', 'Franklin, NC 28734-2760'],
    icon: 'building',
    imgBg: '#e3f2fd',
  },
  {
    name: 'Rabun Gap, GA',
    address: ['400 Kellys Creek Rd', 'Rabun Gap, GA 30568-2211'],
    icon: 'factory',
    imgBg: '#e0f2f1',
  },
]

export const retirement = {
  planName: 'Lander Tubular Products Inc 401(k) Plan',
  currentBalance: '$266,918.63',
  vestedBalance: '$266,918.63',
  lastContribution: { amount: '$46.44', date: 'On Aug 11, 2026' },
  yearlyReturn: {
    value: '-5.08%',
    asOf: ['As of Jul 31', 'As of Aug 13'],
    period: 'Jan 1, 2026 - Jul 31, 2026',
  },
  incomeProjection: { needed: '$2,808', have: '$925', shortAmount: '$1,883', shortPct: 37 },
  annuitiesPromo: {
    title: 'Create income for life from your savings',
    subtitle: 'powered by Hueler Income Solutions®',
    linkText: 'Shop annuities',
  },
  contributionsPreview: {
    total: '$266,918.63',
    fromYou: '$266,918.63',
    lastContribution: { amount: '$46.44', date: 'On Aug 11, 2026' },
  },
  beneficiaries: {
    desc: "A beneficiary is a person or entity that inherits the assets in your account in the event of your passing. You can add or remove beneficiaries anytime, and review who you've selected.",
  },
  accountActivity: {
    title: 'Account activity',
    desc: 'See your requests and changes.',
  },
  feeDisclosure: {
    title: 'Fee disclosure',
    desc: 'Review your recent disclosures outlining fees and expenses for your retirement plan.',
    linkText: 'View disclosures',
  },
  importantNotice: {
    text: 'The information and projections provided by the retirement calculator and on Paycheck Flex ("projections") are not investment advice and are based on certain assumptions, default information, and/or actual information that you have provided. The likelihood of the various retirement outcomes provided here are hypothetical in nature, subject to regular change, involve uncertainty and risk, and do not guarantee any future investment outcome, retirement income, or other result. Results may vary with each use and over time.',
    linkText: 'Review additional notices and disclaimers',
  },
  contributions: {
    currentValue: '$266,918.63',
    breakdown: [
      { label: 'Rollover', amount: '$220,189.43', pct: '82.49%', color: '#3f51b5' },
      { label: 'Employee Pre-Tax', amount: '$43,522.19', pct: '16.31%', color: '#9fa8da' },
      { label: 'Roth 401(k)', amount: '$3,207.01', pct: '1.20%', color: '#64b5f6' },
    ],
    promo: {
      title: 'Want to save even more for retirement?',
      desc: 'You have another contribution type available.',
      linkText: 'Learn about catchup contributions',
    },
    perPayPeriod: [
      { label: 'Total per pay period', value: '5%', bold: true },
      { label: 'Pretax', value: '5%' },
      { label: 'Roth', value: '0%' },
      { label: 'Pretax catchup', value: '0%' },
      { label: 'Roth catchup', value: '0%' },
    ],
    catchupNote: 'Catchup contributions will start when you meet the regular contribution limit of $24,500.',
  },
  investments: {
    currentValue: '$266,918.63',
    asOf: 'as of Today',
    allocation: [
      { label: 'Equity', pct: 85.2, color: '#3f51b5' },
      { label: 'Bond', pct: 14.3, color: '#64b5f6' },
      { label: 'Money market', pct: 0.5, color: '#81c784' },
    ],
    holdings: [
      { name: 'Vanguard 500 Index Adml', ticker: 'VFIAX', futureContrib: '0%', currentPct: '70.3%', value: '$187,287.52' },
      { name: 'T. Rowe Price All-Cap Opportunities I', ticker: 'PNAIX', futureContrib: '0%', currentPct: '6.2%', value: '$16,670.38' },
      { name: 'Vanguard Equity Income Adml', ticker: 'VEIRX', futureContrib: '0%', currentPct: '4.2%', value: '$11,251.37' },
      { name: 'American Funds Eupac Fund R6', ticker: 'RERGX', futureContrib: '0%', currentPct: '1.7%', value: '$4,578.04' },
      { name: 'Franklin Small Cap Growth R6', ticker: 'FSMLX', futureContrib: '0%', currentPct: '1.1%', value: '$2,978.35' },
      { name: 'Dfa Us Targeted Value I', ticker: 'DFFVX', futureContrib: '0%', currentPct: '1.0%', value: '$2,592.09' },
      { name: 'American Funds New World R6', ticker: 'RNWGX', futureContrib: '0%', currentPct: '0.4%', value: '$1,138.78' },
      { name: 'T. Rowe Price Retirement 2030 I', ticker: 'TRFHX', futureContrib: '100%', currentPct: '0.3%', value: '$846.90' },
      { name: 'Pimco Income Inst', ticker: 'PIMIX', futureContrib: '0%', currentPct: '13.0%', value: '$34,831.70' },
      { name: 'Jpmorgan Government Bond R6', ticker: 'OGGYX', futureContrib: '0%', currentPct: '1.3%', value: '$3,485.72' },
      { name: 'Vanguard Treasury Money Market Inv', ticker: 'VUSXX', futureContrib: '0%', currentPct: '0.5%', value: '$1,257.78' },
    ],
    guidedChoice: {
      title: 'Want help investing?',
      desc: 'GuidedChoice can help you get the most out of your investments.',
      linkText: 'Visit GuidedChoice',
    },
    autoRebalance: {
      title: 'Auto rebalance',
      status: 'Not active',
      desc: 'Automatically rebalance your portfolio as the market changes.',
      buttonText: 'Set it up',
    },
    advisor: {
      title: 'Financial advisor',
      specialistLabel: 'ASSIGNED SPECIALIST',
      name: 'Tony Winkeljohn',
      phone: '(260) 490-2005',
      email: 'tony.winkeljohn@worldadvisors.com',
    },
  },
  loans: {
    intro: "Choose the loan that's right for you.",
    options: [
      {
        name: 'General purpose loan',
        illustration: 'wallet',
        terms: [
          'Up to 4.5 years to repay',
          'No documentation required',
          'One-time fee of $175',
          'Annual maintenance fee of $100',
        ],
      },
      {
        name: 'Primary home loan',
        illustration: 'house',
        terms: [
          'Up to 10 years to repay',
          'Documentation is required',
          'One-time fee of $325',
          'Annual maintenance fee of $100',
        ],
      },
    ],
  },
  rolloverWithdrawal: {
    moveMyMoney: {
      title: 'Move my money',
      desc: 'You can only request one rollover and/or withdrawal at a time.',
    },
    iraPromo: {
      title: 'Need a personal IRA?',
      linkText: 'Icon can help',
    },
    actions: [
      {
        title: 'Rollover out of this plan',
        desc: "I'm looking to take money out of this plan and move to a new employer's plan or an IRA.",
        cta: 'chevron',
      },
      {
        title: 'Split rollover & withdrawal',
        desc: "I'm looking to withdraw some money from my Retirement account and move out the rest to a new employer's plan or an IRA account.",
        cta: 'chat',
        linkText: 'Click to chat',
      },
      {
        title: 'Withdrawal',
        desc: "I'm looking to withdraw all or a portion of my money from my retirement account.",
        cta: 'chevron',
      },
      {
        title: 'Make a special withdrawal',
        desc: 'Need to access your savings with minimal fees? Check out your options.',
        cta: 'chevron',
      },
    ],
    moveIntoPlan: {
      title: 'Looking to move money into the plan?',
      rolloverTitle: 'Rollover into',
      rolloverDesc: "Move your money from a different employer's plan into your new plan.",
      linkText: 'Get started',
    },
    history: {
      title: 'History',
      desc: 'Get info or download a 1099-R',
      entries: [
        {
          date: 'Aug 6, 2026',
          type: 'Withdrawal',
          status: 'Money sent',
          sub: 'Pretax',
          detail: {
            confirmationNumber: 'AQGOS4M0I3',
            withdrawalType: 'In-service withdrawal ($)',
            taxDocuments: 'Look here for your 1099-R next January',
            paymentDate: 'Aug 11, 2026',
            paymentMethod: 'ACH',
            grossAmount: '$65,669.00',
            taxableAmount: '$65,569.00',
            netAmount: '$49,832.44',
            federalTaxWithheld: '$13,113.80',
            stateTaxWithheld: '$2,622.76',
            stateTaxLabel: 'NC taxes withheld',
            fees: '$100.00',
          },
        },
      ],
    },
    annuitiesPromo: {
      title: 'Discover lifetime income annuities',
      desc: 'Transform some of your savings into income for life. Powered by Hueler Income Solutions®',
      linkText: 'Shop annuities',
    },
  },
  statementHistory: {
    period: 'Month to date',
    startingBalance: '$322,628.43',
    totalContributions: '$108.73',
    otherDetailsLabel: 'Other details',
    endingBalance: '$266,918.63',
    transactionPages: [
      [
        { date: '08/11/2026', type: 'Employee Pre-Tax Contribution', fund: 'T. Rowe Price Retirement 2030 I TRFHX', price: '$30.33', shares: '1.5312', amount: '$46.44' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard Treasury Money Market Inv VUSXX', price: '$1.00', shares: '-241.8900', amount: '-$241.89' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard Treasury Money Market Inv VUSXX', price: '$1.00', shares: '-64.8600', amount: '-$64.86' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Jpmorgan Government Bond R6 OGGYX', price: '$9.52', shares: '-69.9128', amount: '-$665.57' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Jpmorgan Government Bond R6 OGGYX', price: '$9.52', shares: '-19.2311', amount: '-$183.08' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'T. Rowe Price All-Cap Opportunities I PNAIX', price: '$82.10', shares: '-7.5079', amount: '-$616.40' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'T. Rowe Price All-Cap Opportunities I PNAIX', price: '$82.10', shares: '-42.4533', amount: '-$3,485.42' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'American Funds Eupac Fund R6 RERGX', price: '$64.56', shares: '-14.1062', amount: '-$910.70' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'American Funds Eupac Fund R6 RERGX', price: '$64.56', shares: '-3.2134', amount: '-$207.46' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'T. Rowe Price Retirement 2030 I TRFHX', price: '$30.39', shares: '-6.5512', amount: '-$199.09' },
      ],
      [
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard Equity Income Adml VEIRX', price: '$105.11', shares: '-21.5891', amount: '-$2,269.23' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard Equity Income Adml VEIRX', price: '$105.11', shares: '-4.6325', amount: '-$486.92' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'American Funds New World R6 RNWGX', price: '$107.47', shares: '-2.2143', amount: '-$237.97' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'American Funds New World R6 RNWGX', price: '$107.47', shares: '-0.4208', amount: '-$45.22' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard 500 Index Adml VFIAX', price: '$716.34', shares: '-9.6416', amount: '-$6,906.67' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Vanguard 500 Index Adml VFIAX', price: '$716.34', shares: '-54.8556', amount: '-$39,295.23' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Pimco Income Inst PIMIX', price: '$10.77', shares: '-613.4512', amount: '-$6,606.87' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Pimco Income Inst PIMIX', price: '$10.77', shares: '-174.8134', amount: '-$1,882.74' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Dfa Us Targeted Value I DFFVX', price: '$44.76', shares: '-11.6508', amount: '-$521.49' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Dfa Us Targeted Value I DFFVX', price: '$44.76', shares: '-2.5605', amount: '-$114.61' },
      ],
      [
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Franklin Small Cap Growth R6 FSMLX', price: '$32.60', shares: '-18.5758', amount: '-$605.57' },
        { date: '08/07/2026', type: 'Withdrawal', fund: 'Franklin Small Cap Growth R6 FSMLX', price: '$32.60', shares: '-3.7426', amount: '-$122.01' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'Jpmorgan Government Bond R6 OGGYX', price: '$9.52', shares: 'N/A', amount: '-$3.48' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'Jpmorgan Government Bond R6 OGGYX', price: '$9.52', shares: 'N/A', amount: '-$0.96' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'T. Rowe Price All-Cap Opportunities I PNAIX', price: '$82.10', shares: 'N/A', amount: '$19.97' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'American Funds Eupac Fund R6 RERGX', price: '$64.56', shares: 'N/A', amount: '$29.77' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'American Funds Eupac Fund R6 RERGX', price: '$64.56', shares: 'N/A', amount: '$6.78' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'Vanguard Equity Income Adml VEIRX', price: '$105.11', shares: 'N/A', amount: '$68.87' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'Vanguard Equity Income Adml VEIRX', price: '$105.11', shares: 'N/A', amount: '$14.77' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'American Funds New World R6 RNWGX', price: '$107.47', shares: 'N/A', amount: '$5.27' },
      ],
      [
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'American Funds New World R6 RNWGX', price: '$107.47', shares: 'N/A', amount: '$1.00' },
        { date: '08/07/2026', type: 'Gains/Losses', fund: 'Vanguard 500 Index Adml VFIAX', price: '$716.34', shares: 'N/A', amount: '$1,147.55' },
        { date: '08/06/2026', type: 'Cash Earnings - Adjustments', fund: 'Pimco Income Inst PIMIX', price: '$10.75', shares: '0.3870', amount: '$4.16' },
        { date: '08/06/2026', type: 'Cash Earnings - Adjustments', fund: 'Pimco Income Inst PIMIX', price: '$10.75', shares: '0.1107', amount: '$1.19' },
        { date: '08/04/2026', type: 'Employee Pre-Tax Contribution', fund: 'T. Rowe Price Retirement 2030 I TRFHX', price: '$30.29', shares: '2.0565', amount: '$62.29' },
        { date: '08/03/2026', type: '3(16) ERISA Fiduciary Services Fee', fund: 'Vanguard Treasury Money Market Inv VUSXX', price: '$1.00', shares: '-0.0400', amount: '-$0.04' },
        { date: '08/03/2026', type: '3(16) ERISA Fiduciary Services Fee', fund: 'T. Rowe Price All-Cap Opportunities I PNAIX', price: '$80.15', shares: '-0.0067', amount: '-$0.54' },
        { date: '08/03/2026', type: '3(16) ERISA Fiduciary Services Fee', fund: 'Vanguard 500 Index Adml VFIAX', price: '$701.79', shares: '-0.0086', amount: '-$6.07' },
        { date: '08/03/2026', type: '3(16) ERISA Fiduciary Services Fee', fund: 'Pimco Income Inst PIMIX', price: '$10.73', shares: '-0.0969', amount: '-$1.04' },
        { date: '08/03/2026', type: '3(16) ERISA Fiduciary Services Fee', fund: 'Franklin Small Cap Growth R6 FSMLX', price: '$31.32', shares: '-0.0006', amount: '-$0.02' },
      ],
    ],
  },
}
