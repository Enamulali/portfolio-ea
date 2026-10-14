import Comparison from "./components/Comparison";
import Experience from "./components/Experience";
import LinkRow from "./components/LinkRow";
import Project from "./components/Project";
import Roadmap from "./components/Roadmap";
import Section from "./components/Section";
import Tools from "./components/Tools";
import certificates from "./data/certificates";
import experiences from "./data/experiences";
import projects from "./data/projects";
import publications from "./data/publications";

export default function App() {
  return (
    <div className="mx-auto max-w-[38rem] px-6">
      <header className="pt-28 pb-32 sm:pt-36 sm:pb-44">
        <h1 className="display text-ink">Enamul Ali</h1>
        <p className="lede mt-7 text-ink">Software engineer at Capgemini, in Manchester.</p>
        <p className="lede mt-4 text-ink-dim">
          Software is a solution to a problem. Each part of it should be able to say which problem it solves. Anything on the screen that doesn’t need to be there, shouldn’t.
        </p>
        <div className="mt-12">
          <Roadmap />
        </div>
      </header>

      <main className="pb-32">
        <Section id="about">
          <p className="text-ink-dim leading-relaxed mb-4">
            I work on cloud platforms for government-scale systems, the kind where somebody gets a phone call at four in the morning when something breaks.
          </p>
          <p className="text-ink-dim leading-relaxed">
            I started in full-stack work and then moved into infrastructure, so I have seen most of the lifecycle from both ends. Recently I’ve been looking at design and its intersection with software.
          </p>
        </Section>

        <Section id="tools" title="Tools">
          <Tools />
        </Section>

        <Section id="post" title="So I rebuilt this site">
          <div className="text-ink-dim leading-relaxed space-y-5">
            <p>I have started to learn more about how interfaces are put together, and put some of it to use. Everything on a screen has to earn its place. Something that plays on every load has to be worth seeing every time. Restraint is harder than decoration, because nobody can see the thing you did not do.</p>
            <p>Speed is part of the design. A page that arrives quickly is a better experience than a beautiful one that keeps you waiting. This one is plain HTML, built ahead of time and served from Cloudflare. The only JavaScript it ships is about 1 KB, for the slider below.</p>
            <p>Sometimes form and function do collide. Knowing which one has to give comes from understanding what you are building and who will use it. You want work to remain enjoyable, and there is a point where chasing the last small gain may cost more than it’s worth. Design keeps evolving, so it is never really finished.</p>

            <Comparison
              before="/design/before.webp"
              after="/design/after.webp"
              beforeAlt="The previous version of this site, with a gradient name on a dark navy background"
              afterAlt="The current version, set in plain type on a near-black ground"
            />
          </div>
        </Section>

        <Section id="career" title="Career">
          {experiences.map((experience) => (
            <Experience key={experience.title} experience={experience} />
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <ul className="space-y-2">
            {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </ul>
        </Section>

        <Section id="writing" title="Writing">
          <ul className="space-y-2">
            {publications.map((pub) => (
              <LinkRow key={pub.title} title={pub.title} detail={pub.platform} link={pub.link} />
            ))}
          </ul>
        </Section>

        <Section id="certificates" title="Certificates">
          <ul className="space-y-2">
            {certificates.map((cert) => (
              <LinkRow key={cert.name} title={cert.name} detail={cert.issuer} link={cert.link} />
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-ink-dim leading-relaxed">
            If anything above is useful to you, or you are building something and want another pair of eyes, I would like to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="mailto:enamul97@icloud.com" className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-ground transition-transform duration-150 active:scale-[0.97]">
              Email me
            </a>
            <a href="https://github.com/Enamulali" target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/enamul97/" target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
              LinkedIn
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
