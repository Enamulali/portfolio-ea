import React from "react";
import { IconLightbulb } from "../assets/icons";

export default function ContactPopper() {
  return (
    <a
      href="mailto:enamul97@icloud.com"
      className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center p-3 bg-yellow-400 text-slate-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 focus:bg-yellow-300 active:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1"
      aria-label="Like this website? Contact me to design one for you."
    >
      <IconLightbulb className="w-6 h-6 flex-shrink-0" />
      <span
        className="
          whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
          max-w-0
          group-hover:max-w-xs group-hover:ml-3
          group-focus:max-w-xs group-focus:ml-3
          group-active:max-w-xs group-active:ml-3
        "
      >
        Like this site? Let's build yours.
      </span>
    </a>
  );
}
