import { ComponentType, CSSProperties, ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '../../../utils/useIntersectionObserver';

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

function LazyLoad(props: LazyLoadProps) {
  const { tag = 'div', children, style, className } = props;
  // @ts-ignore
  const Tag: any = tag;
  const ref = useRef<Element>(null);
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      root: props.root ?? null,
      threshold: props.threshold ?? 0,
      rootMargin: props.rootMargin,
    },
    props.forward
  );

  return (
    <Tag ref={ref} style={style} className={className}>
      {isIntersecting ? null : children}
    </Tag>
  );
}

export default LazyLoad;
