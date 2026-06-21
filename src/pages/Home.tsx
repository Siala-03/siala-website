import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, animate } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Wrench,
  ChevronDown,
  Search,
  FileText,
  PackageCheck,
  LifeBuoy,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CtaBand } from '../components/ui/CtaBand';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';

const stats = [
  { value: 6,   label: 'Practice Areas',     suffix: '' },
  { value: 10,  label: 'Sectors Served',     suffix: '+' },
  { value: 100, label: 'Accountability',     suffix: '%' },
  { value: 2,   label: 'Global Supply Hubs', suffix: '' },
];

const processSteps = [
  {
    num: '01',
    icon: Search,
    title: 'Site assessment',
    desc: 'We come to site, look at what exists, understand the operational requirements, and ask the questions most vendors skip.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Design and proposal',
    desc: 'We produce the full architecture: cabling routes, network layout, hardware list, and software requirements. Nothing vague.',
  },
  {
    num: '03',
    icon: PackageCheck,
    title: 'Supply and installation',
    desc: 'We order directly from our distributors and install with our own engineers. We do not subcontract the physical work.',
  },
  {
    num: '04',
    icon: LifeBuoy,
    title: 'Ongoing support',
    desc: 'We stay on after handover. Monitoring, maintenance, and a support contract that means something when things go wrong.',
  },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}<span className="text-copper-600">{suffix}</span>
    </span>
  );
}

