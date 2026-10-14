import tools from "../data/tools";

export default function Tools() {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-ink-faint">
      {tools.map(({ name, icon }) => (
        <li key={name} className="inline-flex items-center gap-1.5">
          <svg aria-hidden="true" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
            <use href={`/icons.svg#${icon}`} />
          </svg>
          {name}
        </li>
      ))}
    </ul>
  );
}
