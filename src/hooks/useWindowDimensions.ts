// Если есть полоса прокрутки, и она занимает какое-то место, то свойства clientWidth/clientHeight указывают на ширину/высоту документа без неё (за её вычетом). Иными словами, они возвращают высоту/ширину видимой части документа, доступной для содержимого.
// А window.innerWidth/innerHeight включают в себя полосу прокрутки.

//  window.innerWidth ; // полная ширина окна
// document.documentElement.clientWidth ; // ширина окна за вычетом полосы прокрутки

import { useState, useEffect } from 'react';

interface WindowsDimensions {
  width: number | null;
  height: number | null;
}

export default function useWindowDimensions(): WindowsDimensions {
  const hasWindow: boolean = typeof window !== 'undefined';

  function getWindowDimensions(): WindowsDimensions {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<WindowsDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);

  return windowDimensions;
}
