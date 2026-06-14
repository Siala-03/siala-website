import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  align?: 'left' | 'center';
  tag?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  align = 'left',
  tag,
}: PageHeroProps) {
  const isCenter = align === 'center';

  return (
    <section className="relative min-h-[68vh] flex items-end pb-16 lg:pb-20 overflow-hidden border-b border-navy-800">

      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* layered overlays for depth */}
          <div className="absolute inset-0 bg-navy-950/65" />
          <div className={`absolute inset-0 bg-gradient-to-r ${isCenter ? 'from-navy-950/50 via-navy-950/60 to-navy-950/50' : 'from-navy-950 via-navy-950/80 to-navy-950/30'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-navy-950">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        </div>
      )}

      {/* Decorative corner accent */}
      <div className="absolute top-24 right-0 w-1/3 h-1 bg-gradient-to-l from-copper-500/30 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-40">
        <div className={isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {/* Subtitle / eyebrow */}
            {subtitle && (
              <div className={`inline-flex items-center gap-3 mb-7 ${isCenter ? 'justify-center' : ''}`}>
                <span className="h-px w-8 bg-copper-500" />
                <span className="font-mono text-copper-400 text-xs uppercase tracking-[0.22em]">
                  {subtitle}
                </span>
              </div>
            )}

            {/* Tag badge */}
            {tag && !subtitle && (
              <div className={`mb-7 ${isCenter ? 'flex justify-center' : ''}`}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-copper-500/30 text-copper-400 font-mono text-xs uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                  {tag}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none z-10" />
    </section>
  );
}
