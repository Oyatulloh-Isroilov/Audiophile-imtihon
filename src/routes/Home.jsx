import useWindowDimensions from '../slices/useWindowDimensions';
import { newProduct, featuredProducts } from '../constants';
import About from '../components/About';
import Button from '../components/Button';
import CategoriesCards from '../components/CategoriesCards';
import Footer from '../components/Footer';

function Home() {
  const { width } = useWindowDimensions();

  const backgroundImg =
    width < 768
      ? featuredProducts[1].image.mobile
      : width < 1200
        ? featuredProducts[1].image.tablet
        : featuredProducts[1].image.desktop;

  return (
    <>
      <header className='h-[512px] md:h-[640px] lg:h-[632px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-6 lg:px-2xl bg-hero-image-sm md:bg-hero-image-md lg:bg-hero-image-lg bg-cover bg-bottom'>
        <p className='uppercase text-[14px] text-lightGray/50 tracking-xl -mb-3'>New product</p>
        <h1 className='uppercase text-4xl md:text-6xl text-white font-bold tracking-wider leading-tight mt-4 mb-5 md:my-6 max-w-xs md:max-w-xl'>{newProduct.name}</h1>
        <p className='text-white leading-6 mb-7 md:mb-10 max-w-xs md:max-w-[350px]'>{newProduct.description}</p>
        <Button url={newProduct.url} value='see product' />
      </header>
      <main className='mt-10 md:mt-24 lg:mt-xl px-6 md:px-10 lg:px-2xl lg:mb-[60px] items-stretch'>
        <article>
          <section className='mb-xl md:mb-24 lg:mb-[168px]'>
            <CategoriesCards flexDirection='flex-col md:flex-row' gap='gap-y-[70px] md:gap-x-2.5 lg:gap-x-[30px]' paddingX='px-0' paddingY='pt-12 pb-0 md:pt-11 md:pb-0' />
          </section>
          <section className='bg-orange overflow-hidden text-center lg:text-left rounded-md bg-pattern-circles bg-no-repeat bg-[center_bottom_8rem] md:bg-[center_bottom_4rem] lg:bg-[left_-50%_top_-3rem] bg-cover md:bg-auto flex lg:grid flex-col items-center lg:grid-cols-2 lg:gap-x-16 xl:gap-x-36 py-14 md:pb-16 lg:py-24 px-6 mb-6 md:mb-8 lg:mb-12'>
            <div className='w-40 md:w-48 lg:w-[340px] lg:-mb-32 lg:justify-self-end'>
              <img src={featuredProducts[0].image.desktop} alt='' />
            </div>
            <div className=''>
              <h3 className='text-white text-4xl md:text-6xl font-bold leading-tight mt-8 lg:mt-0 md:mt-16 w-56 md:w-80 mx-auto lg:mx-0'>{featuredProducts[0].name}</h3>
              <p className='text-lightGray leading-6 my-6 md:mb-10 max-w-xs'>{featuredProducts[0].description}</p>
              <Button url={featuredProducts[0].url} type='secondary' value='see product' />
            </div>
          </section>
          <section style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className='h-80 mb-6 md:mb-8 lg:mb-12 rounded-md overflow-hidden flex items-center'>
            <div className='px-6 md:px-16 lg:px-24'>
              <h3 className='text-darkGray text-2xl font-bold leading-tight mb-8'>{featuredProducts[1].name}</h3>
              <Button url={featuredProducts[1].url} type='invert' value='see product' />
            </div>
          </section>
          <section className='mb-xl md:mb-24 lg:mb-[200px] md:grid md:grid-cols-2 md:gap-3 lg:gap-8'>
            <div className='rounded-md overflow-hidden'>
              <img src={featuredProducts[2].image.desktop} alt='' className='md:w-full' />
            </div>
            <div className='px-6 md:px-10 lg:px-24 py-10 md:h-full md:flex md:flex-col md:justify-center bg-lightGray rounded-md mt-6 md:mt-0'>
              <h3 className='text-darkGray text-2xl font-bold leading-tight mb-8'>{featuredProducts[2].name}</h3>
              <Button url={featuredProducts[2].url} type='invert' value='see product' />
            </div>
          </section>
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
