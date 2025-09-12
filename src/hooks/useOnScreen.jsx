import { useState, useEffect } from 'react';


export default function useOnScreen(ref, options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
const [isIntersecting, setIntersecting] = useState(false);


useEffect(() => {
if (!ref || !ref.current) return;


const observer = new IntersectionObserver(([entry]) => {
if (entry.isIntersecting) {
setIntersecting(true);
observer.disconnect();
}
}, options);


const node = ref.current;
observer.observe(node);


return () => {
try {
observer.unobserve(node);
} catch (e) {
// already disconnected
}
};
}, [ref, JSON.stringify(options)]);


return isIntersecting;
}