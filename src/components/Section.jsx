import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';


export default function Section({ title, children, id }) {
const ref = useRef(null);
const isVisible = useOnScreen(ref, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });


return (
<section id={id} ref={ref} className={`py-16 sm:py-20 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-slate-100 mb-8 sm:mb-12 relative flex items-center">
<span className="bg-sky-400/20 text-sky-400 text-xl font-mono font-bold rounded-md px-2 py-1 mr-4">{id}.</span>
{title}
<span className="h-px flex-grow bg-slate-700 ml-6"></span>
</h2>
{children}
</div>
</section>
);
}