import { Link } from 'react-router-dom';

function Button({ url, type, value, width, disabled, onClick }) {
  const btnPrimary = 'text-white bg-orange lg:hover:bg-lightOrange active:scale-95';
  const btnSecondary = 'text-white bg-darkGray lg:hover:bg-[#4C4C4C] active:scale-95';
  const btnInvert = 'text-darkGray bg-transparent border-2 border-darkGray lg:hover:bg-darkGray lg:hover:text-white active:scale-95';
  const btnDisabled = 'opacity-50 cursor-not-allowed pointer-events-none';

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to={disabled ? '#' : url}
      onClick={handleClick}
      className={`inline-block text-center uppercase font-bold text-sm tracking-wider transition-all duration-200 ${width === '100%' ? 'w-full' : 'w-40'} py-4 ${type === 'secondary' ? btnSecondary : type === 'invert' ? btnInvert : btnPrimary} ${disabled ? btnDisabled : ''}`}
      aria-disabled={disabled}
    >
      {value}
    </Link>
  );
}

export default Button;
