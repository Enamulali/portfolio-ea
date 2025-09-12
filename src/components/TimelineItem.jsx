import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';


export default function TimelineItem({ experience }) {
const ref = useRef(null);
const isVisible = useOnScreen(ref);


const transitionClasses = `transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
const circleClasses = `absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400`;


return (
<div ref={ref} className={`grid grid-cols-[2.5rem_1fr] group py-6 ${transitionClasses}`}>
<div className="relative">
<div className={circleClasses} />
</div>
<div>
<p className="text-sm text-sky-400/80 mb-1 font-mono">{experience.date}</p>
<h3 className="text-lg font-bold text-slate-100">{experience.title}</h3>
{experience.company && <h4 className="text-md font-semibold text-slate-300 mb-2">{experience.company}</h4>}
<p className="text-slate-400 text-sm mb-4 leading-relaxed text-justify">{experience.description}</p>


{experience.achievements && experience.achievements.length > 0 && (
<div className="mb-4">
<ul className="list-disc list-inside space-y-1.5">
{experience.achievements.map((a, i) => (
<li key={i} className="text-slate-400 text-sm leading-relaxed">{a}</li>
))}
</ul>
</div>
)}


<div className="flex flex-wrap gap-2">
{experience.techStack && experience.techStack.map((tech, i) => (
<span key={i} className="bg-sky-400/10 text-sky-400 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
))}
</div>
</div>
</div>
);
}