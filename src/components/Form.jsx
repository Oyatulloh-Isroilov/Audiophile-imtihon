import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../selectors/cartSelector';
import shared from '../assets/images/shared.svg'
import SummaryItem from './SummaryItem';

function Form({ setIsSuccessful }) {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', zip: '', city: '', country: '', payment: 'card', number: '', pin: '',
  });
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);

  function style(error) {
    if (error) {
      return 'invalid:outline-none invalid:border-red';
    }
  }

  const handleBlur = event => {
    if (!error) {
      if (!event.target.validity.valid) {
        setError(true);
        setShowErrorText(true);
      }
    }
    if (error) {
      setShowErrorText(false);
    }
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (name === 'email') {
      const isValid = event.target.validity.valid;
      if (error) {
        if (isValid) {
          setError(false);
          setShowErrorText(false);
        }
      }
    }
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  const handleFocus = () => {
    if (error) {
      setShowErrorText(true);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
    setIsSuccessful(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='lg:grid lg:grid-cols-[2fr,_1fr] items-start gap-y-9 gap-x-8 w-full'
    >
      <article className='mt-6 lg:mt-0 mb-8 rounded-md bg-white pt-6 pb-8 px-6 md:px-7 md:py-8 lg:px-12 lg:pt-14 lg:pb-12 w-full shadow-sm'>
        <h1 className='text-2xl uppercase text-black font-bold tracking-wider'>Checkout</h1>
        <section className='pt-8 md:pt-10 flex flex-col md:grid md:grid-cols-2 md:gap-x-4'>
          <h2 className='uppercase text-orange font-bold text-sm tracking-widest md:col-span-full'>Billing details</h2>
          <label className='mt-6 text-xs font-bold text-black flex flex-col'> Name
            <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='Alexei Ward' type='text' name='name' id='name' value={formData.name} onChange={handleChange} required />
          </label>
          <label className='relative mt-6 text-xs font-bold text-black flex flex-col'>
            Email Address
            <input className={`mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none`} placeholder='alexei@mail.com' type='email' name='email' id='email' value={formData.email} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} required />
            {showErrorText && (
              <p role='alert' className='absolute top-0 right-0 text-xs text-red font-medium'>Wrong format</p>
            )}
          </label>
          <label className='mt-6 text-xs font-bold text-black flex flex-col'>Phone Number<input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='+1 202-555-0136' type='tel' name='phone' id='phone' value={formData.phone} onChange={handleChange} required />
          </label>
        </section>
        <section className='pt-8 md:pt-14 flex flex-col md:grid md:grid-cols-2 md:gap-x-4'>
          <h2 className='uppercase text-orange font-bold text-sm tracking-widest md:col-span-full'>Shipping info</h2>
          <label className='mt-6 text-xs font-bold text-black flex flex-col md:col-span-full'>Your Address
            <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='1137 Williams Avenue' type='text' name='address' id='address' value={formData.address} onChange={handleChange} required />
          </label>
          <label className='mt-6 text-xs font-bold text-black flex flex-col'>ZIP Code
            <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='10001' type='number' name='zip' id='zip' value={formData.zip} onChange={handleChange} required />
          </label>
          <label className='mt-6 text-xs font-bold text-black flex flex-col'>
            City
            <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='New York' type='text' name='city' id='city' value={formData.city} onChange={handleChange} required />
          </label>
          <label className='mt-6 text-xs font-bold text-black flex flex-col'>Country
            <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='United States' type='text' name='country' id='country' value={formData.country} onChange={handleChange} required />
          </label>
        </section>
        <section className='pt-8 md:pt-16 flex flex-col md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4'>
          <h2 className='uppercase text-orange font-bold text-sm tracking-widest md:col-span-full'> Payment details</h2>
          <h3 className='mt-6 md:mt-0 text-xs font-bold text-black md:row-start-2 md:row-end-3'> Payment method</h3>
          <label
            className={`border ${formData.payment === 'card' ? 'border-orange' : 'border-gray/20 '
              } font-bold text-black text-[14px] mt-4 md:mt-0 w-full rounded-md py-[18px] px-4 flex items-center gap-x-4 md:col-start-2 md:row-start-2 lg:hover:cursor-pointer lg:hover:border-orange`}>
            <input className='accent-orange' type='radio' name='payment' id='card' value='card' checked={formData.payment === 'card'} onChange={handleChange} selected />e-Money
          </label>
          <label
            className={`border ${formData.payment === 'cash' ? 'border-orange' : 'border-gray/20 '
              } font-bold text-black text-[14px] mt-4 md:mt-0 w-full rounded-md py-[18px] px-4 flex items-center gap-x-4 md:col-start-2 lg:hover:cursor-pointer lg:hover:border-orange`}
          >
            <input className='accent-orange' type='radio' name='payment' id='cash' value='cash' checked={formData.payment === 'cash'} onChange={handleChange}
            />
            Cash on Delivery
          </label>
          {formData.payment === 'card' ? (
            <>
              <label className='mt-8 md:mt-2 text-xs font-bold text-black flex flex-col justify-start'>
                e-money Number
                <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='238521993' type='number' name='number' id='number' required
                />
              </label>
              <label className='mt-6 md:mt-2 text-xs font-bold text-black flex flex-col justify-start'>
                e-money PIN
                <input className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none' placeholder='6891' type='number' name='pin' id='pin' required
                />
              </label>
            </>
          ) : (
            <div className='grid grid-cols-[auto,_1fr] md:items-center gap-x-4 md:gap-x-8 mt-8 md:mt-4 md:col-span-full'>
              <img src={shared} alt="" />
              <p className='text-gray font-medium leading-6'>The Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
          )}
        </section>
      </article>

      <article className='rounded-md bg-white py-8 px-6 md:px-7 md:py-8 lg:px-8 w-full shadow-sm flex flex-col gap-y-8 justify-between'>
        <h2 className='uppercase text-lg font-bold tracking-wider text-black'>Summary</h2>
        <section className='col-span-full flex flex-col gap-6'>
          {cartItems.map(item => (
            <SummaryItem key={item.id} item={item} />
          ))}
        </section>
        <section className='flex flex-col gap-y-2'>
          <div className='flex justify-between'>
            <h4 className='uppercase text-gray text-base font-medium'>Total</h4>
            <h4 className='text-black text-lg font-bold text-right'>
              $ {cartTotal.toLocaleString('en-US')}
            </h4>
          </div>
          <div className='flex justify-between'>
            <h4 className='uppercase text-gray text-base font-medium'>Shipping</h4>
            <h4 className='text-black text-lg font-bold text-right'>$ 50</h4>
          </div>
          <div className='flex justify-between'>
            <h4 className='uppercase text-gray text-base font-medium'>VAT (included)</h4>
            <h4 className='text-black text-lg font-bold text-right'>${Math.round(cartTotal * 0.2).toLocaleString('en-US')}</h4>
          </div>
          <div className='flex justify-between mt-4'>
            <h4 className='uppercase text-gray text-base font-medium'>Grand total</h4>
            <h4 className='text-orange text-lg font-bold text-right'>${Math.round(cartTotal * 1.2 + 50).toLocaleString('en-US')}</h4>
          </div>
        </section>
        <button className='text-white py-4 bg-orange lg:hover:bg-lightOrange text-center uppercase font-bold text-sm tracking-wide w-full'>continue & pay</button>
      </article>
    </form>
  );
}

export default Form;
