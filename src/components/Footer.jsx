import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './shared/Logo';
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'

function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    const today = new Date();
    const getYear = today.getFullYear();
    setYear(getYear);
  }, []);

  return (
    <footer className='bg-darkGray pt-14 md:pt-16 pb-10 md:pb-12 px-6 md:px-10 lg:px-[165px] text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-9 lg:gap-x-4 justify-items-center md:justify-items-start relative before:absolute before:top-0 before:left-1/2 md:before:left-10 lg:before:left-[165px] before:-translate-x-1/2 md:before:-translate-x-0 before:w-[101px] before:h-1 before:bg-orange'>
      <Logo />
      <div className='text-white uppercase font-bold text-sm md:text-[13px] tracking-lg flex flex-col md:flex-row gap-4 md:gap-8 md:col-span-full lg:col-start-2 lg:justify-self-end'>
        <Link to='/' className='lg:hover:text-orange'>Home</Link>
        <Link to='/headphones' className='lg:hover:text-orange'>Headphones</Link>
        <Link to='/speakers' className='lg:hover:text-orange'>Speakers</Link>
        <Link to='/earphones' className='lg:hover:text-orange'>Earphones</Link>
      </div>
      <p className='text-lightGray/50 leading-6 font-medium md:col-span-full lg:col-end-2 lg:mb-5'> Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      <p className='text-lightGray/50 font-bold'>Copyright {year}. All Rights Reserved</p>
      <div className='flex gap-4 items-center md:justify-self-end lg:col-start-2 lg:row-start-2'>
        <Link to='https://www.facebook.com' aria-label='facebook'>
          <img src={facebook} alt="facebook" />
        </Link>
        <Link to='https://www.twitter.com' aria-label='twitter'>
          <img src={twitter} alt="twitter" />
        </Link>
        <Link to='https://www.instagram.com' aria-label='instagram'>
          <img src={instagram} alt="instagram" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