export function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Siala Solutions — IT Infrastructure Systems Integrator | Kigali, Rwanda</title>
        <meta name="description" content="East Africa's integrated IT infrastructure company. Security, networking, cybersecurity, compute, and software — one contract, one team." />
        <link rel="canonical" href="https://sialasolutions.com/" />
      </Helmet>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=2400"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-copper-500" />
                <span className="font-mono text-copper-400 text-xs uppercase tracking-[0.22em]">
                  East Africa's Integrated IT Infrastructure Company
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-display font-bold text-white leading-[1.08] mb-8">
                Infrastructure<br />
                Built on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-copper-600">
                  Trust.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                We handle the cabling, networking, security cameras, servers, cybersecurity, and the software that ties it all together. One contract. One team. Whatever breaks, we own it.
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {['Real Estate', 'Healthcare', 'Banking & Finance', 'Government', 'Hospitality', 'Retail'].map((s) => (
                  <span key={s} className="px-3 py-1.5 border border-navy-700 text-slate-400 text-xs font-mono uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Request a Consultation
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Capabilities
                </Button>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              className="lg:col-span-5 relative hidden lg:block"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: 'easeOut' }}
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-copper-500/25 shadow-2xl">
                <img
                  src="/security5.jpg"
                  alt="Smart CCTV surveillance infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/35 mix-blend-multiply" />
              </div>

              <div className="absolute -bottom-6 -left-8 bg-navy-900/95 backdrop-blur-sm p-5 border border-navy-700 shadow-2xl min-w-[200px]">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse shrink-0" />
                  <span className="font-mono text-copper-400 text-[10px] uppercase tracking-widest">Live Monitoring</span>
                </div>
                <p className="font-display font-semibold text-white text-sm">Smart CCTV — AI & IoT Enabled</p>
                <p className="text-xs text-slate-400 mt-0.5">Object detection. Camera-triggered alerts.</p>
              </div>

              <div className="absolute -top-6 -right-8 bg-copper-600 p-5 border border-copper-500 shadow-2xl">
                <ShieldCheck className="w-7 h-7 text-white mb-2" />
                <p className="font-display font-semibold text-white text-sm">One Supplier</p>
                <p className="text-xs text-copper-100 mt-0.5">One SLA · Full Accountability</p>
              </div>
            </motion.div>
          </div>

          {/* Animated stats bar */}
          <motion.div
            className="mt-20 pt-10 border-t border-navy-800/60 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-mono font-bold text-3xl text-copper-400 mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── CORE PROPOSITION ─────────────────────────────────────────── */}
      <section className="py-28 bg-navy-900 border-y border-navy-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65 }}
            >
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-6 block">
                How we work
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                One company.<br />
                Everything under one contract.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Most IT projects in this region involve three or four separate contractors. When something breaks at the boundary between them, nobody owns the problem. We designed Siala to remove that gap entirely.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'We scope, supply, install, and support the full stack ourselves',
                  'Hardware sourced directly from distributors in Dubai and China',
                  'One SLA covers every system we touch',
                  'We stay on after handover — most of our clients are still on support contracts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-copper-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/why-siala" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                Why Choose Us
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden border border-navy-700">
                <img
                  src="/compute3.jpg"
                  alt="Server room infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/35 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-navy-800 p-6 border border-navy-700 shadow-2xl flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-copper-500 shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-white text-xl">100%</h3>
                  <p className="text-sm text-slate-400">Accountability</p>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-copper-600 p-6 border border-copper-500 shadow-2xl flex items-center gap-4">
                <Wrench className="w-10 h-10 text-white shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-white text-xl">One SLA</h3>
                  <p className="text-sm text-copper-100">Full Stack Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
              How a project runs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              From first conversation to live system.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-navy-700 z-0" />

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  {/* Icon block */}
                  <div className="mb-6">
                    <div className="w-[104px] h-[104px] bg-navy-900 border border-navy-700 flex items-center justify-center">
                      <Icon className="w-9 h-9 text-copper-500" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/contact" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              Start the conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────── */}
      <section className="py-28 bg-navy-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                Six areas of work.<br />
                All under one roof.
              </h2>
            </div>
            <Button href="/services" variant="ghost" icon={<ArrowRight className="w-4 h-4" />}>
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    to={`/services/${service.id}`}
                    className="group block h-full bg-navy-950 border border-navy-800 overflow-hidden hover:border-copper-500/60 transition-all duration-300"
                  >
                    <div className="h-52 relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-900/55 group-hover:bg-navy-900/35 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4 w-11 h-11 bg-navy-950/90 backdrop-blur-sm border border-navy-700 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-copper-500" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-copper-400 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-copper-500 text-sm font-medium">
                        Explore capability
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SUPPLY CHAIN / CREDIBILITY ───────────────────────────────── */}
      <section className="py-20 bg-navy-950 border-y border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-navy-700">
            {[
              { icon: Globe, title: 'We buy direct', desc: 'Hardware comes from our distributors in Dubai and China. No local middleman, which means shorter lead times and better pricing.' },
              { icon: ShieldCheck, title: 'No consumer equipment', desc: 'Everything we specify is enterprise grade from established manufacturers. We do not cut corners on hardware.' },
              { icon: Wrench, title: 'Based in Kigali', desc: 'Our team is here. We come to site, we stay on the account, and we pick up the phone when something goes wrong.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="px-8 py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Icon className="w-8 h-8 text-copper-500 mx-auto mb-4" />
                <h3 className="text-lg font-display font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HARDWARE STANDARD ────────────────────────────────────────── */}
      <section className="py-20 bg-navy-950 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-4 block">
              What we install
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white max-w-xl leading-snug">
                Enterprise grade hardware. No grey market. No consumer equipment.
              </h2>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed md:text-right">
                Every component we specify meets enterprise performance and warranty standards, procured directly, not through a local intermediary.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-800">
            {[
              {
                category: 'Surveillance',
                spec: '4K IP cameras with on-device AI inference and edge analytics. Centralised NVR management across single and multi-site deployments.',
              },
              {
                category: 'Networking',
                spec: 'Enterprise Wi-Fi 6 and 6E access points. Layer 3 switching with hardware-accelerated routing and full VLAN segmentation.',
              },
              {
                category: 'Cybersecurity',
                spec: 'Hardware firewall appliances with intrusion prevention, deep packet inspection, and centralised policy management.',
              },
              {
                category: 'Compute',
                spec: 'Rack-mount servers with ECC RAM, hardware RAID, redundant power supplies, and out-of-band remote management.',
              },
              {
                category: 'Power and UPS',
                spec: 'Online double-conversion UPS with SNMP monitoring, remote management capability, and hot-swap battery modules.',
              },
              {
                category: 'Cloud and Virtualisation',
                spec: 'Enterprise hypervisors, geo-redundant backup, and multi-cloud architecture on major global platforms.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.category}
                className="bg-navy-950 p-7 group hover:bg-navy-900 transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="font-mono text-[10px] text-copper-500 uppercase tracking-[0.2em] mb-3 block">
                  {item.category}
                </span>
                <p className="text-slate-300 text-[15px] leading-relaxed">
                  {item.spec}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES STRIP ─────────────────────────────────────────── */}
      <section className="py-28 bg-navy-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-5 block">
                Sectors
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                Infrastructure for every industry.
              </h2>
            </div>
            <Button href="/industries" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              View Industry Solutions
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Real Estate Developers', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
              { name: 'Hotels & Lodges',        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
              { name: 'Banks & Finance',        img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800' },
              { name: 'Government & Institutions', img: '/government1.jpg' },
              { name: 'Corporate Offices',      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
              { name: 'Schools & Hospitals',    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800' },
              { name: 'Warehouses & Logistics', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800' },
              { name: 'Retail Chains',          img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
            ].map((industry, i) => (
              <motion.div
                key={i}
                className="group relative h-44 overflow-hidden border border-navy-800 hover:border-copper-500/40 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/65 group-hover:bg-navy-950/45 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-display font-medium text-sm leading-tight">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
