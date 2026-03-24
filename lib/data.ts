import {
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Cloud,
  CreditCard,
  Headset,
  Layers3,
  LifeBuoy,
  Lock,
  ScanSearch,
  ServerCog,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  Wrench
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ERP", href: "/erp" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const heroStats = [
  { value: "25,000+", label: "Clients served" },
  { value: "29+", label: "Years experience" },
  { value: "120+", label: "Implementation specialists" }
];

export const services = [
  {
    title: "ERP Solutions",
    description:
      "Integrated business software for finance, stock, operations, procurement, and reporting.",
    icon: BriefcaseBusiness,
    href: "/erp",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Payroll Software",
    description:
      "Dummy payroll workflows for attendance, salary processing, deductions, and employee records.",
    icon: CreditCard,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "POS & Billing",
    description:
      "Modern billing, stock visibility, receipt generation, and outlet-level sales tracking.",
    icon: ScanSearch,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "E-Commerce Integration",
    description:
      "Sync products, orders, inventory, and customer data across websites and marketplaces.",
    icon: ShoppingCart,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cloud Services",
    description:
      "Scalable hosting, backups, remote access, migration support, and managed business infrastructure.",
    icon: Cloud,
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  }
];

export const productModules = [
  {
    title: "HRMS Add-ons",
    description: "Dummy modules for leave, attendance, onboarding, and employee lifecycle tracking.",
    icon: Users
  },
  {
    title: "Workflow Automation",
    description: "Approval routing, reminders, escalations, and recurring process automations.",
    icon: Workflow
  },
  {
    title: "Cloud Backup Suite",
    description: "Daily backup flows, sync dashboards, and restore checkpoints for business systems.",
    icon: ServerCog
  },
  {
    title: "Reporting Hub",
    description: "Visual dashboards for finance, inventory, payroll, and executive-level insights.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Support Desk Tools",
    description: "Ticket handling, request tracking, SLA monitoring, and service workflows.",
    icon: Headset
  },
  {
    title: "Custom Integrations",
    description: "Dummy APIs and connectors to bridge ERP, CRM, billing, and cloud ecosystems.",
    icon: Blocks
  }
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    description: "A starter plan for small businesses beginning digital operations.",
    features: ["Core modules", "Email support", "Standard onboarding"],
    cta: "Get Started"
  },
  {
    name: "Standard",
    price: "$129",
    description: "A balanced package for teams that need ERP, payroll, and cloud readiness.",
    features: ["ERP + payroll", "Priority support", "Reporting dashboard"],
    cta: "Choose Standard",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "A tailored solution with custom integrations, rollout planning, and dedicated support.",
    features: ["Custom workflows", "Dedicated manager", "Advanced controls"],
    cta: "Talk to Sales"
  }
];

export const aboutStats = [
  { value: 25000, suffix: "+", label: "Businesses supported" },
  { value: 29, suffix: "+", label: "Years in IT solutions" },
  { value: 98, suffix: "%", label: "Client retention on support plans" }
];

export const whyChooseUs = [
  {
    title: "Trusted delivery",
    description: "Years of hands-on delivery across finance, manufacturing, retail, and services.",
    icon: Lock
  },
  {
    title: "Responsive support",
    description: "Fast post-sales help for onboarding, troubleshooting, upgrades, and training.",
    icon: LifeBuoy
  },
  {
    title: "Automation mindset",
    description: "We reduce repetitive work through clean business workflows and system design.",
    icon: Sparkles
  },
  {
    title: "Scalable systems",
    description: "Solutions grow with your teams, branches, processes, and reporting needs.",
    icon: Wrench
  }
];

export const erpModules = [
  {
    title: "Finance & Accounting",
    description: "Dummy ledgers, vouchers, receivables, payables, and compliance-friendly reporting.",
    icon: Layers3
  },
  {
    title: "Inventory Control",
    description: "Track stock movement, warehouses, reorder levels, and item availability in one place.",
    icon: Blocks
  },
  {
    title: "Sales & Distribution",
    description: "Manage quotations, orders, billing, delivery notes, and channel-level sales performance.",
    icon: ShoppingCart
  },
  {
    title: "Procurement",
    description: "Vendor management, purchase requests, approvals, and GRN flow with dummy records.",
    icon: Workflow
  }
];

export const erpHighlights = [
  "Dummy dashboard cards with live KPI-style visuals",
  "Sample finance, stock, HR, and sales workflows",
  "Cloud deployment ready architecture",
  "Role-based views for admin, finance, and operations teams"
];

export const contactDetails = [
  { label: "Email", value: "sales@compactsoftwares.in" },
  { label: "Phone", value: "+91 99999 99999" },
  { label: "Office", value: "India | Delivery and support across multiple industries" }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" }
];
