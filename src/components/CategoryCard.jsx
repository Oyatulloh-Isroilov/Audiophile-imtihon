import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../slices/useWindowDimensions';
import opened from '../assets/images/opened.svg'

function CategoryCard({ image, url, title }) {
  const { width } = useWindowDimensions();

  function handleClick() {
    if (width <= 768) {
      setIsMenuOpen(false);
    }
  }

  return (
    <Link to={url} onClick={handleClick} className='h-[165px] lg:h-[204px] bg-lightGray w-full rounded-md pb-6 flex flex-col justify-end items-center relative text-center group'>
      <div className='absolute -top-2/3 left-1/2 translate-y-1/2 -translate-x-1/2 w-36 lg:w-48'>
        <img src={image} className='mb-[-120px]' />
      </div>
      <h2 className='uppercase text-base lg:text-lg tracking-wide font-bold mb-4'>{title}</h2>
      <p className='text-sm font-bold opacity-60 flex items-center justify-center gap-3 lg:group-hover:text-orange'>SHOP{' '}
        <img src={opened} alt="opened" />
      </p>
    </Link>
  );
}

export default CategoryCard;
