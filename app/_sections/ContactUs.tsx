import React from 'react';

const ContactUs = () => {
  return (
    <section id='contactUs' className='section px-5'>
      <h2 className='section__title text-[80px]! md:text-[120px]!'>تواصل معنا CONTACT US</h2>
      <p className='text-secondary font-bold  text-center mb-10'>ابدأ خطوتك الأولى نحو مشروع ناجح—تواصل معنا اليوم.</p>
      <form className=' mx-auto py-5 px-5 md:px-20 max-w-300 flex flex-col justify-center items-center bg-[#204C4C]/40 border-2 border-secondary rounded-4xl' action=''>
        <div className='flex flex-col md:flex-row w-full gap-x-10 mb-7'>
          <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='name'>
            <span className='font-bold'>الاسم</span>
            <input required placeholder='اكتب اسم الكامل' name='name' className='bg-[#204C4C]/40 h-12 border border-secondary rounded-xl  placeholder:text-[22px]! p-2 ' />
          </label>
          <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='email'>
            <span className='font-bold'> الايميل</span> <input type='email' required name='email' placeholder='اكتب بريدك الالكتروني ' className='bg-[#204C4C]/40 h-12  border border-secondary rounded-xl placeholder:text-[22px]! p-2' />
          </label>
        </div>
        <label className='text-secondary w-full flex gap-y-2 flex-col' htmlFor='details'>
          <span className='font-bold'>تفاصيل</span>
          <textarea required className='bg-[#204C4C]/40 min-h-50 border border-secondary rounded-xl placeholder:text-[22px]! p-2' placeholder='اكتب تفاصيل مشروعك' name='details'></textarea>
        </label>
        <button className='mt-5 py-2 w-full rounded-2xl  bg-primary'>ارسال</button>
      </form>
    </section>
  );
};

export default ContactUs;
