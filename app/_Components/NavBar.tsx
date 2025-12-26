import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/public/Images/Logo.png';

function NavBar() {
  return (
    <nav className='container mx-auto flex justify-between items-center px-7 sticky top-5 left-0 w-full h-14 z-100 bg-white rounded-full'>
      <ul className='flex text-black ms-7 gap-x-3 items-center text-lg font-semibold'>
        <Link href='#'>
          <li>من نحن</li>
        </Link>
        <Link href='#'>
          <li>فلسفتنا</li>
        </Link>
        <Link href='#'>
          <li>فلسفتنا</li>
        </Link>
        <Link href='#'>
          <li>اعمالنا</li>
        </Link>
        <Link href='#'>
          <li>مشاريعنا</li>
        </Link>
        <Link href='#'>
          <li>مشاريعنا</li>
        </Link>
        <Link href='#'>
          <li>التزامنا</li>
        </Link>
        <Link href='#'>
          <li>تواصل معنا</li>
        </Link>
      </ul>
      <Image src={LogoImage} height={50} alt='HeroImage' />
    </nav>
  );
}

export default NavBar;
