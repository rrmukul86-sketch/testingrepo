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

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    alt: "Team planning business technology strategy"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern dashboard and analytics workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    alt: "Enterprise software collaboration"
  }
];

export const services = [
  {
    title: "ERP Solutions",
    description:
      "Integrated business software for finance, stock, operations, procurement, and reporting.",
    longDescription:
      "Unify finance, inventory, procurement, reporting, and operational visibility in one structured ERP environment built for scaling businesses.",
    icon: BriefcaseBusiness,
    href: "/erp",
    features: [
      "Finance, stock, and procurement in one connected workflow",
      "Custom user roles and approval routing",
      "Executive dashboards and department-level reporting"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "ERP planning"
      },
      {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        alt: "ERP dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        alt: "ERP collaboration"
      }
    ]
  },
  {
    title: "Cloud Services",
    description:
      "Managed hosting, backup systems, remote access, migration support, and scalable infrastructure.",
    longDescription:
      "Build secure, cloud-ready business environments with backup automation, remote access, and infrastructure planning designed for uptime and resilience.",
    icon: Cloud,
    href: "/services",
    features: [
      "Cloud migration and environment setup",
      "Business continuity with automated backups",
      "Scalable remote access and managed hosting"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Cloud infrastructure"
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "Cloud services team"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        alt: "Server environment"
      }
    ]
  },
  {
    title: "Payroll Management",
    description:
      "Attendance, salary processing, deductions, compliance, and employee record handling.",
    longDescription:
      "Reduce payroll complexity with a cleaner employee workflow that covers attendance, salary processing, compliance checks, and reporting visibility.",
    icon: CreditCard,
    href: "/services",
    features: [
      "Attendance and leave sync",
      "Salary cycles and statutory deductions",
      "Payslip distribution and audit-ready history"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        alt: "Payroll team"
      },
      {
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
        alt: "Payroll documents"
      },
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        alt: "Billing operations"
      }
    ]
  },
  {
    title: "POS & Billing",
    description:
      "Retail billing, stock visibility, receipt generation, and outlet-level sales tracking.",
    longDescription:
      "Support stores and branch networks with efficient billing, stock movement, receipt workflows, and location-wise reporting.",
    icon: ScanSearch,
    href: "/services",
    features: [
      "Fast billing and receipt workflows",
      "Item-level stock and outlet visibility",
      "Daily, weekly, and branch-level reporting"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        alt: "Point of sale system"
      },
      {
        src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
        alt: "Retail billing setup"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        alt: "Store operations"
      }
    ]
  },
  {
    title: "E-commerce Solutions",
    description:
      "Sync products, orders, inventory, and customer data across websites and marketplaces.",
    longDescription:
      "Create better coordination between your online storefronts, backend systems, and inventory movement using practical integration workflows.",
    icon: ShoppingCart,
    href: "/services",
    features: [
      "Marketplace and store sync",
      "Order, shipping, and inventory alignment",
      "Connected commerce reporting"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt: "E-commerce analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Commerce team"
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        alt: "Online business"
      }
    ]
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
    description: "A starter plan for smaller teams.",
    features: ["Core modules", "Email support", "Standard onboarding"],
    detailedFeatures: ["Setup consultation", "Basic workflow templates", "Monthly performance summary"],
    altPrice: "$399",
    altLabel: "Single rollout",
    altFeatures: ["One-time implementation", "Admin training", "Single department setup"],
    cta: "Get Started"
  },
  {
    name: "Standard",
    price: "$129",
    description: "The most balanced option for growing teams.",
    features: ["ERP + payroll", "Priority support", "Reporting dashboard"],
    detailedFeatures: ["Cross-team workflow mapping", "Advanced dashboards", "Cloud readiness review"],
    altPrice: "$999",
    altLabel: "Multi-team rollout",
    altFeatures: ["3 department setup", "Advanced onboarding", "Priority implementation lead"],
    cta: "Choose Standard",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Designed around complex delivery needs.",
    features: ["Custom workflows", "Dedicated manager", "Advanced controls"],
    detailedFeatures: ["Custom integrations", "Branch rollout strategy", "Security and governance review"],
    altPrice: "Custom",
    altLabel: "Enterprise bundle",
    altFeatures: ["Tailored implementation scope", "Dedicated success team", "Custom support SLA"],
    cta: "Talk to Sales"
  }
];

export const aboutStats = [
  { value: 25000, suffix: "+", label: "Businesses supported" },
  { value: 29, suffix: "+", label: "Years in IT solutions" },
  { value: 98, suffix: "%", label: "Client retention on support plans" }
];

export const aboutSlides = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "Company collaboration"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern office"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Software strategy"
  }
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

export const megaMenu = {
  busyServices: services.slice(0, 2).map((service) => ({
    title: service.title,
    description: service.description,
    href: service.href,
    icon: service.icon
  })),
  busyAddOns: productModules.slice(0, 3).map((item) => ({
    title: item.title,
    description: item.description,
    href: "/services",
    icon: item.icon
  })),
  otherServices: services.slice(2).map((service) => ({
    title: service.title,
    description: service.description,
    href: service.href,
    icon: service.icon
  }))
};
