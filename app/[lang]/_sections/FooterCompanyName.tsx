import {useTranslations} from 'next-intl';

const FooterCompanyName = () => {
  const t = useTranslations('FooterCompanyName');
  return (
    <section className='overflow-hidden my-30'>
      <h2 className='section__title text-nowrap text-[90px]! md:text-[145px]!'>
        {t('name1')} <br />
        {t('name2')}
      </h2>
    </section>
  );
};

export default FooterCompanyName;
