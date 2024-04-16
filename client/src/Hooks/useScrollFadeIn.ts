import { useRef, useCallback, useEffect } from 'react';

interface ScrollInfo {}

export const useScrollFadeIn = (
  direction = 'up',
  duration = 1,
  delay = 0,
  thresholdIdx = 0.5,
  zidx = 1,
) => {
  const DOM = useRef<any>(); // ref type 형식 넣어야함 (scrollinfo)

  const moveDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return '';
    }
  };

  const moveScroll = useCallback(
    ([entry]) => {
      const { current } = DOM;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
        current.style.zIndex = `${zidx}`;
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = DOM;

    if (current) {
      // threshold (노출율)
      observer = new IntersectionObserver(moveScroll, { threshold: thresholdIdx });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [moveScroll]);

  return {
    ref: DOM,
    style: {
      opacity: 0,
      transform: moveDirection(direction),
    },
  };
};

export default useScrollFadeIn;
