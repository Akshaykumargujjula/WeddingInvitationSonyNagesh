import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger entrance animations when elements enter the viewport.
 * Uses IntersectionObserver for 60fps GPU performance on mobile.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If IntersectionObserver is not supported, reveal immediately
    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isRevealed];
}
