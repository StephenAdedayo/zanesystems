import nexthero_image from "./nexthero_image.webp"
import pricing from "./pricing.webp"
import trust from "./trust.webp"
import choose from "./choose.webp"
import mission from "./mission.webp"
import { MdHexagon } from 'react-icons/md';
import { IoDiamondOutline, IoShieldCheckmark } from 'react-icons/io5';
import { CiGlobe } from 'react-icons/ci';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { IoMdTrendingUp } from 'react-icons/io';
import service1 from "./service1.webp"
import service2 from "./service2.webp"
import service3 from "./service3.webp"
import service4 from "./service4.webp"
import service5 from "./service5.webp"
import service6 from "./service6.webp"
import service7 from "./service7.webp"
import service8 from "./service8.webp"
import service9 from "./service9.webp"
import service10 from "./service10.webp"
import contact_image from "./contact_image.webp"
import about_image from "./about_image.webp"
import service from "./service.webp"



export const assets = {
    airplane:"/airplane.mp4",
    nexthero_image,
    pricing,
    trust,
    choose,
    mission,
    service1,
    service2,
    service3,
    service4,
    contact_image,
    about_image,
    service
}

export const services = [
  {
    number: "01",
    slug: "aircraft-procurement",
    name: "Aircraft Procurement Services",
    icon: "Plane",
    tags: ["Sourcing", "Acquisition", "Due Diligence"],
    shortDescription:
      "End-to-end aircraft acquisition support — from market analysis and vendor selection to negotiation, inspection, and delivery coordination.",
    details:
      "Zane Systems Limited provides comprehensive aircraft procurement services tailored for airlines, private operators, charter companies, and aviation investors. We manage the complete acquisition lifecycle — from initial market research and aircraft sourcing to supplier evaluation, negotiation, regulatory compliance verification, and final delivery coordination. Our team leverages deep industry relationships and market intelligence to ensure you acquire the right aircraft at the right price, with full transparency and zero compromise on safety or compliance.",
    features: [
      "Market research and aircraft sourcing",
      "Supplier evaluation and price negotiation",
      "Regulatory and airworthiness compliance verification",
      "Transaction and documentation coordination",
      "Risk assessment and cost optimization",
      "Pre-purchase inspection management",
    ],
    images: [service1, service2],
  },
  {
    number: "02",
    slug: "parts-procurement",
    name: "Aircraft Parts Procurement Services",
    icon: "Settings",
    tags: ["OEM Parts", "Aftermarket", "Certified"],
    shortDescription:
      "Globally sourced, fully certified aircraft components delivered with complete documentation and traceability for all major aircraft types.",
    details:
      "Zane Systems Limited sources and supplies OEM and aftermarket aircraft components to MRO facilities, airlines, and operators worldwide. Every part we procure is fully traceable, certified, and accompanied by complete airworthiness documentation. Our global supplier network and rigorous quality assurance process ensure that every component meets international aviation standards — whether you need a routine consumable or a critical line-replaceable unit. We handle the complexity of global sourcing so your operations stay on schedule.",
    features: [
      "OEM and aftermarket parts sourcing",
      "Full traceability and airworthiness documentation",
      "Multi-aircraft type coverage",
      "Rigorous quality assurance and inspection",
      "AOG priority sourcing and expedited delivery",
      "Competitive pricing through global vendor network",
    ],
    images: [service3, service4],
  },
  {
    number: "03",
    slug: "vendor-management",
    name: "Vendor & Supplier Management",
    icon: "Users",
    tags: ["Vetting", "Compliance", "Auditing"],
    shortDescription:
      "We manage your entire supplier ecosystem — from initial vetting and qualification to performance monitoring and compliance audits.",
    details:
      "Managing a reliable aviation supply chain requires more than just finding vendors — it demands continuous oversight, compliance enforcement, and performance evaluation. Zane Systems Limited offers a fully managed vendor and supplier management service, handling everything from initial qualification and onboarding to ongoing performance monitoring and regulatory audits. With access to our network of 500+ pre-approved global vendors, we give your organisation the confidence that every supplier in your chain meets the highest standards of quality, safety, and reliability.",
    features: [
      "Supplier identification and qualification",
      "Vendor onboarding and compliance verification",
      "Ongoing performance monitoring and KPI tracking",
      "Regulatory and quality audit coordination",
      "Supplier relationship management",
      "Risk assessment and mitigation strategies",
    ],
    images: [service5, service6],
  },
  {
    number: "04",
    slug: "logistics",
    name: "Logistics & Supply Chain Coordination",
    icon: "Globe",
    tags: ["Global Shipping", "AOG Support", "Customs"],
    shortDescription:
      "From warehouse to tarmac — we coordinate the full logistics chain including freight forwarding, customs clearance, and AOG emergency deliveries.",
    details:
      "Zane Systems Limited delivers end-to-end logistics and supply chain coordination services designed specifically for the demands of the aviation industry. We manage the full movement of aircraft parts and components — from origin warehouse to final destination — including international freight forwarding, customs clearance, dangerous goods handling, and AOG emergency response. Our logistics partnerships across four continents ensure that no matter where your aircraft is grounded or your facility is located, critical parts reach you with speed and reliability.",
    features: [
      "International freight forwarding and routing",
      "Customs clearance and import/export documentation",
      "AOG emergency logistics and rapid response",
      "Dangerous goods handling and compliance",
      "Real-time shipment tracking and visibility",
      "Last-mile delivery to MRO facilities and airports",
    ],
    images: [service7, service8],
  },
  {
    number: "05",
    slug: "consulting",
    name: "Procurement Consulting",
    icon: "BarChart",
    tags: ["Strategy", "Cost Reduction", "Process Audit"],
    shortDescription:
      "Strategic advisory for aviation procurement operations — reducing cost, improving lead times, and strengthening supplier relationships.",
    details:
      "Zane Systems Limited offers expert procurement consulting services for aviation organisations looking to optimise their supply chain strategy and reduce operational costs. Our consultants conduct in-depth audits of your existing procurement processes, identify inefficiencies and risks, and design tailored frameworks to improve performance across sourcing, supplier management, and logistics. Whether you are building a procurement function from the ground up or refining an existing one, our team brings the industry expertise and analytical rigour to drive measurable results.",
    features: [
      "Procurement process audit and gap analysis",
      "Supply chain strategy design and optimisation",
      "Cost reduction and spend analysis",
      "Supplier rationalisation and consolidation",
      "Procurement policy and compliance framework",
      "Training and capability building for procurement teams",
    ],
    images: [service9, service10],
  },
];


