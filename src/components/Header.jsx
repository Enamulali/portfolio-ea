import React, { useState, useEffect, useRef } from "react";
import { HeroContent, MobileHeroContent } from "./HeroContent.jsx";
import profileData from "../data/profile.json";

export default function Header() {
  const [heroTransform, setHeroTransform] = useState("");
  const [subtitleState, setSubtitleState] = useState({
    text: "",
    glitchActive: true,
  });
  const [loaded, setLoaded] = useState(false);

  const heroDesktopRef = useRef(null);
  const heroMobileRef = useRef(null);

  // Scroll-based hero transform
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateTransform = () => {
      if (window.innerWidth < 1024) {
        setHeroTransform("");
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [loaded]);

  // Subtitle animation
  const playSubtitleAnimation = () => {
    setSubtitleState({ text: "", glitchActive: true });

    const t1 = setTimeout(
      () => setSubtitleState((prev) => ({ ...prev, text: profileData.subtitles[0] })),
      500
    );
    const t2 = setTimeout(
      () => setSubtitleState((prev) => ({ ...prev, text: profileData.subtitles[1] })),
      2000
    );
    const t3 = setTimeout(
      () => setSubtitleState((prev) => ({ ...prev, glitchActive: false })),
      2500
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  // Intersection Observer for subtitle animation
  useEffect(() => {
    let clearTimers = playSubtitleAnimation();

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return () => clearTimers?.();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimers?.();
            clearTimers = playSubtitleAnimation();
          }
        });
      },
      { threshold: 0.6 }
    );

    if (heroDesktopRef.current) observer.observe(heroDesktopRef.current);
    if (heroMobileRef.current) observer.observe(heroMobileRef.current);

    return () => {
      clearTimers?.();
      try {
        if (heroDesktopRef.current) observer.unobserve(heroDesktopRef.current);
        if (heroMobileRef.current) observer.unobserve(heroMobileRef.current);
      } catch (e) {
        // noop
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* DESKTOP: sticky hero in the left column */}
      <header className="hidden lg:block lg:col-span-5 lg:sticky lg:top-0 lg:h-screen lg:z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out">
          <div
            ref={heroDesktopRef}
            style={{ transform: heroTransform, transformOrigin: "left center" }}
            className={`${loaded ? "opacity-100" : "opacity-0"}`}
          >
            <HeroContent
              name={profileData.name}
              subtitle={subtitleState.text}
              glitchActive={subtitleState.glitchActive}
              email={profileData.email}
              description={profileData.description}
              location={profileData.location}
            />
          </div>
        </div>
      </header>

      {/* MOBILE: in-flow hero */}
      <div className="lg:hidden min-h-screen flex flex-col justify-center p-8 relative">
        <div ref={heroMobileRef}>
          <MobileHeroContent
            name={profileData.name}
            subtitle={subtitleState.text}
            glitchActive={subtitleState.glitchActive}
            email={profileData.email}
            description={profileData.description}
            location={profileData.location}
          />
        </div>
      </div>
    </>
  );
}