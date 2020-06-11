import { useEffect, useLayoutEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

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
        btn.style.marginTop = `${parseInt(originalStyle.split('px')[0]) + Math.abs(top) + 10}px`;
      }

      return () =>  btn.style.marginTop  = originalStyle;
    }
  });
}

export const scrollToSect = (e, open, setOpen) => {
  e.preventDefault();
  smoothscroll.polyfill();
  const sectTop = document.getElementById(e.target.dataset.sect).getBoundingClientRect().top;
  
  if(open){
    setOpen(!open);
  }

  window.scrollTo({
    top: sectTop - 30,
    left: 0,
    behavior: 'smooth'
  });
}
