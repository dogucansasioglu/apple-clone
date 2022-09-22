import { ComponentType, CSSProperties, ReactNode } from 'react';
import useIntersection from '../../../utils/useIntersection';

interface LazyLoadProps {
  tag?: ComponentType | keyof JSX.IntrinsicElements;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  root?: Element | Document | null;
  threshold?: number | number[];
  rootMargin?: string;
  forward?: boolean;
}

export function LazyLoad(props: LazyLoadProps) {
  const [isIntersecting, ref] = useIntersection();
  return <div ref={ref}>{isIntersecting ? props.children : null}</div>;
}

export default LazyLoad;
