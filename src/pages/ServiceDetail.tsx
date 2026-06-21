import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { CheckCircle2, LayoutGrid, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sidebarPoints: Record<string, string[]> = {
  'security-surveillance': [
    'Cameras scoped to your exact site layout and risk profile',
    'IoT & AI integration specified from the outset',
    'Access control integrated with your CCTV on one system',
    'Ongoing monitoring and SLA-backed maintenance',
  ],
  'connectivity-infrastructure': [
    'Certified Cat6A / fibre installation and testing',
    'Network designed around your actual traffic and growth plans',
    'Single-vendor accountability across cabling, Wi-Fi, and routing',
    'Ongoing network monitoring and performance management',
  ],
  'cybersecurity': [
    'Assessment against your actual threat landscape, not a generic checklist',
    'Recommendations that fit your team\'s capacity to act on them',
    'Compliance guidance for financial, health, and government sectors',
    'Continuous monitoring and incident response included',
  ],
  'compute-cloud': [
    'Hardware procured directly — no local middleman markups',
    'Virtualisation and cloud architecture designed for your workloads',
    'Backup and recovery tested, not just configured',
    'Full managed services from day of handover',
  ],
  'smart-building-power': [
    'BMS, power, and life-safety integrated as one system',
    'UPS and solar scoped to your actual load and uptime requirements',
    'Fire alarm and PA compliant with local regulatory standards',
    'Proactive maintenance contracts covering all installed systems',
  ],
  'integrated-software': [
    'Software designed around the infrastructure — not bolted on after',
    'Built on databases and APIs your team can actually maintain',
    'Integrates with biometric devices, access systems, and BMS where needed',
    'Ongoing support, hosting, and feature development available',
  ],
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.id === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = servicesData.filter((s) => s.id !== service.id).slice(0, 3);
  const points = sidebarPoints[service.id] ?? [
    'Certified engineers with hands-on field experience',
    'Hardware procured directly through our global supply chain',
    'Ongoing SLA-backed support and managed services',
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{service.title} — Siala Solutions | Kigali, Rwanda</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://sialasolutions.com/services/${service.id}`} />
      </Helmet>
      <PageHero
        title={service.title}
        subtitle="Practice Area"
        description={service.description}
        backgroundImage={service.image}
      />

      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">

              {/* Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <LayoutGrid className="w-6 h-6 text-copper-500" />
                  <h2 className="text-2xl font-display font-bold text-white">Technical Capabilities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="bg-navy-950 border border-navy-800 p-5 flex items-start gap-4 hover:border-copper-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-copper-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              {service.gallery && service.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {service.gallery.map((img, i) => (
                    <div key={i} className="aspect-video overflow-hidden border border-navy-800">
                      <img
                        src={img}
                        alt={`${service.title} detail`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold text-white mb-7">How Clients Use This</h2>
                <div className="space-y-5">
                  {service.useCases.map((useCase, i) => (
                    <div key={i} className="bg-navy-950 border-l-4 border-copper-500 p-6">
                      <p className="text-slate-300 leading-relaxed">{useCase}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-navy-950 border border-navy-800 p-8 sticky top-28"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-copper-500/10 border border-copper-500/25 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-copper-500" />
                </div>
                <span className="font-mono text-copper-500 text-[10px] uppercase tracking-widest mb-3 block">
                  Why Siala
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-4 leading-snug">
                  What you get with us on {service.title.toLowerCase()}
                </h3>
                <ul className="space-y-4 mb-8">
                  {points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-copper-500 mt-2 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full bg-copper-500 hover:bg-copper-400 text-white font-display font-medium text-sm py-3.5 px-4 transition-colors group"
                >
                  Discuss your project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center w-full mt-3 text-slate-400 hover:text-white text-sm transition-colors group"
                >
                  View all services
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-4 block">
                Also from Siala Solutions
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Related capabilities</h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-copper-400 transition-colors group shrink-0"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s, i) => {
              const RelIcon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/services/${s.id}`}
                    className="group block bg-navy-900 border border-navy-800 overflow-hidden hover:border-copper-500/50 transition-colors"
                  >
                    <div className="h-40 relative overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-900/55 group-hover:bg-navy-900/35 transition-colors" />
                      <div className="absolute bottom-3 left-3 w-9 h-9 bg-navy-950/90 border border-navy-700 flex items-center justify-center">
                        <RelIcon className="w-4 h-4 text-copper-500" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-display font-semibold text-white mb-2 group-hover:text-copper-400 transition-colors leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{s.shortDescription}</p>
                    </div>
                  </Link>
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
