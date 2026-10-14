export default function LinkRow({ title, detail, link }) {
  return (
    <li className={`relative -mx-3 rounded-lg px-3 py-3 ${link ? "transition-colors hover:bg-white/4" : ""}`}>
      {link ? (
        // the pseudo-element covers the row, so anywhere in it is the link
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-ink after:absolute after:inset-0 after:rounded-lg">
          {title}
        </a>
      ) : (
        <span className="text-ink-dim">{title}</span>
      )}
      <p className="text-ink-faint">{detail}</p>
    </li>
  );
}
