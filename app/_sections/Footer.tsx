import React from 'react';
import Logo from '@/public/Images/Logo.png';
import Image from 'next/image';
const Footer = () => {
  // TODO Have Problem Responsive
  return (
    <footer className='md:px-20 pt-20 pb-10 border-y border-primary'>
      <div className='flex flex-col md:flex-row justify-between mb-10'>
        <div className='w-80 h-25'>
          <Image className='w-full h-full' src={Logo} alt='Logo Image' />
        </div>
        <div>
          <ul>
            <li>الرئيسية</li>
            <li>من نحن</li>
            <li>فلسفتنا</li>
            <li>اعمالنا</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>خبراتنا</li>
            <li>فريق العمل</li>
            <li>التزامنا</li>
            <li>شركائنا</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>عملائنا</li>
            <li>مشاريعنا</li>
            <li>معرض الصور</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
        <div className=''>
          <ul className='text-end'>
            <li>P.O. Box: 8347</li>
            <li>9675362936 +</li>
            <li>967771411160</li>
            <li>Amwaj_ye@outlook.com</li>
          </ul>
        </div>
      </div>
      <p className='text-center'>
        الجمهورية اليمنية - محافظة حضرموت - مدينة المكلا - شارع فوة الرئيسي
        <br />
        Fowa&apos;a Main street - ALMukalla city - Hadramout - Yemen
      </p>
    </footer>
  );
};

export default Footer;
