import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CtaBand } from '../components/ui/CtaBand';

export function Services() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Six areas of work. One team handling all of it."
        subtitle="What We Do"
        description="Security and surveillance, network infrastructure, cybersecurity, compute and cloud, smart building systems, and custom software. All done in-house, not subcontracted, and covered under one SLA."
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=2400"
      />

      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-28">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-navy-700 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-900/35 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />

                      <div className="absolute top-5 left-5 w-12 h-12 bg-navy-950/92 backdrop-blur-md border border-copper-500/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-copper-500" />
                      </div>
                      <div className="absolute bottom-5 right-5">
                        <span className="font-mono text-copper-500/40 text-lg font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
                      Practice Area {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-navy-950 border border-navy-800 p-6 mb-8">
                      <h3 className="font-mono text-xs text-white uppercase tracking-[0.18em] mb-5 border-b border-navy-800 pb-4">
                        Core Capabilities
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.slice(0, 6).map((cap, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-[13px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 mt-1.5 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-copper-500 font-medium hover:text-copper-400 transition-colors group"
                    >
                      Explore full capabilities & use cases
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
