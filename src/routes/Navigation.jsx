import { useContext, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useWindowDimensions from '../slices/useWindowDimensions';
import { setIsCartOpen, setIsPopupVisible } from '../slices/cartSlice';
import Logo from '../components/shared/Logo';
import cartIcon from '../assets/images/cart.svg';
import CartModal from '../components/CartModal';
import CategoriesCards from '../components/CategoriesCards';
import {
  selectCartItems,
  selectIsCartOpen,
  selectIsPopupVisible,
} from '../selectors/cartSelector';


function Navigation() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const isPopupVisible = useSelector(selectIsPopupVisible);
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0 && !isCartOpen) {
      dispatch(setIsPopupVisible(true));
      setTimeout(() => {
        dispatch(setIsPopupVisible(false));
      }, 4000);
    }
  }, [cartItems.length]);

  return (
    <>
      <nav className='bg-darkGray flex justify-between md:justify-start lg:justify-between items-center md:gap-10 py-8 lg:pb-9 px-6 md:px-10 lg:px-2xl'>
        {width < 1200 ? (
          <button
            className='lg:hover:cursor-pointer transition-transform hover:scale-110'
            onClick={() => setIsMenuOpen(prevState => !prevState)}
            aria-label='Toggle menu'
          >
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/>
              </g>
            </svg>
          </button>
        ) : null}
        <Link to='/' aria-label='Home' className='transition-transform hover:scale-105'>
          <Logo />
        </Link>
        {width >= 1200 ? (
          <div className='text-white uppercase font-bold text-sm tracking-lg flex gap-8'>
            <Link to='/' className='hover:text-orange transition-colors duration-200'>
              Home
            </Link>
            <Link to='/headphones' className='hover:text-orange transition-colors duration-200'>
              Headphones
            </Link>
            <Link to='/speakers' className='hover:text-orange transition-colors duration-200'>
              Speakers
            </Link>
            <Link to='/earphones' className='hover:text-orange transition-colors duration-200'>
              Earphones
            </Link>
          </div>
        ) : null}
        <div className='lg:w-36 md:ml-auto lg:ml-0'>
          <button
            onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
            className='lg:cursor-pointer md:ml-auto transition-transform hover:scale-110 relative'
            aria-label='Toggle cart'
          >
            <img src={cartIcon} alt='Cart' />
            {cartItems.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && width < 1200 && (
        <div className='fixed inset-0 top-[89px] z-30 bg-black/50 animate-fadeIn' onClick={() => setIsMenuOpen(false)}>
          <div className='bg-white rounded-b-lg px-6 py-8 animate-slideDown' onClick={(e) => e.stopPropagation()}>
            <CategoriesCards
              flexDirection='flex-col'
              gap='gap-y-16'
              paddingX='px-0'
              paddingY='py-0'
              onMenuClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className='h-[calc(100%_-_95px)] absolute top-[89px] lg:top-[93px] left-0 right-0 z-20 bg-[rgba(0,_0,_0,_0.65)] animate-fadeIn' onClick={() => dispatch(setIsCartOpen(false))}>
          <div onClick={(e) => e.stopPropagation()}>
            <CartModal />
          </div>
        </div>
      )}
      {isPopupVisible && (
        <div className='fixed top-4 md:top-[89px] right-0 w-full md:w-auto z-20 animate-slideDown'>
          <CartModal />
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Navigation;
