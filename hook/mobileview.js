import { useState, useEffect } from 'react';

export const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Change the breakpoint as needed
      setIsMobileView(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileView;
}