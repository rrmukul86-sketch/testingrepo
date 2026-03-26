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
  { label: "Power Platform", href: "/erp" },
  { label: "Clients", href: "/clients" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const heroStats = [
  { value: "120+", label: "Apps and portals delivered" },
  { value: "85+", label: "Automated workflows launched" },
  { value: "40+", label: "Integration projects completed" }
];

export const heroPillars = [
  "Power Apps, Power Automate, and model-driven app delivery aligned to business workflows",
  "Third-party integrations that connect Microsoft, CRM, ERP, websites, and internal tools",
  "Custom websites and business applications built for operations, reporting, and growth"
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
    title: "Power Apps Development",
    description:
      "Build canvas apps for operations, approvals, field teams, checklists, and internal business workflows.",
    longDescription:
      "We design Power Apps solutions that replace manual forms, spreadsheets, and disconnected processes with responsive apps tailored to your teams.",
    icon: BriefcaseBusiness,
    href: "/erp",
    features: [
      "Canvas apps for HR, operations, audit, and service teams",
      "Role-aware forms, status flows, and connected data sources",
      "Mobile-friendly experiences for internal business use"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "Power Apps planning session"
      },
      {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        alt: "Business app dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        alt: "App delivery workshop"
      }
    ]
  },
  {
    title: "Power Automate Solutions",
    description:
      "Automate approvals, notifications, document routing, reminders, and multi-step business processes.",
    longDescription:
      "We streamline repetitive work with Power Automate flows that reduce manual follow-up, improve accountability, and speed up delivery across teams.",
    icon: Cloud,
    href: "/services",
    features: [
      "Approval flows, reminders, escalations, and notifications",
      "Document movement between Microsoft 365 and external systems",
      "Automation for sales, HR, finance, and support operations"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Automation planning board"
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "Power Automate workflow team"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        alt: "Business automation workspace"
      }
    ]
  },
  {
    title: "Model-Driven Apps",
    description:
      "Structured model-driven apps for process-heavy teams that need governed data and role-based workflows.",
    longDescription:
      "Model-driven apps help organizations manage records, processes, approvals, and customer or operational data in a scalable, governed environment.",
    icon: CreditCard,
    href: "/services",
    features: [
      "Role-based views, forms, and business process stages",
      "Dataverse-backed solutions for structured operations",
      "Scalable application architecture for growing teams"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        alt: "Model-driven app team"
      },
      {
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
        alt: "Structured records workspace"
      },
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        alt: "Dataverse process management"
      }
    ]
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect Microsoft tools with ERP, CRM, payment platforms, websites, and external APIs.",
    longDescription:
      "We design and implement integrations that keep data flowing between business platforms so teams can work without duplicate entry and fragmented reporting.",
    icon: ScanSearch,
    href: "/services",
    features: [
      "API-based integrations across internal and external systems",
      "Data sync for customers, orders, forms, and operational records",
      "Cleaner reporting through connected information flows"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        alt: "Third-party integration dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
        alt: "Connected systems workshop"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        alt: "API integration planning"
      }
    ]
  },
  {
    title: "Websites & Custom Applications",
    description:
      "Create websites, client portals, internal tools, and tailored web applications for your business.",
    longDescription:
      "From marketing websites to business applications, we build digital experiences that combine strong design, useful workflows, and the integrations your teams need.",
    icon: ShoppingCart,
    href: "/services",
    features: [
      "Corporate websites, portals, and application interfaces",
      "Custom forms, dashboards, and process-driven web modules",
      "Integrated delivery with Power Platform and external tools"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt: "Website and application analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Web application delivery team"
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        alt: "Custom digital platform"
      }
    ]
  }
];

