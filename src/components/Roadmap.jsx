// span sets each stage's width; years sit at the stage's left edge
const STAGES = [
  { label: "Full-stack", year: "2022", span: 1.5, state: "past" },
  { label: "Cloud engineer", year: "2023", span: 2.0, state: "past" },
  { label: "Systems design", year: "2026", span: 1.9, state: "now" },
  { label: "Architect", year: null, span: 1.4, state: "later" },
];

const BLOCK = {
  past: "bg-white/[0.06] text-ink-faint",
  now: "bg-ink text-ground font-medium",
  later: "border border-dashed border-white/15 text-ink-faint",
};

export default function Roadmap() {
  return (
    <div>
      {/* narrow: a row per stage */}
      <ol className="sm:hidden">
        {STAGES.map((s) => (
          <li
            key={s.label}
            className="flex items-baseline gap-x-3 border-t border-white/[0.07] py-2.5 first:border-t-0"
          >
            <span
              className={
                s.state === "now" ? "text-ink font-medium" : "text-ink-faint"
              }
            >
              {s.label}
            </span>
            {s.state === "now" && <span className="sr-only">, now</span>}
            <span className="ml-auto text-ink-faint tabular-nums">
              {s.year ?? "next"}
            </span>
          </li>
        ))}
        <li className="mt-3 border-t border-white/[0.07] pt-3 text-ink-faint">
          Writing code, throughout
        </li>
      </ol>

      {/* wide: the strip */}
      <div className="hidden sm:block">
        <ol className="flex h-9 gap-1">
          {STAGES.map((s) => (
            <li
              key={s.label}
              style={{ flex: s.span }}
              className={`flex items-center justify-center overflow-hidden rounded-sm px-2 whitespace-nowrap ${BLOCK[s.state]}`}
            >
              {s.label}
              <span className="sr-only">
                , {s.year ?? "next"}
                {s.state === "now" ? ", current" : ""}
              </span>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="mt-1.5 flex gap-1">
          {STAGES.map((s) => (
            <span
              key={s.label}
              style={{ flex: s.span }}
              className="text-ink-faint tabular-nums"
            >
              {s.year}
            </span>
          ))}
        </div>

        <div aria-hidden="true" className="mt-4 flex items-center gap-3">
          <span className="h-1.5 w-px bg-white/20" />
          <span className="h-px flex-1 bg-white/12" />
          <span className="text-ink-faint">Writing code</span>
          <span className="h-px flex-1 bg-white/12" />
          <span className="h-1.5 w-px bg-white/20" />
        </div>
        <p className="sr-only">Writing code, throughout.</p>
      </div>
    </div>
  );
}
