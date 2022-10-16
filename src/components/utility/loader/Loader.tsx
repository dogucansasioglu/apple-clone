import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface ILoader {
  isStorybook?: boolean;
}

export default function Loader({ isStorybook }: ILoader) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  useEffect(() => {
    if (isStorybook) {
      // to test the loader component in storybook
      setLoading(true);
    } else {
      const handleStart = (url: any) =>
        url !== router.asPath && setLoading(true);
      const handleComplete = (url: any) =>
        url === router.asPath && setLoading(false);

      // listen to router events to show/hide the loader
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);
      return () => {
        // remove the listeners
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }
  }, [isStorybook, router]);
  
  return (
    <div ref={parent}>
      {loading && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-backdrop">
          <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}
