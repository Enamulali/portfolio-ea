import { techIcon } from "../assets/tech";
import stack from "../data/stack";

export default function Stack() {
  return (
    <>
      <h2 className="sr-only">Tools</h2>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-ink-faint">
        {stack.map((tech) => {
          const Icon = techIcon(tech);
          return (
            <li key={tech} className="inline-flex items-center gap-1.5">
              {Icon ? <Icon aria-hidden="true" className="w-3.5 h-3.5 shrink-0" /> : null}
              {tech}
            </li>
          );
        })}
      </ul>
    </>
  );
}
