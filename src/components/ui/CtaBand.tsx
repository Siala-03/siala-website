import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function CtaBand() {
  return (
    <section className="bg-navy-950 relative overflow-hidden py-20 lg:py-24 border-t border-navy-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/50 to-transparent" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-copper-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
              Talk to us about your infrastructure.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We scope projects from a single site to multi-location deployments. Get in touch and we will tell you honestly what it involves.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get a Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Capabilities
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/30 to-transparent" />
    </section>
  );
}
