import React from "react";
import { IconMapPin } from "../assets/icons";

export const HeroContent = ({ name, subtitle, glitchActive, email, description, location }) => (
  <div className="max-w-md">
    <p className="font-mono text-sky-400/80 text-sm mb-4">Hi, my name is</p>
    <h1 className="font-bold animated-gradient-text text-4xl xl:text-5xl">
      {name}
    </h1>
    <h2
      className={`font-bold text-slate-400 whitespace-nowrap text-[clamp(1rem,4vw,1.25rem)] text-xl xl:text-2xl mt-1 min-h-[1.75rem] xl:min-h-[2rem] ${
        glitchActive ? "glitch" : ""
      }`}
      data-text={subtitle}
    >
      {subtitle || "\u00A0"}
    </h2>
    <p className="text-slate-400 leading-relaxed mt-4 text-sm">
      {description}
    </p>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-8">
      <a
        href={`mailto:${email}`}
        className="inline-block bg-sky-400 text-slate-900 font-bold px-6 py-3 rounded-md hover:bg-sky-300 transition-colors text-center text-sm"
      >
        Get In Touch
      </a>
      <div className="flex items-center gap-2 text-slate-400 text-sm">
        <IconMapPin className="w-4 h-4" /> {location}
      </div>
    </div>
  </div>
);

export const MobileHeroContent = ({ name, subtitle, glitchActive, email, description, location }) => (
  <div>
    <p className="font-mono text-sky-400 mb-4">Hi, my name is</p>
    <h1 className="font-bold animated-gradient-text text-5xl md:text-7xl">
      {name}
    </h1>
    <h2
      className={`font-bold text-slate-400 whitespace-nowrap text-[clamp(1.25rem,6vw,3rem)] md:text-6xl mt-2 min-h-[2.5rem] md:min-h-[3.75rem] ${
        glitchActive ? "glitch" : ""
      }`}
      data-text={subtitle}
    >
      {subtitle || "\u00A0"}
    </h2>
    <p className="text-slate-400 leading-relaxed max-w-sm mt-8">
      {description}
    </p>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-8">
      <a
        href={`mailto:${email}`}
        className="inline-block bg-sky-400 text-slate-900 font-bold px-8 py-4 rounded-md hover:bg-sky-300 transition-colors text-center"
      >
        Get In Touch
      </a>
      <div className="flex items-center gap-2 text-slate-400 text-sm">
        <IconMapPin className="w-4 h-4" /> {location}
      </div>
    </div>
  </div>
);