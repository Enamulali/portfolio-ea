export default function Project({ project }) {
  const { title, description, link } = project;

  return (
    <li className={`relative -mx-3 rounded-lg px-3 py-3 ${link ? "transition-colors hover:bg-white/4" : ""}`}>
      <h3 className="text-ink font-medium">
        {link ? (
          // the pseudo-element covers the row, so anywhere in it is the link
          <a href={link} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:rounded-lg">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-ink-dim mt-1 leading-relaxed">{description}</p>
    </li>
  );
}
