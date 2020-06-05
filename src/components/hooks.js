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
    const scrollBarWidth = window.innerWidth - document.querySelector('body').offsetWidth;
    const originalStyle = window.getComputedStyle(document.body).overflowY; 
    // Prevent scrolling on mount
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.overflowY = 'hidden';
    console.log(scrollBarWidth);
    // Re-enable scrolling when component unmounts
   return () => [document.body.style.overflowY = originalStyle, document.body.style.paddingRight = '0px' ];
   }
   }); // Empty array ensures effect is only run on mount and unmount
}