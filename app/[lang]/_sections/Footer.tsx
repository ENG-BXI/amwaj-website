import React from 'react';
import Logo from '@/public/Images/Logo.png';
import Image from 'next/image';
import {Phone, Mail, Mailbox} from 'lucide-react';
import Link from 'next/link';

import {useTranslations} from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  const columns = t.raw('columns') as {title: string; links: {label: string; href: string}[]}[];

  const contactInfo = [
    {icon: <Mailbox className='text-primary w-5 h-5' />, text: 'P.O. Box: 8347'},
    {icon: <Phone className='text-primary w-5 h-5' />, text: '+ 9675362936'},
    {icon: <Phone className='text-primary w-5 h-5' />, text: '967771411160'},
    {icon: <Mail className='text-primary w-5 h-5' />, text: 'Amwaj_ye@outlook.com'}
  ];

  return (
    <footer className='border-t border-primary/20 bg-background pt-10 pb-6'>
      <div className='container mx-auto px-4 md:px-8 mb-10'>
        <div className='flex flex-col xl:flex-row gap-10 xl:gap-20 items-start'>
          {/* Logo Section */}
          <div className='hidden xl:flex w-full xl:w-auto  '>
            <div className='w-70 sm:w-[320px] md:w-87.5'>
              <Image className='w-full h-auto' src={Logo} alt='Amwaj Logo' />
            </div>
          </div>

          {/* Content Grid */}
          <div className='flex-1 w-full grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {/* Dynamic Link Columns */}
            {columns.map((column, colIndex) => (
              <div key={colIndex} className='flex flex-col gap-3 text-start'>
                <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>{column.title}</h4>
                {column.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href} className='text-lg md:text-xl text-white/80 hover:text-primary transition-colors font-light'>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Contact Info Column */}
            <div className='flex flex-col gap-5 text-start col-span-2 sm:col-span-1'>
              <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>{t('contactTitle')}</h4>
              <div className='flex flex-col gap-4'>
                {contactInfo.map((item, index) => {
                  let href = '#';
                  if (item.text.includes('@')) href = `mailto:${item.text}`;
                  else if (item.text.includes('+') || /^\d+$/.test(item.text.replace(/\s/g, ''))) href = `tel:${item.text.replace(/\s/g, '')}`;

                  const isLink = href !== '#';

                  return (
                    <div key={index} className='flex items-center gap-3'>
                      <div className='text-white/90 shrink-0'>{item.icon}</div>
                      {isLink ? (
                        <a href={href} className='text-base md:text-lg text-white/80 font-light dir-ltr hover:text-primary transition-colors'>
                          {item.text}
                        </a>
                      ) : (
                        <span className='text-base md:text-lg text-white/80 font-light dir-ltr'>{item.text}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address and Copyright Section */}
      <div className='container mx-auto px-4 text-center space-y-4'>
        <div className='space-y-1'>
          <p className='text-white text-base md:text-lg'>الجمهورية اليمنية - محافظة حضرموت - مدينة المكلا - شارع فوة الرئيسي</p>
          <p className='text-white/70 text-sm md:text-base font-light'>Fowa&apos;a Main street - ALMukalla city - Hadramout - Yemen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
