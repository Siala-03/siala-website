import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xqeojpek', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="flex flex-col">
      <PageHero
        title="Tell us what you are trying to build."
        subtitle="Get in Touch"
        description="We work best when we understand the full picture early. Whether you have a detailed brief or just a problem you need solved, get in touch and we will take it from there."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2400"
      />

      <section className="py-28 bg-navy-900 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-6 block">
                Headquarters
              </span>
              <h2 className="text-3xl font-display font-bold text-white mb-10 leading-tight">
                Talk to our team.
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    content: '40KG 42 St, Ijuru Co-working Space\nKigali, Rwanda',
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    content: '+250 783 809 328',
                    href: 'tel:+250783809328',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    content: 'sialasolutions@gmail.com',
                    href: 'mailto:sialasolutions@gmail.com',
                  },
                  {
                    icon: Clock,
                    label: 'Business Hours',
                    content: 'Monday – Friday, 8:00 AM – 6:00 PM CAT',
                    href: undefined,
                  },
                ].map(({ icon: Icon, label, content, href }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-navy-950 border border-copper-500/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-copper-500" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-300 text-base hover:text-copper-400 transition-colors whitespace-pre-line leading-relaxed">
                          {content}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-base whitespace-pre-line leading-relaxed">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 p-7 bg-navy-950 border-l-4 border-copper-500">
                <p className="font-mono text-copper-500 text-[10px] uppercase tracking-widest mb-3">SLA Clients</p>
                <h3 className="text-lg font-display font-bold text-white mb-2">Existing Managed Services Clients</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Clients with active SLA contracts should use their dedicated support portal or emergency contact numbers for immediate escalation and incident response.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy-950 border border-navy-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-copper-500/5 rounded-bl-full pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-copper-500/40 via-copper-500/20 to-transparent" />

              <span className="font-mono text-copper-500 text-[10px] uppercase tracking-widest mb-3 block relative z-10">
                Project Enquiry
              </span>
              <h2 className="text-2xl font-display font-bold text-white mb-8 relative z-10 leading-tight">
                Send us a message
              </h2>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-navy-900 border border-copper-500/25 p-10 text-center relative z-10"
                >
                  <div className="w-16 h-16 bg-copper-500/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-copper-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">Message Received</h3>
                  <p className="text-slate-400 mb-7 leading-relaxed text-sm">
                    Thank you for reaching out. A member of our team will review your enquiry and respond within one business day.
                  </p>
                  <Button variant="outline" onClick={() => setFormState('idle')}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                        placeholder="Organisation Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                        placeholder="john@organisation.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                        placeholder="+250 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                      Area of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-slate-300 text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                    >
                      <option value="">Select a practice area</option>
                      <option>Intelligent Security & Surveillance</option>
                      <option>Cabling & Network Infrastructure</option>
                      <option>Cybersecurity</option>
                      <option>Compute & Cloud Infrastructure</option>
                      <option>Smart Building & Power Systems</option>
                      <option>Multiple / Full-Stack Integration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-navy-900 border border-navy-700 px-4 py-3.5 text-white text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all resize-none"
                      placeholder="Briefly describe your infrastructure requirement, project scale, or any specific challenges you need to address."
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email us directly at sialasolutions@gmail.com
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
