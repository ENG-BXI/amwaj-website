'use client';
import {CheckCircle, XCircle} from 'lucide-react';
import {useEffect} from 'react';
import gsap from 'gsap';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast = ({message, type, onClose}: ToastProps) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('#toast-container', {y: 0, opacity: 1, duration: 0.5, ease: 'power3.out'});

    const timer = setTimeout(() => {
      tl.to('#toast-container', {y: 50, opacity: 0, duration: 0.5, ease: 'power3.in', onComplete: onClose});
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div id='toast-container' className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-300 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl opacity-0 translate-y-20 border ${type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'} backdrop-blur-md`}>
      {type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
      <span className='font-bold'>{message}</span>
    </div>
  );
};

export default Toast;
