import { useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useWindowDimensions from '../slices/useWindowDimensions';
import { setIsCartOpen, setIsPopupVisible } from '../slices/cartSlice';
import Logo from '../components/shared/Logo';
import cartIcon from '../assets/images/cart.svg';
import CartModal from '../components/CartModal';
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
          <div className='lg:hover:cursor-pointer' onClick={() => setIsMenuOpen(prevState => !prevState)}>
            {/* <img src={menuIcon} alt='Menu'/> */}
          </div>
        ) : null}
        <Link to='/' aria-label='Home'>
          <Logo />
        </Link>
        {width >= 1200 ? (
          <div className='text-white uppercase font-bold text-sm tracking-lg flex gap-8'>
            <Link to='/' className='hover:text-orange'>
              Home
            </Link>
            <Link to='/headphones' className='hover:text-orange'>
              Headphones
            </Link>
            <Link to='/speakers' className='hover:text-orange'>
              Speakers
            </Link>
            <Link to='/earphones' className='hover:text-orange'>
              Earphones
            </Link>
          </div>
        ) : null}
        <div className='lg:w-36 md:ml-auto lg:ml-0'>
          <img
            onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
            className='lg:cursor-pointer md:ml-auto'
            src={cartIcon}
            alt='Cart'
          />
        </div>
      </nav>
      {isCartOpen && (
        <div className='h-[calc(100%_-_95px)] absolute top-[89px] lg:top-[93px] left-0 right-0 z-20 bg-[rgba(0,_0,_0,_0.65)]'>
          <CartModal />
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
