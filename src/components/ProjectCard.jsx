import React, { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { IconGitHub, IconExternalLink } from "../assets/icons";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:shadow-sky-500/20 hover:-translate-y-2 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed text-justify">
          {project.description}
        </p>
        <div className="flex justify-end items-center gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              <IconGitHub className="w-6 h-6" />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            View Project <IconExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
