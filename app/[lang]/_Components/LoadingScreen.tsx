'use client';
import {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import {CustomEase} from 'gsap/all';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBgRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(CustomEase);
      CustomEase.create('stutterEase', 'M0,0 C0,0 0.052,0.1 0.152,0.1 0.242,0.1 0.299,0.349 0.399,0.349 0.586,0.349 0.569,0.596 0.67,0.624 0.842,0.671 0.95,0.95 1,1');
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial State
      gsap.set(progressBgRef.current, {scaleX: 0, transformOrigin: 'left'});
      gsap.set(maskRef.current, {scale: 1});
      gsap.set('.char-og', {yPercent: 0});
      gsap.set('.char-dup', {yPercent: 100});

      // 1. Text Animation Start (Looping like the reference)
      const textTl = gsap.timeline({repeat: -1});
      textTl
        .to('.char-og', {
          yPercent: -100,
          duration: 0.5,
          ease: 'power2.inOut',
          stagger: {each: 0.02, from: 'random'},
          delay: 0.5
        })
        .to(
          '.char-dup',
          {
            yPercent: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: {each: 0.02, from: 'random'}
          },
          '<'
        )
        .to({}, {duration: 1.5}); // Pause

      // 2. Progress Logic (Faster: 2.0s)
      tl.to(progressBgRef.current, {
        scaleX: 1,
        duration: 2.0,
        ease: 'stutterEase'
      });

      const counterObj = {value: 0};
      gsap.to(counterObj, {
        value: 100,
        duration: 2.0,
        ease: 'stutterEase',
        onUpdate: () => {
          setPercent(Math.floor(counterObj.value));
        },
        onComplete: () => {
          setTimeout(exitAnimation, 100);
        }
      });

      const exitAnimation = () => {
        window.dispatchEvent(new Event('loaderFinished'));
        const exitTl = gsap.timeline({
          onComplete: () => setLoading(false)
        });

        exitTl
          .to(maskRef.current, {
            scale: 12,
            duration: 0.8,
            ease: 'expo.inOut'
          })
          .to(
            [progressBarRef.current, maskRef.current],
            {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.inOut'
            },
            '-=0.5'
          );
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!loading) return null;

  const fullText = 'AMWAJ INTERNATIONAL®';

  return (
    <div ref={containerRef} id='loading-screen' className='fixed inset-0 z-500 overflow-hidden loader-vars' dir='ltr'>
      <style jsx>{`
        .loader-vars {
          --mask-size: 55%;
        }
        @media (max-width: 768px) {
          .loader-vars {
            --mask-size: 92%;
          }
        }
      `}</style>

      {/* Background Layer with Progress */}
      <div ref={progressBarRef} className='fixed inset-0 z-10 bg-[#0f2222] flex items-center justify-center'>
        <div ref={progressBgRef} className='absolute inset-0 bg-[#204C4C]' />

        <div className='relative z-20 flex flex-col items-center gap-6 md:gap-10 mix-blend-difference pointer-events-none w-full'>
          {/* Animated Text: AMWAJ INTERNATIONAL */}
          <div className='flex overflow-hidden px-4 md:px-10 justify-center w-full'>
            {fullText.split('').map((char, i) => (
              <div key={i} className='relative overflow-hidden'>
                <span className='char-og block text-white text-[1rem] sm:text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none'>{char === ' ' ? '\u00A0' : char}</span>
                <span className='char-dup absolute inset-0 block text-white text-[1rem] sm:text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none'>{char === ' ' ? '\u00A0' : char}</span>
              </div>
            ))}
          </div>

          {/* Counter */}
          <div className='text-white font-mono text-4xl md:text-8xl font-light'>{percent.toString().padStart(3, '0')}%</div>
        </div>
      </div>

      {/* Mask Layer - Using the provided SVG hole mask */}
      <div
        ref={maskRef}
        className='fixed inset-0 z-20 bg-[#091616] pointer-events-none'
        style={{
          mask: 'linear-gradient(white, white), url("https://ik.imagekit.io/kg2nszxjp/ironstride-preloader/preloader-mask.svg") center/var(--mask-size) no-repeat',
          WebkitMask: 'linear-gradient(white, white), url("https://ik.imagekit.io/kg2nszxjp/ironstride-preloader/preloader-mask.svg") center/var(--mask-size) no-repeat',
          maskComposite: 'subtract',
          WebkitMaskComposite: 'source-out'
        }}
      />
    </div>
  );
};

export default LoadingScreen;
