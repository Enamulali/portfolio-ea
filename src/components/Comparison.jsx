// static markup only. the drag lives in src/slider.js, which finds this by data-comparison
// and enhances it, so the page needs no framework at runtime.
export default function Comparison({ before, after, beforeAlt, afterAlt }) {
  return (
    <div
      data-comparison
      className="relative mt-6 select-none overflow-hidden rounded-2xl border border-[var(--edge)]
                 touch-none
                 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
    >
      <img
        src={after}
        alt={afterAlt}
        width="1280"
        height="900"
        decoding="async"
        fetchPriority="low"
        draggable="false"
        className="block w-full"
      />

      <img
        data-comparison-before
        src={before}
        alt={beforeAlt}
        width="1280"
        height="900"
        decoding="async"
        fetchPriority="low"
        draggable="false"
        className="absolute inset-0 block w-full"
        style={{ clipPath: "inset(0 75% 0 0)" }}
      />

      <div
        data-comparison-handle
        className="absolute inset-y-0 w-px bg-[rgba(255,255,255,0.85)] pointer-events-none"
        style={{ left: "25%" }}
      >
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full
                     bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.5)] backdrop-blur-md
                     shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]"
        />
      </div>

      <span className="absolute left-3 bottom-3 text-xs text-ink pointer-events-none
                       rounded-full bg-[rgba(0,0,0,0.45)] px-2.5 py-1 backdrop-blur-sm">
        2025
      </span>
      <span className="absolute right-3 bottom-3 text-xs text-ink pointer-events-none
                       rounded-full bg-[rgba(0,0,0,0.45)] px-2.5 py-1 backdrop-blur-sm">
        Now
      </span>
    </div>
  );
}
