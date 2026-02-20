import close_black from './close-black.png';
import close_white from './close-white.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import nexthero_image from "./nexthero_image.jpg"
import pricing from "./pricing.jpg"
import trust from "./trust.jpg"
import choose from "./choose.jpg"
import mission from "./mission.jpg"
import { MdHexagon } from 'react-icons/md';
import { IoDiamondOutline, IoShieldCheckmark } from 'react-icons/io5';
import { CiGlobe } from 'react-icons/ci';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { IoMdTrendingUp } from 'react-icons/io';


export const assets = {
    airplane:"/airplane.mp4",
    close_black,
    close_white,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    right_arrow_white,
    right_arrow_bold,
    right_arrow_bold_dark,
    right_arrow,
    send_icon,
    nexthero_image,
    pricing,
    trust,
    choose,
    mission
}

export const services = [
  {
    id: 1,
    slug: "aircraft-procurement-services",
    service: "Aircraft Procurement Services",
    shortDescription:
      "Strategic sourcing and acquisition support for aircraft operators and aviation stakeholders.",
    details:
      "Zane Systems Limited provides end-to-end aircraft procurement services designed to support airlines, private operators, and aviation investors. We manage the entire acquisition lifecycle — from market research and supplier identification to negotiation, compliance verification, and transaction coordination. Our approach ensures transparency, cost efficiency, and regulatory compliance at every stage of the procurement process.",
    features: [
      "Market research and aircraft sourcing",
      "Supplier evaluation and negotiation",
      "Regulatory compliance verification",
      "Transaction and documentation coordination",
      "Risk assessment and cost optimization",
    ],
    images: [
      "/images/services/aircraft-procurement-1.jpg",
      "/images/services/aircraft-procurement-2.jpg",
    ],
    icon: "Plane",
    cta: "Learn More",
  },
  {
    id: 2,
    slug: "aircraft-parts-procurement-services",
    service: "Aircraft Parts Procurement Services",
    shortDescription:
      "Certified aircraft components sourced through a trusted global supplier network.",
    details:
      "We specialize in sourcing high-quality, certified aircraft components to support maintenance, repair, and operational continuity. Leveraging a global network of trusted manufacturers and distributors, Zane Systems Limited ensures timely delivery, authenticity verification, and strict adherence to aviation industry standards.",
    features: [
      "Certified OEM and aftermarket parts sourcing",
      "Global supplier network access",
      "Authenticity and documentation verification",
      "Cost-effective procurement strategies",
      "Urgent and AOG support coordination",
    ],
    images: [
      "/images/services/parts-procurement-1.jpg",
      "/images/services/parts-procurement-2.jpg",
    ],
    icon: "Settings",
    cta: "Request Information",
  },
  {
    id: 3,
    slug: "vendor-supplier-management",
    service: "Vendor & Supplier Management",
    shortDescription:
      "Building strong supplier partnerships to ensure reliability and performance.",
    details:
      "Our vendor and supplier management services are designed to create stable, transparent, and performance-driven relationships across the aviation supply chain. We assess supplier capabilities, monitor compliance standards, and maintain strategic partnerships to ensure consistent quality and timely fulfillment.",
    features: [
      "Supplier identification and onboarding",
      "Performance monitoring and evaluation",
      "Compliance and certification checks",
      "Contract negotiation support",
      "Long-term partnership development",
    ],
    images: [
      "/images/services/vendor-management-1.jpg",
      "/images/services/vendor-management-2.jpg",
    ],
    icon: "Handshake",
    cta: "Partner With Us",
  },
  {
    id: 4,
    slug: "logistics-supply-chain-coordination",
    service: "Logistics & Supply Chain Coordination",
    shortDescription:
      "Efficient logistics planning to ensure seamless global delivery.",
    details:
      "Zane Systems Limited coordinates logistics and supply chain operations to ensure aircraft components and assets are delivered safely and on time. From freight coordination and customs documentation to inventory planning and risk mitigation, we streamline complex supply chains for maximum efficiency.",
    features: [
      "Freight and shipment coordination",
      "Customs and documentation management",
      "Inventory planning and tracking",
      "Global distribution support",
      "Supply chain risk mitigation",
    ],
    images: [
      "/images/services/logistics-1.jpg",
      "/images/services/logistics-2.jpg",
    ],
    icon: "Truck",
    cta: "Optimize Your Supply Chain",
  },
  {
    id: 5,
    slug: "procurement-consulting",
    service: "Procurement Consulting",
    shortDescription:
      "Strategic advisory services to improve procurement efficiency and performance.",
    details:
      "Our procurement consulting services help aviation organizations refine their sourcing strategies, reduce operational costs, and strengthen supplier relationships. We provide data-driven insights, process optimization guidance, and tailored solutions that align procurement operations with long-term business objectives.",
    features: [
      "Procurement strategy development",
      "Cost analysis and optimization",
      "Process improvement recommendations",
      "Supplier risk assessment",
      "Operational performance evaluation",
    ],
    images: [
      "/images/services/consulting-1.jpg",
      "/images/services/consulting-2.jpg",
    ],
    icon: "Briefcase",
    cta: "Speak With a Consultant",
  },
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
