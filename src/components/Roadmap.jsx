import roadmap from "../data/roadmap";

const BLOCK = {
  past: "bg-white/6 text-ink-faint",
  now: "bg-ink text-ground font-medium",
  later: "border border-dashed border-edge text-ink-faint",
};

export default function Roadmap() {
  return (
    <div>
      {/* narrow: a row per stage */}
      <ol className="sm:hidden">
        {roadmap.map((s) => (
          <li key={s.label} className="flex items-baseline gap-x-3 border-t border-edge py-2.5 first:border-t-0">
            <span className={s.state === "now" ? "text-ink font-medium" : "text-ink-faint"}>{s.label}</span>
            {s.state === "now" && <span className="sr-only">, now</span>}
            <span className="ml-auto text-ink-faint tabular-nums">{s.year ?? "next"}</span>
          </li>
        ))}
        <li className="mt-3 border-t border-edge pt-3 text-ink-faint">Writing code, throughout</li>
      </ol>

      {/* wide: the strip, with each year at its stage's left edge */}
      <div className="hidden sm:block">
        <ol className="flex h-9 gap-1">
          {roadmap.map((s) => (
            <li key={s.label} style={{ flex: s.span }} className={`flex items-center justify-center overflow-hidden rounded-sm px-2 whitespace-nowrap ${BLOCK[s.state]}`}>
              {s.label}
              <span className="sr-only">
                , {s.year ?? "next"}
                {s.state === "now" ? ", current" : ""}
              </span>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="mt-1.5 flex gap-1">
          {roadmap.map((s) => (
            <span key={s.label} style={{ flex: s.span }} className="text-ink-faint tabular-nums">
              {s.year}
            </span>
          ))}
        </div>

        <div aria-hidden="true" className="mt-4 flex items-center gap-3">
          <span className="h-1.5 w-px bg-edge" />
          <span className="h-px flex-1 bg-edge" />
          <span className="text-ink-faint">Writing code</span>
          <span className="h-px flex-1 bg-edge" />
          <span className="h-1.5 w-px bg-edge" />
        </div>
        <p className="sr-only">Writing code, throughout.</p>
      </div>
    </div>
  );
}
