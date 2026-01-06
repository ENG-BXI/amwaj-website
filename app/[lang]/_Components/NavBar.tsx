'use client';
import {Link, useRouter, usePathname} from '@/app/i18n/navigation';
import Image from 'next/image';
import LogoImage from '@/public/Images/Logo.png';
import {Menu, X, Globe} from 'lucide-react';
import {Dispatch, RefObject, SetStateAction, useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useTranslations, useLocale} from 'next-intl';

function NavBar() {
  const t = useTranslations('NavBar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, {locale: nextLocale});
  };

  useGSAP(
    () => {
      const startAnim = () => {
        const tl = gsap.timeline();
        tl.from(container.current, {duration: 1, width: 0, opacity: 0, clearProps: 'width,opacity'});
        tl.from(container.current!.querySelectorAll('.nav-items a'), {duration: 1, y: -20, opacity: 0, stagger: 0.1}, '-=0.5');
        tl.from(container.current!.querySelector('.logo-img'), {duration: 0.7, y: -20, opacity: 0, clearProps: 'y,opacity'}, '-=0.5');
      };

      window.addEventListener('loaderFinished', startAnim);
      return () => window.removeEventListener('loaderFinished', startAnim);
    },
    {scope: container}
  );

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        display: 'flex'
      });
      gsap.from(mobileMenuRef!.current!.querySelectorAll('a'), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: locale === 'ar' ? '100%' : '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
        display: 'none'
      });
    }
  }, [isMenuOpen, locale]);

  const navLinks = [
    {href: '#whoAreWe', label: t('whoAreWe')},
    {href: '#ourPhilosophy', label: t('philosophy')},
    {href: '#ourWork', label: t('ourWork')},
    {href: '#ourExperience', label: t('projects')},
    {href: '#ourTeam', label: t('team')},
    {href: '#ourClients', label: t('clients')},
    {href: '#contactUs', label: t('contactUs')}
  ];

  return (
    <>
      <nav ref={container} className='container will-change-[width,opacity] overflow-hidden mx-auto flex justify-between items-center px-7 sticky top-5 left-0 h-14 z-100 bg-white rounded-full shadow-lg'>
        <div className='flex items-center gap-4'>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(true)} className='block lg:hidden cursor-pointer text-black hover:text-primary transition-colors'>
            <Menu size={28} />
          </button>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex nav-items will-change-[opacity,y] text-black gap-x-6 items-center text-lg font-semibold'>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className='hover:text-primary transition-colors'>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          {/* Switch Lang */}
          <SwitchLang toggleLanguage={toggleLanguage} locale={locale} />
          <Link href='#' className='cursor-pointer'>
            <Image className='logo-img will-change-[opacity,y]' src={LogoImage} height={40} alt='Amwaj Logo' />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu setIsMenuOpen={setIsMenuOpen} mobileMenuRef={mobileMenuRef} navLinks={navLinks} toggleLanguage={toggleLanguage} locale={locale} />
    </>
  );
}

export default NavBar;
function SwitchLang({toggleLanguage, locale}: {toggleLanguage: () => void; locale: string}) {
  /* Language Switcher */
  return (
    <button onClick={toggleLanguage} className='flex cursor-pointer items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 hover:bg-black/5 transition-all text-black font-bold'>
      <Globe size={18} className='text-primary' />
      <span className='text-sm uppercase'>{locale === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  );
}
function MobileMenu({setIsMenuOpen, mobileMenuRef, navLinks, toggleLanguage, locale}: {setIsMenuOpen: Dispatch<SetStateAction<boolean>>; mobileMenuRef: RefObject<HTMLDivElement | null>; navLinks: {href: string; label: string}[]; toggleLanguage: () => void; locale: string}) {
  return (
    <div ref={mobileMenuRef} className='fixed inset-0 z-200 bg-background/95 backdrop-blur-md flex-col items-center justify-center hidden opacity-0' style={{transform: locale === 'ar' ? 'translateX(100%)' : 'translateX(-100%)'}}>
      <button onClick={() => setIsMenuOpen(false)} className='absolute top-8 right-8 text-white hover:text-primary transition-colors'>
        <X size={32} />
      </button>

      <ul className='flex flex-col items-center gap-8 text-2xl font-bold'>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='text-white hover:text-primary transition-colors'>
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => {
            toggleLanguage();
            setIsMenuOpen(false);
          }}
          className='mt-4 flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-all font-bold'
        >
          <Globe size={24} />
          <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
        </button>
      </ul>
    </div>
  );
}
