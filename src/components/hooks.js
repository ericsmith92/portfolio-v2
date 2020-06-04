import { useEffect, useLayoutEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export const useLockBodyScroll = (open) => {
  useLayoutEffect(() => {
   // Get original body overflow
   if(open){
    const originalStyle = window.getComputedStyle(document.body).overflow; 
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
   return () => document.body.style.overflow = originalStyle;
   }
   }); // Empty array ensures effect is only run on mount and unmount
}