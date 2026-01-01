'use client';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/Images/Logo.png';
import {Menu} from 'lucide-react';
import {useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

function NavBar() {
  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      tl.from(container.current, {duration: 1, width: 0, opacity: 0, clearProps: 'width,opacity'});
      tl.from(container.current!.querySelectorAll('ul a'), {duration: 1, y: -20, opacity: 0, stagger: 0.1}, '-=0.5');
      tl.from(container.current!.querySelector('img'), {duration: 0.7, y: -20, opacity: 0, clearProps: 'y,opacity'}, '-=0.5');
    },
    {scope: container}
  );
  return (
    <nav ref={container} className='container will-change-[width,opacity] overflow-hidden mx-auto flex justify-between items-center px-7 sticky top-5 left-0 h-14 z-100 bg-white rounded-full'>
      <ul className='hidden md:flex will-change-[opacity,y] text-black ms-7 gap-x-3 items-center text-lg font-semibold'>
        <Link href='#whoAreWe'>
          <li>من نحن</li>
        </Link>
        <Link href='#ourPhilosophy'>
          <li>فلسفتنا</li>
        </Link>
        <Link href='#ourWork'>
          <li>اعمالنا</li>
        </Link>
        <Link href='#ourExperience'>
          <li>مشاريعنا</li>
        </Link>
        <Link href='#ourTeam'>
          <li>فريقنا</li>
        </Link>
        <Link href='#ourClients'>
          <li>عملائنا</li>
        </Link>
        <Link href='#contactUs'>
          <li>تواصل معنا</li>
        </Link>
      </ul>
      <Menu className='block md:hidden will-change-[opacity,y] text-black' />
      <Image className='will-change-[opacity,y]' src={LogoImage} height={50} alt='HeroImage' />
    </nav>
  );
}

export default NavBar;
