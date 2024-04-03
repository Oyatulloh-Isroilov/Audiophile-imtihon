import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Footer from '../components/Footer';
import SuccessMessage from '../components/SuccessMessage';

function Checkout() {
  const navigate = useNavigate();
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
    <>
      <main className='px-6 pt-4 pb-24 md:px-10 md:pt-12 md:pb-28 lg:pt-20 lg:pb-36 lg:px-2xl'>
        {isSuccessful && <SuccessMessage />}
        <button
          onClick={() => navigate(-1)}
          className='text-gray text-base font-medium lg:mb-9 lg:hover:text-orange lg:col-span-full lg:justify-self-start'
        >
          Go Back
        </button>
        <Form setIsSuccessful={setIsSuccessful} />
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
