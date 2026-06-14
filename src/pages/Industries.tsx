import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { motion } from 'framer-motion';
import {
  Building,
  Hotel,
  Briefcase,
  ShoppingBag,
  Warehouse,
  Landmark,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react';

const industries = [
  {
    name: 'Real Estate Developers',
    icon: Building,
    value:
      'Future-proofing developments with integrated smart building technology, centralised BMS, and full structured cabling from day one.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Hotels & Lodges',
    icon: Hotel,
    value:
      'Enhancing guest experience with seamless Wi-Fi, IP IPTV, intelligent surveillance, and integrated access control across every touchpoint.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Corporate Offices',
    icon: Briefcase,
    value:
      'Building resilient LAN/WAN infrastructure, secure access systems, and smart building automation for modern, high-performance workspaces.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Banks & Financial Institutions',
    icon: Landmark,
    value:
      'Delivering high-security surveillance, robust private data centres, endpoint protection, and rigorous cybersecurity compliance frameworks.',
    image:
      'https://images.unsplash.com/photo-1501167783532-38f51b61ceb9?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Healthcare Facilities',
    icon: HeartPulse,
    value:
      'Securing patient environments with IoT-integrated surveillance, critical power backup (UPS/Solar), and reliable network infrastructure for mission-critical operations.',
    image:
      'https://images.unsplash.com/photo-1519452285022-eb18b8b039f4?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Government & Security Agencies',
    icon: ShieldCheck,
    value:
      'Deploying command-and-control surveillance, private institutional data centres, and large-scale secure connectivity for critical national infrastructure.',
    image:
      'https://images.unsplash.com/photo-1541888086925-920a0b404786?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Warehouses & Logistics',
    icon: Warehouse,
    value:
      'Ensuring perimeter security, high-density Wi-Fi for barcode and scanner operations, and reliable power backup for uninterrupted logistics.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Retail Chains',
    icon: ShoppingBag,
    value:
      'Connecting multi-site operations with secure VPNs, centralised CCTV monitoring, and smart POS infrastructure across all locations.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Educational Institutions',
    icon: GraduationCap,
    value:
      'Campus-wide connectivity, smart access control, PA systems, and critical power management for schools, colleges, and universities.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
];

export function Industries() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Sectors We Serve"
        subtitle="Industry Solutions"
        description="Different industries carry different operational realities, compliance demands, and risk profiles. We tailor every integrated infrastructure solution to match the specific needs of your sector — so your technology works exactly as hard as your organisation does."
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=85&w=2400"
      />

      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-16">
            <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
              All Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white max-w-2xl leading-tight">
              From critical infrastructure to commercial real estate — one partner, every sector.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group bg-navy-950 border border-navy-800 overflow-hidden hover:border-copper-500/50 transition-colors duration-300"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-navy-900/65 group-hover:bg-navy-900/45 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 bg-copper-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-white/30 text-xs">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-copper-400 transition-colors leading-snug">
                      {industry.name}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[14px]">{industry.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
