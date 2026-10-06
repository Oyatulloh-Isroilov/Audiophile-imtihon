import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../slices/cartSlice';
import { useState } from 'react';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const addToCart = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch(addItemToCart({ productToAdd: item, quantityToAdd: quantity }));
  };

  const removeFromCart = () => {
    setQuantity(prevQuantity => prevQuantity - 1);
    dispatch(removeItemFromCart(item));
  };

  return (
    <div className='grid grid-cols-[auto,_1fr,_96px] items-center gap-x-4 animate-slideUp'>
      <div className='rounded-md overflow-hidden w-16 hover:scale-105 transition-transform duration-200'>
        <img className='w-full' src={item.image.mobile} alt={item.name} />
      </div>
      <div>
        <h3 className='text-black text-base font-bold'>{item.name.split(' ')[0]}</h3>
        <p className='text-gray/60 text-[14px] font-bold'>$ {item.price.toLocaleString('en-US')}</p>
      </div>
      <div className='bg-lightGray flex font-bold text-sm w-24 h-8 item-center rounded overflow-hidden'>
        <button
          onClick={removeFromCart}
          disabled={quantity <= 1}
          className='bg-transparent flex-1 py-2 text-gray/50 lg:hover:text-orange lg:hover:bg-gray/5 active:text-orange active:scale-95 lg:cursor-pointer transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed'
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className='text-darkGray flex-1 py-2 text-center'>{quantity}</span>
        <button
          onClick={addToCart}
          className='bg-transparent flex-1 py-2 text-gray/50 lg:hover:text-orange lg:hover:bg-gray/5 active:text-orange active:scale-95 lg:cursor-pointer transition-all duration-150'
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
