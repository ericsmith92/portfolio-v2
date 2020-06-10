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
    const originalStyle = window.getComputedStyle(document.body).overflow; 
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.overflow = 'hidden';
   return () => [document.body.style.overflow = originalStyle, document.body.style.paddingRight = '0px' ];
   }
   }); 
}

export const useNavHeighAdjustment = (open) => {
  useLayoutEffect(() => {
    const nav = document.querySelector('nav');
    const bottom = nav.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if(open && bottom < windowHeight){
      nav.style.height  = `calc(100vh + ${windowHeight - bottom}px)`;
      return () =>  nav.style.height  = '100vh';
    }
  });
}

export const useNavButtonMarginAdjustment = (open) => {
  useLayoutEffect(() => {
    if(open){
      const btn = document.querySelector('.burger');
      const top = btn.getBoundingClientRect().top;
      const originalStyle = window.getComputedStyle(btn).marginTop;

      if(Math.sign(top) < 0){
        console.log(top);
        btn.style.marginTop = `${parseInt(originalStyle.split('px')[0]) + Math.abs(top) + 10}px`;
      }

      return () =>  btn.style.marginTop  = originalStyle;
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
