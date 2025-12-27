import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/Images/Logo.png';
import {Menu} from 'lucide-react';

function NavBar() {
  return (
    <nav className='container mx-auto flex justify-between items-center px-7 sticky top-5 left-0 w-full h-14 z-100 bg-white rounded-full'>
      <ul className='hidden md:flex text-black ms-7 gap-x-3 items-center text-lg font-semibold'>
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
      <Menu className='block md:hidden text-black' />
      <Image src={LogoImage} height={50} alt='HeroImage' />
    </nav>
  );
}

export default NavBar;
