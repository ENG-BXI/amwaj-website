'use client';
import {ReactNode, useEffect} from 'react';
import Lenis from 'lenis';
import gsap, {ScrollTrigger} from 'gsap/all';

function ScrollLenis({children}: {children: ReactNode}) {
  useEffect(() => {
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

export default ScrollLenis;