export const productModules = [
  {
    slug: "hrms-add-ons",
    title: "Canvas Apps",
    description: "Custom Power Apps for inspections, requests, checklists, onboarding, and internal workflows.",
    icon: Users,
    overview:
      "Canvas Apps are ideal for teams that need focused, user-friendly applications connected to Microsoft 365, Dataverse, SharePoint, or external systems.",
    highlights: [
      "Responsive apps for desktop, tablet, and field usage",
      "Connected forms, approvals, and operational actions",
      "Faster replacement of spreadsheet-driven processes"
    ],
    useCases: [
      "Inspection apps, request apps, and internal service apps",
      "Operational teams replacing manual tracking sheets",
      "Businesses that need task-driven app experiences quickly"
    ],
    projects: [
      "Asset management app",
      "Leave management app",
      "HR employee module",
      "Visitor management app",
      "Expense claim app",
      "Helpdesk request app",
      "Purchase request app",
      "Vehicle tracking app",
      "Site inspection app"
    ]
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description: "Power Automate flows for approvals, reminders, escalations, notifications, and document routing.",
    icon: Workflow,
    overview:
      "Workflow Automation helps teams reduce repetitive manual work and build reliable approval and notification processes across Microsoft and third-party platforms.",
    highlights: [
      "Approval stages for HR, finance, sales, and operations",
      "Escalation rules for pending requests and tasks",
      "Automated alerts and handoffs across systems"
    ],
    useCases: [
      "Teams struggling with email-based approvals",
      "Businesses that need faster turnaround and better tracking",
      "Departments that want repeatable digital workflows"
    ],
    projects: [
      "Leave approval flow",
      "Document approval flow",
      "Invoice processing automation",
      "Reminder and escalation workflow",
      "Employee onboarding automation",
      "Purchase approval process",
      "Daily reporting automation",
      "Ticket routing flow",
      "Notification workflow for field teams"
    ]
  },
  {
    slug: "cloud-backup-suite",
    title: "Model-Driven Solutions",
    description: "Dataverse-based model-driven apps for record management, lifecycle processes, and governed workflows.",
    icon: ServerCog,
    overview:
      "Model-driven solutions are designed for organizations that need structured records, governed permissions, process stages, and scalable business application architecture.",
    highlights: [
      "Dataverse-first architecture for process-heavy teams",
      "Role-based forms, dashboards, and lifecycle stages",
      "Scalable structure for customer, service, and operations data"
    ],
    useCases: [
      "Service operations and CRM-style business processes",
      "Teams managing high-volume records with approvals",
      "Organizations needing structured governance in applications"
    ],
    projects: [
      "Customer issue tracking system",
      "Sales follow-up module",
      "Service request lifecycle app",
      "Vendor onboarding system",
      "Project management tracker",
      "Compliance review app",
      "Contract management module",
      "Branch operations tracker",
      "Employee grievance system"
    ]
  },
  {
    slug: "reporting-hub",
    title: "Reporting Hub",
    description: "Dashboards and reporting experiences built around app usage, operations, approvals, and business KPIs.",
    icon: ChartNoAxesCombined,
    overview:
      "Reporting Hub turns operational data into clear dashboards so managers can monitor app activity, team performance, approvals, and delivery outcomes.",
    highlights: [
      "Role-based dashboards for leaders and delivery teams",
      "Operational views across apps, flows, and integrations",
      "Visual KPI experiences designed for quick decisions"
    ],
    useCases: [
      "Leadership teams reviewing digital operations",
      "Managers tracking approvals, tasks, and service delivery",
      "Organizations combining data from multiple systems"
    ],
    projects: [
      "Power BI operations dashboard",
      "Approval status analytics",
      "Sales and lead reporting",
      "Asset performance dashboard",
      "HR activity insights",
      "Support SLA dashboard",
      "Executive KPI reporting",
      "Workflow health dashboard",
      "Integration monitoring report"
    ]
  },
  {
    slug: "support-desk-tools",
    title: "Website Delivery",
    description: "Corporate websites, portals, landing pages, and modern web experiences for growing businesses.",
    icon: Headset,
    overview:
      "Website Delivery covers branded business websites and portals that support lead generation, customer communication, service presentation, and digital engagement.",
    highlights: [
      "Modern responsive websites with strong information architecture",
      "Landing pages, service pages, and portal-ready interfaces",
      "Delivery aligned with integrations and business goals"
    ],
    useCases: [
      "Businesses refreshing their digital presence",
      "Teams launching product, service, or partner portals",
      "Organizations needing websites connected to business systems"
    ],
    projects: [
      "Corporate website build",
      "Service portfolio website",
      "Client self-service portal",
      "Lead capture landing page",
      "Employee portal website",
      "Vendor portal interface",
      "Partner registration portal",
      "Internal dashboard portal",
      "Marketing website redesign"
    ]
  },
  {
    slug: "custom-integrations",
    title: "Custom Applications",
    description: "Tailored web applications built around business logic, user roles, reporting, and integrations.",
    icon: Blocks,
    overview:
      "Custom applications help businesses solve specific operational challenges with purpose-built interfaces, workflows, dashboards, and connected platform architecture.",
    highlights: [
      "Custom business modules tailored to your exact process",
      "Integrated delivery across Microsoft and third-party platforms",
      "Application journeys designed for usability and scale"
    ],
    useCases: [
      "Businesses needing more than standard packaged software",
      "Teams creating client, vendor, or internal operational tools",
      "Organizations combining apps, automation, and reporting in one experience"
    ],
    projects: [
      "ERP and CRM integration",
      "Website and Power Apps integration",
      "Payment gateway integration",
      "Attendance system integration",
      "WhatsApp notification integration",
      "Email and document sync integration",
      "Third-party API connector build",
      "Custom admin application",
      "Operations control panel"
    ]
  }
];

export function getProductModuleBySlug(slug: string) {
  return productModules.find((module) => module.slug === slug);
}

