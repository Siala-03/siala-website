import React from 'react';
import { Helmet } from 'react-helmet-async';
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
} from 'lucide-react';

const industries = [
  {
    name: 'Real Estate Developers',
    icon: Building,
    value:
      'Developers come to us early. We wire the building properly from the start so that tenants are not dealing with patchy Wi-Fi and inadequate security two years later.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Hotels & Lodges',
    icon: Hotel,
    value:
      'Guests notice when the Wi-Fi does not work. We handle the full setup: wireless coverage, surveillance, and access control that staff can actually manage.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Corporate Offices',
    icon: Briefcase,
    value:
      'We build the network, install the access systems, and set up the infrastructure that a modern office needs to run without constant IT problems.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Banks & Financial Institutions',
    icon: Landmark,
    value:
      'Banks need surveillance that works, data centres that stay up, and security that meets compliance requirements. We have done this across multiple financial institutions in the region.',
    image:
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Healthcare Facilities',
    icon: HeartPulse,
    value:
      'Hospitals cannot have downtime. We install reliable networks, camera systems that cover restricted areas, and power backup that keeps critical equipment running.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Warehouses & Logistics',
    icon: Warehouse,
    value:
      'Large floor areas, perimeter security, scanning operations — we set up the wireless coverage and surveillance that logistics operations depend on around the clock.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Retail Chains',
    icon: ShoppingBag,
    value:
      'Multi-branch retail needs a network that connects all locations, CCTV that can be monitored centrally, and infrastructure that does not require a different vendor at every site.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Educational Institutions',
    icon: GraduationCap,
    value:
      'Schools and universities need campus-wide connectivity, controlled access, and systems that work reliably without a full-time IT department to manage them.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
  },
];

export function Industries() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Industries — Real Estate, Banking, Healthcare, Hospitality & More | Siala Solutions</title>
        <meta name="description" content="IT infrastructure for real estate developers, banks, hotels, hospitals, warehouses, retail chains, and government institutions across East Africa." />
        <link rel="canonical" href="https://sialasolutions.com/industries" />
      </Helmet>
      <PageHero
        title="Where we spend most of our time."
        subtitle="Sectors"
        description="We have worked across most sectors in East Africa. Each one has different requirements, different compliance pressures, and different failure modes. Here is where we have the most experience."
        backgroundImage="/government1.jpg"
      />

      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-16">
            <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
              All Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white max-w-2xl leading-tight">
              We have worked across most of these sectors. Here is what we know about each one.
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
