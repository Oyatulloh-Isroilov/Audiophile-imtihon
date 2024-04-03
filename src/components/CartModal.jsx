import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../selectors/cartSelector';
import { clearCart } from '../slices/cartSlice';
import CartItem from './CartItem';
import Button from './Button';

function CartModal() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length < 1 && pathname === '/checkout') {
      navigate('/');
    }
  }, [cartItems.length]);

  return (
    <article className='bg-offWhite shadow-blurred rounded-md m-6 md:ml-auto md:mr-10 lg:mt-8 lg:mr-[165px] py-8 px-7 md:max-w-[377px]'>
      <section className='grid grid-cols-2 gap-y-8 justify-between mb-6'>
        <h2 className='uppercase text-lg font-bold tracking-wider text-black'>CART ({cartItems.length})</h2>
        <button onClick={() => dispatch(clearCart())} disabled={!cartItems.length} className='text-gray font-medium text-right bg-transparent border-none lg:hover:text-orange lg:disabled:text-gray/50'> Remove all</button>
        <section className='col-span-full flex flex-col gap-6'>
          {cartItems.length > 0 ? (
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          ) : (
            <h3 className='text-black font-bold text-center'>Your cart is empty.</h3>
          )}
        </section>
        {cartItems.length > 0 ? (
          <>
            <h4 className='uppercase text-gray text-base font-medium'>Total</h4>
            <h4 className='text-black text-lg font-bold text-right'>${cartTotal.toLocaleString('en-US')}</h4>
          </>
        ) : null}
      </section>
      <Button url='/checkout' value='checkout' width='100%' disabled={!cartItems.length} />
    </article>
  );
}

export default CartModal;