export const pricingPlans = [
  {
    name: "Starter",
    price: "Custom",
    description: "A focused engagement for a single app, workflow, or landing website.",
    features: ["Single solution scope", "Discovery workshop", "Delivery planning"],
    detailedFeatures: ["Canvas app or website starter build", "Basic automation setup", "Handover and guidance"],
    altPrice: "Project",
    altLabel: "Quick launch",
    altFeatures: ["Small team rollout", "Focused timeline", "Business-ready starter delivery"],
    cta: "Start Project"
  },
  {
    name: "Growth",
    price: "Custom",
    description: "A balanced package for apps, automation, integrations, and reporting.",
    features: ["Multi-module delivery", "Integration planning", "Priority collaboration"],
    detailedFeatures: ["Cross-team workflow mapping", "Reporting and dashboard design", "Structured rollout support"],
    altPrice: "Scale",
    altLabel: "Business rollout",
    altFeatures: ["Department-wide implementation", "Automation and app bundle", "Delivery lead involvement"],
    cta: "Plan Rollout",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Designed for larger businesses with complex systems, governance, and integrations.",
    features: ["Platform architecture", "Dedicated engagement lead", "Enterprise controls"],
    detailedFeatures: ["Custom integrations", "Governance and environment planning", "Enterprise solution roadmap"],
    altPrice: "Custom",
    altLabel: "Strategic delivery",
    altFeatures: ["Tailored implementation scope", "Cross-platform architecture", "Ongoing optimization support"],
    cta: "Talk to Sales"
  }
];

export const aboutStats = [
  { value: 120, suffix: "+", label: "Apps and digital solutions delivered" },
  { value: 85, suffix: "+", label: "Workflow automations launched" },
  { value: 96, suffix: "%", label: "Projects delivered with repeat engagements" }
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

export const deliveryJourney = [
  {
    title: "Discovery & solution mapping",
    description: "We understand your process, users, current tools, and outcomes before we shape the application or automation approach.",
    metric: "Week 1",
    icon: Workflow
  },
  {
    title: "Design & build",
    description: "Apps, flows, dashboards, integrations, and interface layers are built around your actual business workflow and user roles.",
    metric: "2-4 weeks",
    icon: Cloud
  },
  {
    title: "Testing & go-live",
    description: "Users validate the solution, the rollout is staged properly, and launch support is handled with practical coordination.",
    metric: "Go-live",
    icon: Users
  },
  {
    title: "Support & optimization",
    description: "Post-launch work includes refinements, additional automation, reporting improvements, and long-term platform evolution.",
    metric: "Ongoing",
    icon: Headset
  }
];

export const businessOutcomes = [
  {
    title: "Faster internal execution",
    description: "Teams work with digital forms, guided processes, and connected systems instead of manual follow-up and repeated data entry.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Stronger process control",
    description: "Role-based access, tracked approvals, and governed application design bring better visibility and accountability to operations.",
    icon: Lock
  },
  {
    title: "Scalable digital foundation",
    description: "Power Platform, integrations, and custom applications create a foundation you can extend as teams, processes, and services grow.",
    icon: BriefcaseBusiness
  }
];

export const whyChooseUs = [
  {
    title: "Platform-focused delivery",
    description: "We build around Power Apps, Power Automate, model-driven apps, and practical business process design.",
    icon: Lock
  },
  {
    title: "Responsive collaboration",
    description: "From discovery to post-launch support, we stay involved as your team refines the solution.",
    icon: LifeBuoy
  },
  {
    title: "Automation mindset",
    description: "We look for opportunities to remove repeated manual tasks and improve operational flow.",
    icon: Sparkles
  },
  {
    title: "Built for growth",
    description: "Websites, apps, automations, and integrations are planned so they can grow with your business.",
    icon: Wrench
  }
];

export const erpModules = [
  {
    title: "Canvas App Experiences",
    description: "Task-focused Power Apps built for internal teams, mobile users, and operational workflows.",
    icon: Layers3
  },
  {
    title: "Power Automate Flows",
    description: "Approvals, alerts, document movement, and background automations connected to your apps and systems.",
    icon: Blocks
  },
  {
    title: "Model-Driven Architecture",
    description: "Structured applications with Dataverse, governed roles, and scalable lifecycle processes.",
    icon: ShoppingCart
  },
  {
    title: "Integration Layer",
    description: "Connect websites, Microsoft tools, APIs, CRM platforms, and business systems into one working flow.",
    icon: Workflow
  }
];

export const erpHighlights = [
  "Canvas apps and model-driven apps shaped around your business process",
  "Power Automate workflows for approvals, reminders, and document routing",
  "Integration planning across Microsoft 365, APIs, CRM, ERP, and websites",
  "Scalable architecture for websites, portals, and custom applications"
];

export const contactDetails = [
  { label: "Email", value: "hello@krishya.in" },
  { label: "Phone", value: "+91 99999 99999" },
  { label: "Office", value: "India | Power Platform, integration, website, and app delivery" }
];

export const clientLogos = [
  { name: "Online24x7 Pvt. Ltd." },
  { name: "Gigmos Solutions Pvt. Ltd." },
  { name: "Teach Mahindra" },
  { name: "Comviva Technologies Ltd." },
  { name: "SKT Wellcare Pvt. Ltd." },
  { name: "LMT Mines & Minerals Pvt. Ltd." }
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
    href: `/products/${item.slug}`,
    icon: item.icon
  })),
  otherServices: services.slice(2).map((service) => ({
    title: service.title,
    description: service.description,
    href: service.href,
    icon: service.icon
  }))
};
