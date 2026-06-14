import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-copper-500 z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-navy-900">
      <ScrollProgressBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