export const reasons = [
  {
    icon: "⚡",
    title: "AOG Rapid Response",
    description:
      "Aircraft on Ground situations cost thousands per hour. Our emergency sourcing team operates 24/7 to get critical parts to you as fast as humanly possible.",
  },
  {
    icon: "🌐",
    title: "Global Reach",
    description:
      "With supplier relationships across four continents and logistics partners in 80+ countries, no destination is out of reach for the Zane Systems network.",
  },
];

export const checklist = [
  "Full documentation and certification on every component",
  "Direct access to 500+ globally approved vendors",
  "AOG emergency response — 24 hours, 7 days, worldwide",
  "Dedicated account manager for every client relationship",
  "ISO 9001 certified quality management system",
];


export const coreValues = [
  {
    id: 1,
    number: "01",
    title: "Strategic Integrity",
    icon: <MdHexagon />,
    description:
      "We operate with transparency, accountability, and ethical procurement practices. Every sourcing decision is guided by trust, compliance, and long-term value creation.",
  },
  {
    id: 2,
    number: "02",
    title: "Operational Precision",
    icon: <IoDiamondOutline />,
    description:
      "Accuracy is essential in aviation. From aircraft procurement to parts sourcing and logistics coordination, we execute every process with meticulous attention to detail.",
  },
  {
    id: 3,
    number: "03",
    title: "Global Partnership",
    icon: <CiGlobe />,
    description:
      "We cultivate strong relationships with trusted suppliers, logistics partners, and aviation stakeholders worldwide to ensure reliability across every transaction.",
  },
  {
    id: 4,
    number: "04",
    title: "Compliance & Accountability",
    icon: <IoShieldCheckmark />,
    description:
      "We adhere strictly to international aviation standards and regulatory requirements, maintaining complete documentation and audit transparency across our operations.",
  },
  {
    id: 5,
    number: "05",
    title: "Client-Centered Collaboration",
    icon: <AiOutlineUserSwitch />,
    description:
      "We work as an extension of our clients’ teams — understanding operational demands, minimizing risk, and delivering solutions tailored to specific aviation needs.",
  },
  {
    id: 6,
    number: "06",
    title: "Continuous Advancement",
    icon: <IoMdTrendingUp />,
    description:
      "As the aviation industry evolves, we refine our procurement strategies, supplier networks, and operational processes to remain agile, efficient, and forward-thinking.",
  },
];
