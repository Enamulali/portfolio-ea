// static markup; src/slider.js adds the drag
export default function Comparison({ before, after, beforeAlt, afterAlt }) {
  return (
    <div data-comparison="" className="relative mt-6 select-none touch-pan-y overflow-hidden rounded-2xl border border-edge">
      <img
        src={after}
        alt={afterAlt}
        width="1280"
        height="900"
        loading="lazy"
        draggable="false"
        className="block w-full"
      />

      <img
        data-comparison-before=""
        src={before}
        alt={beforeAlt}
        width="1280"
        height="900"
        loading="lazy"
        draggable="false"
        className="absolute inset-0 block w-full"
        style={{ clipPath: "inset(0 75% 0 0)" }}
      />

      <div data-comparison-handle="" className="absolute inset-y-0 w-px bg-white/85 pointer-events-none" style={{ left: "25%" }}>
        <span data-comparison-knob="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-white/50 bg-white/12 inset-shadow-2xs inset-shadow-white/40 backdrop-blur-md" />
      </div>

      <span className="absolute left-3 bottom-3 rounded-full bg-black/45 px-2.5 py-1 text-ink backdrop-blur-sm pointer-events-none">2025</span>
      <span className="absolute right-3 bottom-3 rounded-full bg-black/45 px-2.5 py-1 text-ink backdrop-blur-sm pointer-events-none">Now</span>
    </div>
  );
}
