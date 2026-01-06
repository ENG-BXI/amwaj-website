'use client';
import {ArrowUp} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useGSAP(() => {
    if (isVisible) {
      gsap.to('#back-to-top', {opacity: 1, scale: 1, duration: 0.3, display: 'flex'});
    } else {
      gsap.to('#back-to-top', {opacity: 0, scale: 0.5, duration: 0.3, display: 'none'});
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button id='back-to-top' onClick={scrollToTop} className='fixed bottom-8 right-8 z-200 bg-primary text-white p-3 rounded-full shadow-2xl cursor-pointer hidden opacity-0 scale-50 hover:bg-primary/80 transition-all border border-white/20' aria-label='Back to top'>
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
