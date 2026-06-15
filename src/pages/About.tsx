import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="We cover every layer. That was the whole point."
        subtitle="About Siala"
        description="Siala Solutions is an IT infrastructure systems integrator based in Kigali, Rwanda. We handle the network, the security systems, the servers, the software, and everything in between — under one contract."
        backgroundImage="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=85&w=2400"
      />

      {/* Story Section */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="font-mono text-copper-500 text-xs uppercase tracking-[0.22em] mb-6 block">
                Our background
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                Why we built it this way
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Siala was started because there was a gap in how IT projects were being run in this region. Most clients we speak to have been through a project where the network contractor finished their work, the security contractor started theirs, and nothing integrated properly. Nobody was clearly responsible for the outcome.
                </p>
                <p>
                  We built the company to fix that. We scope the job, supply the hardware, do the installation, and stay on after handover. If something is wrong, we are the ones who hear about it.
                </p>
                <div className="border-l-2 border-copper-500 pl-6 py-2 my-8">
                  <p className="text-white font-display font-semibold text-xl leading-snug">
                    One team. One contract. If it breaks, we fix it.
                  </p>
                </div>
                <p>
                  We are based in Kigali and buy hardware directly from distributors in Dubai and China. No local intermediary. That keeps lead times shorter and pricing honest. We have been doing this long enough that most of our business now comes from clients who have worked with us before.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Cybersecurity Operations"
                  className="w-full h-64 object-cover border border-navy-700"
                />
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
                  alt="Server Infrastructure"
                  className="w-full h-64 object-cover border border-navy-700 mt-8"
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-950 p-7 border border-copper-500/30 shadow-2xl text-center w-52">
                <h3 className="font-mono font-bold text-copper-500 text-3xl mb-1">HQ</h3>
                <p className="text-white font-display font-semibold text-sm">Kigali, Rwanda</p>
                <p className="text-slate-400 text-xs mt-1 font-mono">Serving East Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
