import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaymentsIcon from "@mui/icons-material/Payments";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export const policiesData = [
  {
    id: "code-of-conduct",
    title: "Code of Conduct & Professional Ethics",
    icon: <GavelIcon sx={{ color: "#fff" }} />,
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
  {
    id: "remote-hybrid-work",
    title: "Remote & Hybrid Work Policy",
    icon: <HomeIcon sx={{ color: "#fff" }} />,
    items: [
      "Core working hours: 10:00 AM – 4:00 PM PKT (Monday–Friday)",
      "Full remote allowed with 2–3 mandatory office days per month in Lahore",
      "Company provides necessary tools: laptop, licensed software, high-speed internet allowance",
      "Daily stand-ups (10–15 min) and weekly sprint planning required",
      "Use of Slack / Teams for communication + daily updates",
    ],
    description: "",
  },
  {
    id: "leave-attendance",
    title: "Leave & Attendance Policy",
    icon: <CalendarTodayIcon sx={{ color: "#fff" }} />,
    items: [
      "20 paid annual leaves + 10 paid sick leaves per year",
      "Public holidays (Pakistan official + selected religious holidays)",
      "Maternity leave: 12 weeks (as per law), Paternity leave: 5 days paid",
      "Leaves require prior approval (except emergency sick leave)",
      "Unpaid leave possible in special circumstances (case-by-case)",
    ],
    description: "",
  },
  {
    id: "compensation-benefits",
    title: "Compensation & Benefits",
    icon: <PaymentsIcon sx={{ color: "#fff" }} />,
    items: [
      "Competitive salary paid on the 1st–5th of every month",
      "Performance bonus (quarterly / project-based)",
      "Health insurance (OPD + hospitalization coverage)",
      "Internet & electricity reimbursement for remote employees",
      "Professional development budget (courses, books, conferences)",
    ],
    description: "",
  },
  {
    id: "data-security-ip",
    title: "Data Security & Intellectual Property",
    icon: <SecurityIcon sx={{ color: "#fff" }} />,
    items: [
      "All employees sign NDA on joining",
      "Client code, designs & data remain strictly confidential",
      "Company owns all work produced during employment",
      "Use of approved version control (Git) and secure repositories only",
      "Personal devices must follow company security policies if used for work",
    ],
    description: "",
  },
  {
    id: "performance-growth",
    title: "Performance, Growth & Reviews",
    icon: <TrendingUpIcon sx={{ color: "#fff" }} />,
    items: [
      "Bi-annual performance reviews (June & December)",
      "Clear OKRs / KPIs set at project & individual level",
      "Training & certification support (Udemy, Frontend Masters, conferences)",
      "Promotion & salary review based on performance & business needs",
    ],
    description: "",
  },
  {
    id: "diversity-inclusion",
    title: "Diversity, Equity & Inclusion",
    icon: <PeopleIcon sx={{ color: "#fff" }} />,
    paragraph:
      "Drudots Technologies is an equal opportunity employer. We do not discriminate on the basis of gender, religion, ethnicity, age, disability or any other protected characteristic.",
    description: "",
  },
  {
    id: "grievance-whistleblower",
    title: "Grievance & Whistleblower Policy",
    icon: <ReportProblemIcon sx={{ color: "#fff" }} />,
    paragraph:
      "Any concern regarding policy violation, harassment, unethical behavior or misconduct can be reported confidentially to HR. We ensure no retaliation against good-faith reporters.",
    description: "",
  },
];
