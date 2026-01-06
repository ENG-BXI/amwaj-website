'use client';
import React, {useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {useTranslations} from 'next-intl';
import Toast from '../_Components/Toast';
import {Loader2} from 'lucide-react';

const ContactUs = () => {
  const t = useTranslations('ContactUs');
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{message: string; type: 'success' | 'error'} | null>(null);

  // animate by scroll
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current!,
          start: 'top 70%',
          end: 'bottom 20%'
        }
      });
      tl.from(container.current!.querySelector('h2'), {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });
      tl.from(
        container.current!.querySelector('p'),
        {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: 'power3.out'
        },
        '-=0.8'
      );
    },
    {scope: container}
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setToast({message: t('success'), type: 'success'});
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setToast({message: t('error'), type: 'error'});
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section ref={container} id='contactUs' className='section px-5 relative'>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <h2 className='section__title text-[80px]! md:text-[120px]! overflow-hidden!'>تواصل معنا CONTACT US</h2>
      <p className='text-secondary font-bold  text-center mb-10'>{t('description')}</p>

      <form onSubmit={handleSubmit} className=' mx-auto py-5 px-5 md:px-20 max-w-300 flex flex-col justify-center items-center bg-[#204C4C]/40 border-2 border-secondary rounded-4xl'>
        <div className='flex flex-col md:flex-row w-full gap-x-10 mb-7'>
          <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='name'>
            <span className='font-bold'>{t('nameLabel')}</span>
            <input required placeholder={t('namePlaceholder')} name='name' className='bg-[#204C4C]/40 h-12 border border-secondary rounded-xl  placeholder:text-[22px]! p-2 focus:border-primary outline-hidden transition-colors' />
          </label>
          <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='email'>
            <span className='font-bold'>{t('emailLabel')}</span>
            <input type='email' required name='email' placeholder={t('emailPlaceholder')} className='bg-[#204C4C]/40 h-12  border border-secondary rounded-xl placeholder:text-[22px]! p-2 focus:border-primary outline-hidden transition-colors' />
          </label>
        </div>
        <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='details'>
          <span className='font-bold'>{t('detailsLabel')}</span>
          <textarea required className='bg-[#204C4C]/40 min-h-50 border border-secondary rounded-xl placeholder:text-[22px]! p-2 focus:border-primary outline-hidden transition-colors' placeholder={t('detailsPlaceholder')} name='details'></textarea>
        </label>

        <button disabled={status === 'loading'} className='mt-5 py-3 w-full rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
          {status === 'loading' ? (
            <>
              <Loader2 className='animate-spin' size={20} />
              <span>...</span>
            </>
          ) : (
            t('submit')
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
