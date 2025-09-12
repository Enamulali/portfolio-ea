import React, { useRef, useState, useEffect } from 'react';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import { IconGitHub, IconLinkedin, IconMail, IconBookOpen, IconAward } from './assets/icons';
import { FaReact } from 'react-icons/fa';
import { SiGooglecloud, SiCloudflare } from 'react-icons/si';
import useOnScreen from './hooks/useOnScreen';

import Header from './components/Header';
import ContactPopper from './components/ContactPopper';

import projects from './data/projects';
import experiences from './data/experiences';
import education from './data/education';
import certificates from './data/certificates';
import publications from './data/publications';

export default function App() {
  const timelineRef = useRef(null);
  const isTimelineVisible = useOnScreen(timelineRef);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleIndicator = () => {
      if (typeof window === 'undefined') return;
      setShowScrollIndicator(window.scrollY < 20);
    };
    window.addEventListener('scroll', handleIndicator, { passive: true });
    handleIndicator();
    return () => window.removeEventListener('scroll', handleIndicator);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans lg:grid lg:grid-cols-12">

      <Header />

      {/* Main content */}
      <main className="lg:col-span-7 px-8 sm:px-12 md:px-16 relative z-10 max-w-4xl mx-auto">
        <div className="hidden lg:block h-screen" />

        <Section title="About Me" id="about">
          <p className="text-slate-400 leading-relaxed mb-4 text-justify">
            Hello! I'm Enamul, a software engineer with a passion for building things. I’ve loved computers since a young age and people say I have a knack for good design.
          </p>
          <p className="text-slate-400 leading-relaxed text-justify">
            Today, my passion lies in backend development and cloud infrastructure. I enjoy the challenge of architecting and building robust, scalable systems that solve real-world problems.
          </p>
        </Section>

        <Section title="Where I've Worked" id="experience">
          <div ref={timelineRef} className={`relative timeline-container ${isTimelineVisible ? 'is-visible' : ''}`}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} />
            ))}
          </div>
        </Section>

        <Section title="Some Things I've Built" id="projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section title="Education, Certs & Writing" id="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
            <div>
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <IconBookOpen className="w-6 h-6 text-sky-400" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-800/50 p-5 sm:p-6 rounded-lg border border-slate-700/50">
                    <p className="text-sm text-sky-400/80 mb-1 font-mono">{edu.date}</p>
                    <h4 className="font-bold text-slate-100">{edu.degree}</h4>
                    <p className="text-slate-300 mb-2">{edu.institution}</p>
                    <p className="text-slate-400 text-sm leading-relaxed text-justify">{edu.description}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                  <IconAward className="w-6 h-6 text-sky-400" />
                  Certificates
                </h3>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block bg-slate-800/50 p-5 sm:p-6 rounded-lg border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300 group hover:-translate-y-1">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors">{cert.name}</h4>
                        <p className="text-xs text-sky-400/80 font-mono flex-shrink-0 ml-4 whitespace-nowrap">{cert.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <IconBookOpen className="w-6 h-6 text-sky-400" />
                Publications
              </h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <a key={index} href={pub.link} target="_blank" rel="noopener noreferrer" className="block bg-slate-800/50 p-5 sm:p-6 rounded-lg border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300 group hover:-translate-y-1">
                    <h4 className="font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-1">{pub.title}</h4>
                    <p className="text-sm text-slate-400">{pub.platform}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Feedback / Testimonials" id="feedback">
          <p className="text-slate-400 leading-relaxed text-justify italic">
            I'll add testimonials here once I finally get round to updating this website again.
          </p>
        </Section>

        <Section title="Get In Touch" id="contact">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Let's Connect</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-justify">
              Always happy to hear from people — whether it’s a tech question or a hello, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
              <a href="mailto:enamul97@icloud.com" className="inline-flex items-center gap-3 bg-sky-400 text-slate-900 font-bold px-8 py-4 rounded-md hover:bg-sky-300 transition-colors">
                <IconMail className="w-5 h-5" /> Say Hello
              </a>

              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="https://github.com/Enamulali" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <IconGitHub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/enamul97/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                  <IconLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-slate-400 text-sm font-mono mt-4">
            <div className="flex items-center gap-1">Built with <span className="ml-1"><FaReact className="w-4 h-4 text-sky-400" /></span></div>
            <div className="flex items-center gap-1">Deployed on <span className="ml-1"><SiGooglecloud className="w-4 h-4 text-sky-400" /></span></div>
            <div className="flex items-center gap-1">Domain hosted on <span className="ml-1"><SiCloudflare className="w-4 h-4 text-sky-400" /></span></div>
            <span className="hidden sm:inline-block">| by Enamul Ali</span>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4 sm:mt-0 font-mono sm:hidden">by Enamul Ali</p>
        </footer>
      </main>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-500 ease-in-out ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="animate-bounce text-slate-500 hover:text-sky-400 transition-colors">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </a>

      <ContactPopper />
    </div>
  );
}
