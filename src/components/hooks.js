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
   if(open){
    const scrollBarWidth = window.innerWidth - document.querySelector('body').offsetWidth;
    const originalStyle = window.getComputedStyle(document.body).overflowY; 
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.overflowY = 'hidden';
   return () => [document.body.style.overflowY = originalStyle, document.body.style.paddingRight = '0px' ];
   }
   }); 
}

export const useNavHeighAdjustment = (open) => {
  useLayoutEffect(() => {
    const nav = document.querySelector('nav');
    const bottom = nav.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if(open && bottom < windowHeight){
      console.log('fired');
      nav.style.height  = `calc(100vh + ${windowHeight - bottom}px)`;
      return () =>  nav.style.height  = '100vh';
    }
  });
}

export const scrollToSect = (e, open, setOpen) => {
  e.preventDefault();
  const sect = document.getElementById(e.target.dataset.sect);
  if(open){
    setOpen(!open);
  }
  sect.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}
