import Section from "./components/Section";
import { IconMapPin } from "./assets/icons";
import Comparison from "./components/Comparison";
import Roadmap from "./components/Roadmap";
import Stack from "./components/Stack";
import ProjectCard from "./components/ProjectCard";
import TimelineItem from "./components/TimelineItem";
import Hero from "./components/Hero";
import projects from "./data/projects";
import experiences from "./data/experiences";
import certificates from "./data/certificates";
import publications from "./data/publications";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />

      <main className="relative z-10 mx-auto w-full max-w-[38rem] px-6">

        <Section id="about">
          <p className="text-ink-dim leading-relaxed mb-4 max-w-[62ch]">
            I work on cloud platforms for government-scale systems, the kind where somebody gets a phone call at four in the morning when something breaks.
          </p>
          <p className="text-ink-dim leading-relaxed max-w-[62ch]">
            I started in full-stack work and then moved into infrastructure, so I have seen most of the lifecycle from both ends. Recently I’ve been looking at design and its intersection with software.
          </p>
        </Section>

        <Section id="tools">
          <Stack />
        </Section>

        <Section id="writing">
          <article className="text-ink-dim leading-relaxed max-w-[62ch] space-y-5">
            <h2 className="text-ink font-medium">So I rebuilt this site</h2>

            <p>
              I have started to learn more about how interfaces are put together, and put some of it to use.
            </p>

            <h3 className="text-ink font-medium pt-3">Motion has to earn it</h3>

            <p>
              Everything on a screen has to earn its place. Something that plays on every load has to be worth seeing every time, and almost nothing is.
            </p>

            <h3 className="text-ink font-medium pt-3">The best change is sometimes a deletion</h3>

            <p>
              Restraint is harder than decoration, because nobody can see the thing you did not do. The work that improves a page the most may be what does not appear on it.
            </p>

            <h3 className="text-ink font-medium pt-3">Speed is part of the design</h3>

            <p>
              A page that arrives quickly is a better experience than a beautiful one that keeps you waiting.
            </p>

            <h3 className="text-ink font-medium pt-3">Not everything can be both</h3>

            <p>
              Sometimes form and function collide. Knowing which one has to give comes from understanding what you are building and who will use it.
            </p>

            <h3 className="text-ink font-medium pt-3">This version will age too</h3>

            <p>
              Design is never finished. What is here is what I think now, and in a few years I may look at it the way I look at the version before it.
            </p>

            <Comparison
              before="/design/before.webp"
              after="/design/after.webp"
              beforeAlt="The previous version of this site, with a gradient name on a dark navy background"
              afterAlt="The current version, set in plain type on a near-black ground"
            />

            <h3 className="text-ink font-medium pt-3">These are only my rules, though</h3>

            <p>
              You want work to remain enjoyable, and there is a point where chasing the last small gain can cost more than it’s worth.
            </p>

          </article>

        </Section>

        <Section id="experience">
          <h2 className="text-ink font-medium mb-5">Career</h2>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} />
          ))}
        </Section>

        <Section id="projects">
          <h2 className="text-ink font-medium mb-5">Still building</h2>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Section>

        <Section id="elsewhere">
          <h2 className="text-ink font-medium mb-3">Elsewhere</h2>
          <p className="text-ink-dim leading-relaxed max-w-[62ch] mb-6">
            A few other things I have written.
          </p>
          <ul className="space-y-4">
            {publications.map((pub, i) => (
              <li
                key={i}
                className={`relative -mx-3 rounded-lg px-3 py-2 ${
                  pub.link && pub.link !== "#" ? "transition-colors hover:bg-white/[0.04]" : ""
                }`}
              >
                {pub.link && pub.link !== "#" ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink after:absolute after:inset-0 after:rounded-lg
                               focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="text-ink-dim">{pub.title}</span>
                )}
                <p className="text-ink-faint">{pub.platform}</p>
              </li>
            ))}
          </ul>

        </Section>

        <Section id="achievements">
          <h2 className="text-ink font-medium mb-5">Certificates</h2>
          <ul className="space-y-4">
            {certificates.map((cert, i) => (
              <li
                key={i}
                className="relative -mx-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.04]"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink after:absolute after:inset-0 after:rounded-lg
                             focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                >
                  {cert.name}
                </a>
                <p className="text-ink-faint">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact">
          <h2 className="text-ink font-medium mb-5">Say hello</h2>
          <p className="text-ink-dim leading-relaxed max-w-[62ch]">
            If anything above is useful to you, or you are building something and want another pair of eyes, I would like to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="mailto:enamul97@icloud.com"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-ground
                         transition-transform duration-150 active:scale-[0.97]
                         focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              Email me
            </a>
            <a
              href="https://github.com/Enamulali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:underline
                         focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/enamul97/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:underline
                         focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 text-ink-faint">
              <IconMapPin className="w-4 h-4" />
              Manchester, UK
            </span>
          </div>
        </Section>



      </main>

      <footer className="relative z-10 mx-auto w-full max-w-[38rem] px-6 pt-32 pb-32 sm:pt-44 text-ink-faint leading-relaxed">
        <p className="max-w-[52ch]">
          Built with React, hosted on Cloudflare, whose developer tools are some of the best-designed software I use. A lot of what I think about interfaces started there.
        </p>
      </footer>
    </div>
  );
}
