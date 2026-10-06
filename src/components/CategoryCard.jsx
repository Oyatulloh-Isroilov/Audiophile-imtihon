import { Link } from 'react-router-dom';
import opened from '../assets/images/opened.svg'

function CategoryCard({ image, url, title, onMenuClose }) {
  const handleClick = () => {
    if (onMenuClose) {
      onMenuClose();
    }
  };

  return (
    <Link
      to={url}
      onClick={handleClick}
      className='h-[165px] lg:h-[204px] bg-lightGray w-full rounded-md pb-6 flex flex-col justify-end items-center relative text-center group transition-all duration-300 hover:shadow-lg hover:scale-105'
    >
      <div className='absolute -top-2/3 left-1/2 translate-y-1/2 -translate-x-1/2 w-36 lg:w-48 transition-transform duration-300 group-hover:scale-110'>
        <img src={image} className='mb-[-120px]' alt={title} />
      </div>
      <h2 className='uppercase text-base lg:text-lg tracking-wide font-bold mb-4 transition-colors duration-200'>{title}</h2>
      <p className='text-sm font-bold opacity-60 flex items-center justify-center gap-3 lg:group-hover:text-orange transition-all duration-200'>
        SHOP{' '}
        <img src={opened} alt="Arrow" className='transition-transform duration-200 group-hover:translate-x-1' />
      </p>
    </Link>
  );
}

export default CategoryCard;
