import { Shield, Wifi, Zap, Server, Cpu, Code2 } from 'lucide-react';

export const servicesData = [
{
  id: 'security-surveillance',
  title: 'Intelligent Security & Surveillance',
  icon: Shield,
  image:
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1548611716-3001bea280e0?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1584433305355-9cb73387fc61?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Smart CCTV cameras using AI and IoT, access control, and remote monitoring — for institutional, commercial, and high-security environments.',
  description:
  "We design, supply, and install surveillance systems built around smart CCTV cameras that use AI and IoT — enabling automatic object classification, camera-triggered alerts, and integration with wider building and access systems. Each installation is scoped and engineered to fit your site layout, risk profile, and operational requirements, from a single facility to a distributed multi-site network.",
  capabilities: [
  'Smart CCTV Cameras with AI & IoT Integration',
  'AI-Based Object Detection & Automatic Alert Triggering',
  'HD & 4K IP Camera Systems (Indoor, Outdoor & PTZ)',
  'NVR/DVR Systems & Centralised Remote Monitoring',
  'Biometric & Card-Based Access Control',
  'Perimeter Detection & Motion-Based Alerts',
  'Gate Automation & Barrier Systems',
  'Intercom & Visitor Management Systems',
  'Multi-Site Camera Networks & Command Monitoring',
  'Integration with Fire Alarm & Building Management Systems'],

  useCases: [
  'Surveillance for hospital campuses covering patient areas, restricted zones, pharmacy storage, and staff entry — with camera-triggered access alerts',
  'Camera networks and centralised command rooms for security agencies and government facilities',
  'Multi-site CCTV with access control and centralised monitoring for banks, data centres, and corporate campuses']

},
{
  id: 'connectivity-infrastructure',
  title: 'Cabling & Network Infrastructure',
  icon: Wifi,
  image:
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Resilient enterprise networking — structured cabling, high-density Wi-Fi, routing, and WAN design built to carry every device you depend on.',
  description:
  'Every modern organisation runs on its network. We design, install, and certify high-performance connectivity infrastructure — from Cat6A and fibre-optic structured cabling to enterprise-grade wireless and multi-site WAN architecture. We build foundations that scale as your organisation grows, with zero compromise on reliability or security.',
  capabilities: [
  'Cat6A / Fibre-Optic Structured Cabling & Certification',
  'LAN / WAN Design & Deployment',
  'Enterprise Wi-Fi 6 & Captive Portal Systems',
  'Core Routing, Switching & VLAN Segmentation',
  'Firewall Architecture & VPN Connectivity',
  'Patch Panels, Rack Management & Cable Management',
  'Network Performance Monitoring & Optimisation',
  'ISP Redundancy & Failover Configuration'],

  useCases: [
  'Campus-wide seamless Wi-Fi 6 deployment for universities, hospitals, and large hospitality properties',
  'High-density structured cabling for new corporate headquarters and multi-tenant commercial buildings',
  'Secure multi-site SD-WAN connectivity linking retail chains, bank branches, and government field offices']

},
{
  id: 'cybersecurity',
  title: 'Cybersecurity',
  icon: Zap,
  image:
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1614064641913-6b67aa2cb5c0?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Proactive digital defence — audits, endpoint protection, SOC monitoring, and compliance consulting for organisations that cannot afford a breach.',
  description:
  'As physical and digital infrastructure converge, protecting your data is as important as protecting your premises. We assess vulnerabilities, harden your systems, and put continuous monitoring and incident response in place — so your organisation is covered at the technical level and can meet the compliance requirements of your sector.',
  capabilities: [
  'Penetration Testing & Ethical Hacking',
  'Vulnerability Assessments & Risk Profiling',
  'Comprehensive Security Audits & Compliance Consulting',
  'Endpoint Detection & Response (EDR)',
  'SOC Monitoring (Security Operations Centre)',
  'Firewall, IDS/IPS & SIEM Implementation',
  'Regulatory Compliance (ISO 27001, PCI-DSS, HIPAA)',
  'Staff Security Awareness Training',
  'Zero-Trust Architecture Design',
  'Incident Response & Digital Forensics'],

  useCases: [
  'Compliance-driven security audits and SIEM deployment for financial institutions and insurance groups',
  'Continuous SOC monitoring and threat intelligence for government agencies and critical national infrastructure',
  'Ransomware protection, endpoint hardening, and HIPAA-aligned security for healthcare providers']

},
{
  id: 'compute-cloud',
  title: 'Compute & Cloud Infrastructure',
  icon: Server,
  image:
  'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Server procurement, virtualisation, cloud migration, and private data centres — on-premise, cloud, or hybrid.',
  description:
  'Whether on-premise, in the cloud, or hybrid, we architect compute environments that deliver high availability, performance, and long-term resilience. From single-server deployments to full private institutional data centres, we manage every layer — procurement, installation, virtualisation, and ongoing managed services.',
  capabilities: [
  'Server Procurement & Installation',
  'Rack & Stack Services',
  'Virtualisation (VMware / Hyper-V)',
  'Cloud Migration (AWS / Azure / Google Cloud)',
  'Hybrid Cloud Architecture',
  'Backup & Disaster Recovery (BDR)',
  'Storage Area Networks (SAN / NAS)',
  'Private Institutional Data Centres',
  'High-Availability Clustering',
  'Managed Infrastructure Services & SLA Contracts'],

  useCases: [
  'Designing and building private mini-data centres for government ministries and national agencies',
  'Migrating legacy on-premise workloads to Azure for corporate clients requiring compliance and scalability',
  'Implementing geo-redundant disaster recovery solutions for banks and insurance firms']

},
{
  id: 'smart-building-power',
  title: 'Smart Building & Power Systems',
  icon: Cpu,
  image:
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Building automation, energy monitoring, UPS, solar integration, and life-safety systems for intelligent, efficient environments.',
  description:
  'Transform passive structures into intelligent, efficient, and safe environments. We integrate power management, life-safety systems, and building automation to reduce operational costs, protect critical operations, and enhance the experience of every occupant — from hospital wards to luxury hotel lobbies.',
  capabilities: [
  'Building Management Systems (BMS) & Automation',
  'Smart Lighting & Energy Monitoring',
  'Electrical Installations & Power Distribution',
  'UPS Systems & Battery Management',
  'Solar PV Integration & Energy Optimisation',
  'PA Systems & Emergency Broadcasting',
  'Fire Alarm & Suppression Systems',
  'HVAC Control & Environmental Monitoring',
  'IoT Sensor Networks for Facility Intelligence',
  'Managed Services & Proactive SLA Maintenance'],

  useCases: [
  'Centralised BMS integrating HVAC, lighting, and energy monitoring for premium real estate and mixed-use developments',
  'Integrated fire alarm, PA, and emergency power systems for large-scale retail malls, hospitals, and educational campuses',
  'Mission-critical UPS and solar backup infrastructure for medical facilities and government data centres']

},
{
  id: 'integrated-software',
  title: 'Integrated Software Solutions',
  icon: Code2,
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=2400',
  gallery: [
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'],

  shortDescription:
  'Custom enterprise applications — microfinance systems, real estate platforms, and business software built to integrate natively with your IT infrastructure.',
  description:
  "Technology delivers its full value only when the physical infrastructure and the software running on it are designed as a unified system. We develop custom enterprise applications — from microfinance management platforms to real estate and property systems — that integrate natively with the networking, security, and compute infrastructure we deploy. One partner. From the cable to the code.",
  capabilities: [
  'Microfinance Management Systems (MIS / MFI Platforms)',
  'Real Estate & Property Management Platforms',
  'Custom ERP & Business Process Applications',
  'USSD & Mobile Application Development',
  'IoT & Device Integration (Biometrics, Access Control, BMS)',
  'Business Intelligence & Analytics Dashboards',
  'API Development & Systems Integration',
  'Web Portals & Client-Facing Applications',
  'Database Architecture & Administration',
  'Legacy System Migration & Modernisation'],

  useCases: [
  'End-to-end microfinance platform — from the server room and network we build, to the loan management system, member portal, and USSD banking application running on it',
  'Real estate management system integrated with the building automation, access control, and surveillance infrastructure deployed by Siala across the same property',
  'Custom ERP connecting procurement, finance, and field operations for institutions where Siala also manages the full network and compute infrastructure']

}];
