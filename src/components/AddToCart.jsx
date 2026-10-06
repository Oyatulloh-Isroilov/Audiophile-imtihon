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

  function handleAddToCart() {
    dispatch(addItemToCart({ productToAdd: product, quantityToAdd: quantity }));
    setQuantity(1); // Reset quantity after adding
  }

  return (
    <div className='flex justify-between lg:justify-start gap-4'>
      <div className='bg-lightGray flex font-bold text-sm rounded overflow-hidden'>
        <button
          onClick={decreaseItem}
          disabled={quantity <= 1}
          aria-label='Decrease item by 1'
          className='bg-transparent p-4 text-gray/50 lg:hover:text-orange lg:hover:bg-gray/5 active:text-orange active:scale-95 lg:cursor-pointer transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed'
        >
          -
        </button>
        <span className='text-darkGray p-4 min-w-[3rem] text-center'>{quantity}</span>
        <button
          onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
          aria-label='Increase item by 1'
          className='bg-transparent p-4 text-gray/50 lg:hover:text-orange lg:hover:bg-gray/5 active:text-orange active:scale-95 lg:cursor-pointer transition-all duration-150'
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        aria-labelledby='label'
        className='bg-orange w-full lg:w-40 text-white text-sm font-bold uppercase transition-all duration-200 lg:hover:bg-lightOrange lg:hover:shadow-lg active:bg-lightOrange active:scale-95 lg:cursor-pointer rounded'
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
