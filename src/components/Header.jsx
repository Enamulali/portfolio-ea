// src/components/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { IconMapPin } from '../assets/icons';

export default function Header() {
  const name = 'Enamul Ali';

  const [heroTransform, setHeroTransform] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [glitchActive, setGlitchActive] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // separate refs for desktop/mobile hero nodes
  const heroDesktopRef = useRef(null);
  const heroMobileRef = useRef(null);

  // Scroll-based hero transform (throttled using requestAnimationFrame)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const updateTransform = () => {
      if (window.innerWidth < 1024) {
        setHeroTransform('');
        ticking = false;
        return;
      }

      const scrollY = window.scrollY;
      const animationEnd = window.innerHeight * 0.75;
      const progress = Math.min(scrollY / animationEnd, 1);
      const scale = 1.5 - 0.5 * progress;
      const translateXVw = 29.17 * (1 - progress);
      const translateXRem = 3 * (1 - progress);
      const finalTranslateX = `calc(${translateXVw}vw - ${translateXRem}rem)`;

      setHeroTransform(`translateX(${finalTranslateX}) scale(${scale})`);
      if (!loaded) setLoaded(true);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };


    updateTransform();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [loaded]);

  const playSubtitleAnimation = () => {
    setSubtitle('');
    setGlitchActive(true);

    const t1 = setTimeout(() => setSubtitle('I build for the ☁️'), 500);
    const t2 = setTimeout(() => setSubtitle('I build for the cloud.'), 2000);
    const t3 = setTimeout(() => setGlitchActive(false), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  useEffect(() => {
    // initial run
    let clearTimers = playSubtitleAnimation();

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return () => {
        if (clearTimers) clearTimers();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (clearTimers) clearTimers();
            clearTimers = playSubtitleAnimation();
          }
        });
      },
      { threshold: 0.6 }
    );

    if (heroDesktopRef.current) observer.observe(heroDesktopRef.current);
    if (heroMobileRef.current) observer.observe(heroMobileRef.current);

    return () => {
      if (clearTimers) clearTimers();
      try {
        if (heroDesktopRef.current) observer.unobserve(heroDesktopRef.current);
        if (heroMobileRef.current) observer.unobserve(heroMobileRef.current);
      } catch (e) {
        // noop
      }
      observer.disconnect();
    };
  }, []);

  const heroContent = (
    <div className="max-w-md">
      <p className="font-mono text-sky-400/80 text-sm mb-4">Hi, my name is</p>
      <h1 className="font-bold animated-gradient-text text-4xl xl:text-5xl">
        {name}
      </h1>
      <h2
        className={`font-bold text-slate-400 text-xl xl:text-2xl mt-1 min-h-[1.75rem] xl:min-h-[2rem] ${
          glitchActive ? 'glitch' : ''
        }`}
        data-text={subtitle}
      >
        {subtitle || '\u00A0'}
      </h2>

      <p className="text-slate-400 leading-relaxed mt-4 text-sm">
        As a software engineer, I design and build scalable applications that
        behave under pressure. I’m all about creating user-friendly solutions
        and automating the boring stuff so humans can do more human things.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-8">
        <a
          href="mailto:enamul97@icloud.com"
          className="inline-block bg-sky-400 text-slate-900 font-bold px-6 py-3 rounded-md hover:bg-sky-300 transition-colors text-center text-sm"
        >
          Get In Touch
        </a>
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <IconMapPin className="w-4 h-4" /> Manchester, UK
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP: sticky hero in the left column */}
      <header className="hidden lg:block lg:col-span-5 lg:sticky lg:top-0 lg:h-screen lg:z-20">
        {/* anchor positioned in the center of the left column */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out">

          <div ref={heroDesktopRef} style={{ transform: heroTransform, transformOrigin: 'left center' }} className={` ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            {heroContent}
          </div>
        </div>
      </header>

      {/* MOBILE: in-flow hero */}
      <div className="lg:hidden min-h-screen flex flex-col justify-center p-8 relative">
        <div ref={heroMobileRef}>
          <p className="font-mono text-sky-400 mb-4">Hi, my name is</p>
          <h1 className="font-bold animated-gradient-text text-5xl md:text-7xl">
            {name}
          </h1>
          <h2
            className={`font-bold text-slate-400 text-4xl md:text-6xl mt-2 min-h-[2.5rem] md:min-h-[3.75rem] ${
              glitchActive ? 'glitch' : ''
            }`}
            data-text={subtitle}
          >
            {subtitle || '\u00A0'}
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-sm mt-8">
            As a software engineer, I design and build scalable applications that
            behave under pressure. I’m all about creating user-friendly
            solutions and automating the boring stuff so humans can do more
            human things.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-8">
          <a
            href="mailto:enamul97@icloud.com"
            className="inline-block bg-sky-400 text-slate-900 font-bold px-8 py-4 rounded-md hover:bg-sky-300 transition-colors text-center"
          >
            Get In Touch
          </a>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <IconMapPin className="w-4 h-4" /> Manchester, UK
          </div>
        </div>
      </div>
    </>
  );
}
