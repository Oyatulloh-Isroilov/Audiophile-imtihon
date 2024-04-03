import errorIcon from '../assets/images/error404.png';
import Footer from './Footer';

function Error() {
  return (
    <>
      <div className='flex flex-col gap-y-4 items-center justify-center min-h-screen'>
        <img src={errorIcon} alt='Page not found' width='350' className='lg:w-[400px]' />
        <h1 className='text-lg text-darkGray font-bold'>Page Not Found</h1>
      </div>
      <Footer />
    </>
  );
}

export default Error;
