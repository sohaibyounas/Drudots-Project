import {
  MdGavel,
  MdHome,
  MdCalendarToday,
  MdPayments,
  MdSecurity,
  MdTrendingUp,
  MdPeople,
  MdReportProblem,
  MdSchool,
  MdComputer,
  MdForum,
  MdFavorite,
  MdShare,
  MdFlight,
  MdExitToApp,
  MdHealthAndSafety,
  MdLightbulb,
  MdBusiness,
} from "react-icons/md";

/*  icon global style  */
const iconProps = {
  size: 22,
  color: "#fff",
};

/*  policies data  */

export const policiesData = [
  // code-of-conduct
  {
    id: "code-of-conduct",
    title: "Code of Conduct & Professional Ethics",
    icon: <MdGavel {...iconProps} />,
    defaultExpanded: true,
    items: [
      "We maintain the highest standards of integrity, honesty and professionalism",
      "Zero tolerance for harassment, discrimination or bullying of any kind",
      "Strict confidentiality of client information and project details",
      "No conflicts of interest – personal projects must not interfere with company work",
      "Responsible use of company resources and intellectual property",
    ],
    description: "",
  },

  // remote-hybrid-work
  {
    id: "remote-hybrid-work",
    title: "Remote & Hybrid Work Policy",
    icon: <MdHome {...iconProps} />,
    items: [
      "Core working hours: 10:00 AM – 4:00 PM PKT (Monday–Friday)",
      "Full remote allowed with 2–3 mandatory office days per month in Lahore",
      "Company provides necessary tools: laptop, licensed software, high-speed internet allowance",
      "Daily stand-ups (10–15 min) and weekly sprint planning required",
      "Use of Slack / Teams for communication + daily updates",
    ],
    description: "",
  },

  // leave-attendance
  {
    id: "leave-attendance",
    title: "Leave & Attendance Policy",
    icon: <MdCalendarToday {...iconProps} />,
    items: [
      "20 paid annual leaves + 10 paid sick leaves per year",
      "Public holidays (Pakistan official + selected religious holidays)",
      "Maternity leave: 12 weeks (as per law), Paternity leave: 5 days paid",
      "Leaves require prior approval (except emergency sick leave)",
      "Unpaid leave possible in special circumstances (case-by-case)",
    ],
    description: "",
  },

  // compensation-benefits
  {
    id: "compensation-benefits",
    title: "Compensation & Benefits",
    icon: <MdPayments {...iconProps} />,
    items: [
      "Competitive salary paid on the 1st–5th of every month",
      "Performance bonus (quarterly / project-based)",
      "Health insurance (OPD + hospitalization coverage)",
      "Internet & electricity reimbursement for remote employees",
      "Professional development budget (courses, books, conferences)",
    ],
    description: "",
  },

  // data-security-ip
  {
    id: "data-security-ip",
    title: "Data Security & Intellectual Property",
    icon: <MdSecurity {...iconProps} />,
    items: [
      "All employees sign NDA on joining",
      "Client code, designs & data remain strictly confidential",
      "Company owns all work produced during employment",
      "Use of approved version control (Git) and secure repositories only",
      "Personal devices must follow company security policies if used for work",
    ],
    description: "",
  },

  // performance-growth
  {
    id: "performance-growth",
    title: "Performance, Growth & Reviews",
    icon: <MdTrendingUp {...iconProps} />,
    items: [
      "Bi-annual performance reviews (June & December)",
      "Clear OKRs / KPIs set at project & individual level",
      "Training & certification support (Udemy, Frontend Masters, conferences)",
      "Promotion & salary review based on performance & business needs",
    ],
    description: "",
  },

  // diversity-inclusion
  {
    id: "diversity-inclusion",
    title: "Diversity, Equity & Inclusion",
    icon: <MdPeople {...iconProps} />,
    paragraph:
      "Drudots Technologies is an equal opportunity employer. We do not discriminate on the basis of gender, religion, ethnicity, age, disability or any other protected characteristic.",
    description: "",
  },

  // grievance-whistleblower
  {
    id: "grievance-whistleblower",
    title: "Grievance & Whistleblower Policy",
    icon: <MdReportProblem {...iconProps} />,
    paragraph:
      "Any concern regarding policy violation, harassment, unethical behavior or misconduct can be reported confidentially to HR. We ensure no retaliation against good-faith reporters.",
    description: "",
  },

  // training-development
  {
    id: "training-development",
    title: "Training & Professional Development",
    icon: <MdSchool {...iconProps} />,
    items: [
      "Annual learning budget for courses, certifications and workshops",
      "Access to online learning platforms (Udemy, Pluralsight, Frontend Masters)",
      "In-house training sessions and tech talks by senior team members",
      "Conference attendance support (local and international)",
      "Mentorship programs for junior developers and career growth guidance",
    ],
    description: "",
  },

  // equipment-technology
  {
    id: "equipment-technology",
    title: "Equipment & Technology Policy",
    icon: <MdComputer {...iconProps} />,
    items: [
      "Company-provided laptop (MacBook or high-spec Windows machine)",
      "Licensed software, IDEs and development tools (JetBrains, Adobe, etc.)",
      "Monitors, keyboards, and ergonomic accessories on request",
      "Equipment refresh cycle: 3–4 years or as per performance needs",
      "Lost/damaged equipment: employee responsibility if due to negligence",
    ],
    description: "",
  },

  // communication-collaboration
  {
    id: "communication-collaboration",
    title: "Communication & Collaboration",
    icon: <MdForum {...iconProps} />,
    items: [
      "Primary tools: Slack/Teams for messaging, Jira/Asana for project tracking",
      "Mandatory daily stand-ups and weekly sprint planning meetings",
      "All work communication must be documented in official channels",
      "Video calls required for important discussions and client meetings",
      "Response time: Within 4 business hours during working days",
    ],
    description: "",
  },

  // work-life-balance
  {
    id: "work-life-balance",
    title: "Work-Life Balance & Wellness",
    icon: <MdFavorite {...iconProps} />,
    items: [
      "No expectation to work beyond standard 40 hours/week unless critical",
      "Flexible working hours within core time (10 AM–4 PM PKT)",
      "Mental health support and counseling services available",
      "Encouraged to take regular breaks and utilize full leave entitlement",
      "No emails/messages expected on weekends or public holidays",
    ],
    description: "",
  },

  // social-media-policy
  {
    id: "social-media-policy",
    title: "Social Media & Online Presence",
    icon: <MdShare {...iconProps} />,
    items: [
      "Personal social media use during work hours should be minimal",
      "Never share confidential company or client information online",
      "When representing the company, maintain professional tone and ethics",
      "Company LinkedIn and social channels managed by marketing team only",
      "Any public tech content (blogs, talks) on company projects needs approval",
    ],
    description: "",
  },

  // travel-expense
  {
    id: "travel-expense",
    title: "Travel & Expense Reimbursement",
    icon: <MdFlight {...iconProps} />,
    items: [
      "Business travel requires prior approval from project manager/HR",
      "Company covers: flights, accommodation, meals and local transport",
      "Expense claims must be submitted within 15 days with receipts",
      "Per diem rates: PKR 5,000/day for domestic, $75/day for international",
      "Client visit expenses: fully covered as per project requirements",
    ],
    description: "",
  },

  // termination-offboarding
  {
    id: "termination-offboarding",
    title: "Termination & Offboarding",
    icon: <MdExitToApp {...iconProps} />,
    items: [
      "Notice period: 1 month for both employee and company",
      "Notice buyout possible with mutual agreement",
      "Exit interview to gather feedback and improve workplace culture",
      "Return all company equipment, access cards and documents",
      "Final settlement: salary, unused leaves and dues cleared within 30 days",
    ],
    description: "",
  },

  // health-safety
  {
    id: "health-safety",
    title: "Health & Workplace Safety",
    icon: <MdHealthAndSafety {...iconProps} />,
    items: [
      "First-aid kit available in office premises",
      "Ergonomic furniture and proper lighting to prevent strain injuries",
      "Regular sanitization and cleanliness standards maintained",
      "Fire safety equipment and emergency evacuation procedures in place",
      "Remote workers: encouraged to maintain ergonomic home office setup",
    ],
    description: "",
  },

  // innovation-learning
  {
    id: "innovation-learning",
    title: "Innovation & Continuous Learning",
    icon: <MdLightbulb {...iconProps} />,
    items: [
      "Employees encouraged to propose new ideas, tools and process improvements",
      "Quarterly innovation sessions to discuss emerging technologies",
      "Hackathons and internal competitions to foster creativity",
      "Open-source contribution encouraged (with prior approval)",
      "Recognition and rewards for innovative solutions and best practices",
    ],
    description: "",
  },

  // client-engagement
  {
    id: "client-engagement",
    title: "Client Engagement & Project Delivery",
    icon: <MdBusiness {...iconProps} />,
    items: [
      "All client communication must be professional and timely",
      "Project timelines and deliverables are commitments – meet them",
      "Regular progress updates and transparent communication with clients",
      "Quality assurance: code reviews, testing before delivery",
      "Client feedback is valued – incorporate it constructively",
    ],
    description: "",
  },
];
