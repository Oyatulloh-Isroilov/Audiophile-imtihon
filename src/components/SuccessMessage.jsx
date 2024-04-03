import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../selectors/cartSelector';
import { clearCart } from '../slices/cartSlice';
import SummaryItem from './SummaryItem';

function SuccessMessage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const grandTotal = Math.round(cartTotal * 1.2 + 50);
  const [showAll, setShowAll] = useState(false);
  const otherItems = cartItems.slice(1);

  return (
    <div className='h-[calc(100%_-_95px)] absolute top-[89px] lg:top-[93px] left-0 right-0 z-20 bg-[rgba(0,_0,_0,_0.65)] flex items-start justify-center'>
      <article className='flex flex-col gap-y-6 md:gap-y-8 bg-offWhite shadow-blurred rounded-md mx-6 mt-32 lg:mt-14 p-8 md:p-12 md:max-w-[540px] lg:w-[540px]'>
        <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <circle fill='#D87D4A' cx='32' cy='32' r='32' />
            <path stroke='#FFF' strokeWidth='4' d='m20.754 33.333 6.751 6.751 15.804-15.803' />
          </g>
        </svg>
        <h1 className='text-black font-bold text-xl md:text-3xl uppercase'>THANK YOU<br />FOR YOUR ORDER</h1>
        <p className='text-gray text-base font-medium -mt-3'>You will receive an email confirmation shortly.</p>
        <section className='md:grid md:grid-cols-[4fr,_3fr] md:grid-rows-[auto,_auto] md:mb-3'>
          <div className={`bg-lightGray px-6 py-4 rounded-t-md md:rounded-tr-none flex flex-col gap-y-4 col-start-1 row-start-1 ${cartItems.length === 1 ? 'row-end-3 justify-center' : ''}`}>
            <SummaryItem item={cartItems[0]} />
            {showAll && otherItems.map(item => <SummaryItem key={item.id} item={item} />)}
          </div>
          {cartItems.length > 1 ? (
            <div className='bg-lightGray px-6 text-center md:row-start-2 md:rounded-bl-md'>
              <button onClick={() => setShowAll(prevValue => !prevValue)} className='w-full p-6 border-t border-t-gray/20 bg-transparent outline-none focus-visible:outline focus-visible:outline-gray text-gray text-xs font-bold lg:hover:text-orange'> {showAll ? 'View less' : `and ${cartItems.length - 1} other item(s)`} </button>
            </div>
          ) : null}
          <div className={`bg-darkGray rounded-b-md p-6 md:px-8 md:py-10 md:row-span-full md:rounded-bl-none md:rounded-r-md md:flex md:flex-col ${showAll ? 'md:justify-end' : 'md:justify-center'}`} >
            <h2 className='uppercase text-lightGray/50 text-base font-medium mb-3'>Grand total</h2>
            <h3 className='text-white text-lg font-bold'>${grandTotal.toLocaleString('en-US')}</h3>
          </div>
        </section>
        <Link to='/' onClick={() => dispatch(clearCart())} className='w-full py-4 text-white bg-orange text-center uppercase font-bold text-sm tracking-wider lg:hover:bg-lightOrange' > Back to home </Link>
      </article>
    </div>
  );
}

export default SuccessMessage;
