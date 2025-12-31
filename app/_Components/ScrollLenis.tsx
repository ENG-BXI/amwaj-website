'use client';
import {ReactNode} from 'react';
import Lenis from 'lenis';
import {ScrollTrigger} from 'gsap/all';
import {gsap} from 'gsap';

function ScrollLenis({children}: {children: ReactNode}) {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  return <> {children}</>;
}

export default ScrollLenis;
