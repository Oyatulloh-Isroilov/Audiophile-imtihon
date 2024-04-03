import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../slices/cartSlice';

function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function decreaseItem() {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  return (
    <div className='flex justify-between lg:justify-start gap-4'>
      <div className='bg-lightGray flex font-bold text-sm'>
        <button onClick={decreaseItem} aria-label='Decrease item by 1' className='bg-transparent p-4 text-gray/50 lg:hover:text-orange active:text-orange lg:cursor-pointer'>-
        </button>
        <span className='text-darkGray p-4'>{quantity}</span>
        <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} aria-label='Increase item by 1' className='bg-transparent p-4 text-gray/50 lg:hover:text-orange active:text-orange lg:cursor-pointer'>+</button>
      </div>
      <button
        onClick={() => dispatch(addItemToCart({ productToAdd: product, quantityToAdd: quantity }))}
        aria-labelledby='label'
        className='bg-orange w-full lg:w-40 text-white text-sm font-bold uppercase transition-all lg:hover:bg-lightOrange active:bg-lightOrange active:scale-95 lg:cursor-pointer'
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
