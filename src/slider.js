const frame = document.querySelector("[data-comparison]");
const before = frame.querySelector("[data-comparison-before]");
const handle = frame.querySelector("[data-comparison-handle]");
const knob = frame.querySelector("[data-comparison-knob]");
let pct = 25;

// only claim to be a slider once something can actually drive it
knob.setAttribute("role", "slider");
knob.setAttribute("tabindex", "0");
knob.setAttribute("aria-label", "Compare the old design with the new one");
knob.setAttribute("aria-valuemin", "0");
knob.setAttribute("aria-valuemax", "100");
knob.setAttribute("aria-valuenow", "25");
frame.style.cursor = "ew-resize";

// clip-path, not width: no reflow
const set = (next) => {
  pct = Math.min(100, Math.max(0, next));
  before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  handle.style.left = `${pct}%`;
  knob.setAttribute("aria-valuenow", Math.round(pct));
};

const positionFrom = (clientX) => {
  const box = frame.getBoundingClientRect();
  set(((clientX - box.left) / box.width) * 100);
};

frame.addEventListener("pointerdown", (e) => {
  frame.setPointerCapture(e.pointerId);
  // a touch may be the start of a scroll, so on touch only a drag moves the handle
  if (e.pointerType !== "touch") positionFrom(e.clientX);
});

frame.addEventListener("pointermove", (e) => {
  if (frame.hasPointerCapture(e.pointerId)) positionFrom(e.clientX);
});

knob.addEventListener("keydown", (e) => {
  const step = e.shiftKey ? 10 : 2;
  if (e.key === "ArrowLeft") { e.preventDefault(); set(pct - step); }
  if (e.key === "ArrowRight") { e.preventDefault(); set(pct + step); }
});
