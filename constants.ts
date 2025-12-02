import { NavItem, Service, Product, Project, Job, NewsItem } from './types';
import { Ruler, Truck, ShieldCheck, Phone, Wrench, Home, Droplets, Hammer } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
];

export const CONTACT_INFO = {
  address: "Off Achimota-Nsawam road, Taifa Junction, Ga West District, Accra- Ghana",
  phones: ["+233 302 410866", "+233 243690402"],
  email: "info@rockstersgroup.com",
  website: "rockstersgroup.com"
};

export const SERVICES: Service[] = [
  {
    title: "Free Estimate and Technical Advice",
    description: "We provide professional estimates and assist clients with decision making at no extra cost in relation to product design, colour and thicknesses.",
    icon: Ruler
  },
  {
    title: "Quick Production",
    description: "Rocksters has the fastest production & delivery time in the roofing industry, averaging 3–5 working days.",
    icon: Hammer
  },
  {
    title: "Free Delivery",
    description: "Complimentary delivery services to your site within our operational zones.",
    icon: Truck
  },
  {
    title: "Roof & Ceiling Installation",
    description: "Expert installation services for all our roofing and ceiling products.",
    icon: Home
  },
  {
    title: "Re-roofing",
    description: "Professional replacement of old roofs with modern, durable Rocksters systems.",
    icon: Wrench
  },
  {
    title: "Rain Water Harvesting",
    description: "Installation of rain gutters for efficient water collection and management.",
    icon: Droplets
  },
  {
    title: "After Sales Service",
    description: "We follow up after every sale. Complaints are responded to within 72 hours.",
    icon: ShieldCheck
  }
];

export const CLIENTS = [
  "Ghana Ports and Harbour",
  "Newmont Ghana Limited",
  "PW Construction Ghana",
  "Amandi Ghana Ltd",
  "Integral Associates Ltd",
  "Lakeside Estates",
  "Rehoboth Properties",
  "Ghana Commercial Bank",
  "Universal Merchant Bank",
  "Ghana Telecom University",
  "Calvary Baptist Church, Tetteh Quarshie Interchange"
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "IBR Roofing Sheet",
    category: "Roofing Sheets",
    image: "https://picsum.photos/seed/roof1/600/400",
    description: "High-quality Inverted Box Rib roofing sheets offering superior drainage and strength."
  },
  {
    id: "p2",
    name: "Self-Lock Roofing",
    category: "Roofing Sheets",
    image: "https://picsum.photos/seed/roof2/600/400",
    description: "Concealed fixing system that provides a sleek, modern appearance."
  },
  {
    id: "p3",
    name: "Light Gauge Steel Trusses",
    category: "Trusses",
    image: "https://picsum.photos/seed/truss/600/400",
    description: "Durable, lightweight steel trusses engineered for maximum structural integrity."
  },
  {
    id: "p4",
    name: "Plasterboard Regular",
    category: "Plasterboards",
    image: "https://picsum.photos/seed/plaster/600/400",
    description: "Standard plasterboards for perfectly smooth ceilings and partitions."
  },
  {
    id: "p5",
    name: "Galvanized Ceiling Joist",
    category: "Ceiling Joists",
    image: "https://picsum.photos/seed/joist/600/400",
    description: "Corrosion-resistant metal framework for suspended ceilings."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Newmont Ghana HQ Roof",
    location: "Accra",
    category: "Industrial",
    image: "https://picsum.photos/seed/mining/800/600"
  },
  {
    id: "proj2",
    title: "Lakeside Estates Residential",
    location: "Lakeside",
    category: "Residential",
    image: "https://picsum.photos/seed/house/800/600"
  },
  {
    id: "proj3",
    title: "Calvary Baptist Church",
    location: "Tetteh Quarshie",
    category: "Commercial",
    image: "https://picsum.photos/seed/church/800/600"
  }
];

export const JOBS: Job[] = [
  {
    id: "j1",
    title: "Roofing Installation Technician",
    location: "Accra",
    type: "Full-Time",
    description: "Experienced technician needed for residential and commercial installation projects."
  },
  {
    id: "j2",
    title: "Sales Executive",
    location: "Kumasi Branch",
    type: "Full-Time",
    description: "Dynamic sales professional to drive business growth in the Ashanti region."
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "Rocksters Roofing System Limited wins Industry Award",
    date: "Nov 5, 2024",
    category: "Awards",
    image: "https://picsum.photos/seed/award/600/400",
    excerpt: "Rocksters Roofing System Limited has won the best Roofing Company of the Year award at the annual Construction Excellence ceremony."
  },
  {
    id: "n2",
    title: "New Ultra-Modern Factory Opens",
    date: "Oct 20, 2024",
    category: "Expansion",
    image: "https://picsum.photos/seed/factory/600/400",
    excerpt: "We are proud to announce the opening of our new manufacturing plant to speed up delivery times."
  },
  {
    id: "n3",
    title: "Maintaining Your Roof During Rainy Season",
    date: "Sep 15, 2024",
    category: "Maintenance",
    image: "https://picsum.photos/seed/rain/600/400",
    excerpt: "Essential tips from our experts on how to check for leaks and clear gutters to prevent water damage."
  }
];