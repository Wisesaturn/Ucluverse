import { useRef, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { theme } from '../Recoil/Theme';

export const useScrollBG = (bg = 'default', duration = 1, delay = 0, thresholdIdx = 0.5) => {
  const DOM = useRef<any>(); // ref type 형식 넣어야함 (scrollinfo)
  const setThemeColor = useSetRecoilState(theme);

  const moveScroll = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        setThemeColor(bg);
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
  };
};

export default useScrollBG;
