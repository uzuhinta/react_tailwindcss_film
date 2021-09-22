import { useLayoutEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      console.log(window.innerWidth, window.innerHeight);
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return size;
}
