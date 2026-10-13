export default function ProjectCard({ project }) {
  const { title, description, link, githubLink } = project;
  const live = link && link !== "#" ? link : null;
  const code = githubLink && githubLink !== "#" ? githubLink : null;
  const target = live ?? code;

  return (
    <article
      className={`relative -mx-3 rounded-lg px-3 py-3 ${
        target ? "transition-colors hover:bg-white/[0.04]" : ""
      }`}
    >
      <h3 className="text-ink font-medium">
        {target ? (
          // the pseudo-element covers the row, so anywhere in it is the link
          <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-lg
                       focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="text-ink-dim mt-1 leading-relaxed max-w-[62ch]">{description}</p>
    </article>
  );
}
