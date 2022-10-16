// this file is a modified version of Intersection API
// i dont use it in this project but i will use it in the future
import { useEffect, useRef, useState } from 'react';

// interface IntersectionHookInit extends IntersectionObserverInit {
//   // In case I want to add something
// }

type OnIntersection = (
  isIntersecting: boolean,
  ob: IntersectionObserver
) => boolean | void;

const DefaultOptions: IntersectionObserverInit = {
  root: null,
  threshold: 0,
};

// Most of time we only need ob until intersecting, so return false here to disconnect ob.
const DefaultOnIntersection: OnIntersection = (isIntersecting, ob) => {
  if (isIntersecting) return false;
};

export default function useIntersection(
  onIntersection: OnIntersection = DefaultOnIntersection,
  options: IntersectionObserverInit = DefaultOptions
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elemRef = useRef<null | Element | undefined>(null);
  const setElem = (elem: any) => {
    elemRef.current = elem;
  };

  useEffect(() => {
    if (!elemRef.current) return;
    let isUnmounted = false;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (isUnmounted) return;
        const isElementIntersecting = entry.isIntersecting;
        if (onIntersection(isElementIntersecting, ob) === false) {
          ob.disconnect();
        }
        setIsIntersecting(isElementIntersecting);
      },
      { ...options }
    );
    ob.observe(elemRef.current);
    return () => {
      ob.disconnect();
      isUnmounted = true;
    };
  }, [options, onIntersection]);

  return [isIntersecting, setElem] as const;
}
