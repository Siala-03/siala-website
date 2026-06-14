import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { motion } from 'framer-motion';

const differentiators = [
  {
    num: '01',
    title: 'One contract. One team responsible for all of it.',
    desc: 'When the network fails and the networking contractor blames the server configuration, both vendors get a callout fee and the problem stays open. We designed the network and the servers. There is no argument about whose fault it is.\n\nEvery system we install falls under one SLA. One call. One team.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '02',
    title: 'We build the infrastructure and the software on it.',
    desc: 'A microfinance platform running on a network not designed for it will hit problems under load. A real estate management system integrated with a BMS from a separate vendor will have gaps. These are not edge cases — they are what we see from clients who come to us with existing setups.\n\nWhen we build both sides, the software is specified around what the network can handle. The network is designed around what the software needs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '03',
    title: 'Hardware shipped directly from Dubai and China.',
    desc: 'We buy from distributors in Dubai and China — Hikvision, Cisco, HP, Dell, and others. No local intermediary between the manufacturer and the installation.\n\nThis cuts lead time and reduces cost. The price reflects what it actually costs to procure and ship, not what a local agent needs to add to make their margin.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=800',
  },
  {
    num: '04',
    title: 'We stay involved after the installation.',
    desc: 'Most IT contractors measure success at handover. We stay on. Managed services contracts cover monitoring, firmware updates, hardware replacement, and scheduled maintenance.\n\nSome of the infrastructure we installed several years ago is still running on an active support contract. That is how we prefer to operate.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
];

export function WhySiala() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="What separates a systems integrator from a vendor."
        subtitle="Our Differentiators"
        description="Most IT projects in this region are managed through separate contractors — networking, security, servers, software. The gaps between them are where problems happen. We cover all of it under one team and one contract."
        backgroundImage="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=85&w=2400"
      />

      {/* Plain statement */}
      <section className="py-24 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              We're a small, specific company. We do a narrow set of things — network infrastructure, security systems, compute, and the software that runs on all of it — and we do them end to end. That's different from a hardware reseller. It's also different from a generalist IT firm that subcontracts the installation.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Most IT projects in this region involve three or four separate contractors. The cabling company, the security company, the server company, the software house. When something breaks at the seam between them, nobody owns the problem. We've been called in to fix that situation more than once.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              We're not the right fit for every brief. If you need a single device replaced or a specific product resold quickly, there are local suppliers better placed to do that. What we do is take on the whole thing — from the first site assessment to the managed services contract that follows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white max-w-xl leading-tight">
              Four things worth knowing before you engage us.
            </h2>
          </div>

          <div className="space-y-28">
            {differentiators.map((diff, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={diff.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="w-full md:w-1/2 relative">
                    <div className="aspect-video relative overflow-hidden border border-navy-700">
                      <img src={diff.image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-navy-900/30 mix-blend-multiply" />
                    </div>
                    <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-20 h-20 bg-navy-950 border border-copper-500 flex items-center justify-center shadow-xl`}>
                      <span className="font-mono font-bold text-copper-500 text-2xl">{diff.num}</span>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 pt-4 md:pt-0">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-tight">
                      {diff.title}
                    </h3>
                    <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                      {diff.desc.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
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
