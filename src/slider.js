// the only script the page ships. clip-path, not width: no reflow
const frame = document.querySelector("[data-comparison]");

if (frame) {
  const before = frame.querySelector("[data-comparison-before]");
  const handle = frame.querySelector("[data-comparison-handle]");
  let pct = 25;

  // only claim to be a slider once something can actually drive it
  frame.setAttribute("role", "slider");
  frame.setAttribute("tabindex", "0");
  frame.setAttribute("aria-label", "Drag to compare the old design with the new one");
  frame.setAttribute("aria-valuemin", "0");
  frame.setAttribute("aria-valuemax", "100");
  frame.setAttribute("aria-valuenow", "25");
  frame.style.cursor = "ew-resize";

  const set = (next) => {
    pct = Math.min(100, Math.max(0, next));
    before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = `${pct}%`;
    frame.setAttribute("aria-valuenow", Math.round(pct));
  };

  const positionFrom = (clientX) => {
    const box = frame.getBoundingClientRect();
    set(((clientX - box.left) / box.width) * 100);
  };

  frame.addEventListener("pointerdown", (e) => {
    frame.setPointerCapture(e.pointerId);
    positionFrom(e.clientX);
  });

  frame.addEventListener("pointermove", (e) => {
    if (frame.hasPointerCapture(e.pointerId)) positionFrom(e.clientX);
  });

  frame.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") { e.preventDefault(); set(pct - step); }
    if (e.key === "ArrowRight") { e.preventDefault(); set(pct + step); }
  });
}
