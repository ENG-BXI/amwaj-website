import React from 'react';
import Logo from '@/public/Images/Logo.png';
import Image from 'next/image';
import {Phone, Mail, Mailbox} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    {label: 'الرئيسية', href: '#hero'},
    {label: 'من نحن', href: '#whoAreWe'},
    {label: 'فلسفتنا', href: '#ourPhilosophy'},
    {label: 'اعمالنا', href: '#ourWork'}
  ];

  const navLinks2 = [
    {label: 'خبراتنا', href: '#ourExperience'},
    {label: 'فريق العمل', href: '#ourTeam'},
    {label: 'التزامنا', href: '#ourCommitment'},
    {label: 'شركائنا', href: '#ourPartners'}
  ];

  const navLinks3 = [
    {label: 'عملائنا', href: '#ourClients'},
    {label: 'مشاريعنا', href: '#ourProject'},
    {label: 'معرض الصور', href: '#imageGallery'},
    {label: 'تواصل معنا', href: '#contactUs'}
  ];

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
            {/* Links Column 1 */}
            <div className='flex flex-col gap-3 text-start'>
              <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>الوصول السريع</h4>
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className='text-lg md:text-xl text-white/80 hover:text-primary transition-colors font-light'>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Links Column 2 */}
            <div className='flex flex-col gap-3 text-start'>
              <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>عن أمواج</h4>
              {navLinks2.map((link, index) => (
                <Link key={index} href={link.href} className='text-lg md:text-xl text-white/80 hover:text-primary transition-colors font-light'>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Links Column 3 */}
            <div className='flex flex-col gap-3 text-start'>
              <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>معلوماتنا</h4>
              {navLinks3.map((link, index) => (
                <Link key={index} href={link.href} className='text-lg md:text-xl text-white/80 hover:text-primary transition-colors font-light'>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Info Column */}
            <div className='flex flex-col gap-5 text-start col-span-2 sm:col-span-1'>
              <h4 className='text-xl md:text-2xl font-bold text-white mb-2'>تواصل معنا</h4>
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
