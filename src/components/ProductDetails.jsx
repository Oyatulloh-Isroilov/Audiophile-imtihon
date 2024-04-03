import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCategories, selectIsLoading } from '../selectors/categoriesSelector';
import Button from './Button';
import Spinner from './shared/spinner/Spinner';
import AddToCart from './AddToCart';
import CategoriesCards from './CategoriesCards';
import About from './About';
import Footer from './Footer';

function ProductDetails() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const product = categories
    .map(category => category.items.find(item => item.slug == productSlug))
    .find(item => item);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <main className='px-6 pt-4 md:px-10 md:pt-8 lg:pt-20 lg:px-2xl relative'>
        <button onClick={() => navigate(-1)} className='text-gray text-base font-medium lg:hover:text-orange'>Go Back</button>
        {isLoading ? (
          <Spinner />
        ) : (
          product && (
            <article className='pt-6 lg:pt-14'>
              <section className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-xl md:items-center'>
                <div className='rounded-md overflow-hidden mb-8'>
                  <picture>
                    <source media='(max-width: 767px)' srcSet={product.image.mobile} />
                    <source media='(max-width: 1199px)' srcSet={product.image.tablet} />
                    <img src={product.image.desktop} alt={product.slug} />
                  </picture>
                </div>
                <div className='lg:max-w-[445.5px]'>
                  {product.new && (
                    <p className='uppercase text-[14px] md:text-xs lg:text-[14px] text-orange tracking-xl mb-6 md:mb-4'>New product</p>
                  )}
                  <h1 id='label' className='text-2xl lg:text-5xl tracking-wide font-bold leading-tight uppercase'>{product.name}</h1>
                  <p className='my-6 md:my-8 leading-6 font-medium text-gray'>{product.description}</p>
                  <h2 className='text-lg font-bold mb-8'>${product.price.toLocaleString('en-US')} </h2>
                  <AddToCart product={product} />
                </div>
              </section>
              <section className='my-lg lg:my-2xl lg:grid lg:grid-cols-[3fr,_2fr] lg:gap-x-xl'>
                <div className='mb-lg lg:mb-0'>
                  <h3 className='text-xl lg:text-3xl font-bold mb-6 lg:mb-8 uppercase'>Features</h3>
                  <p className='leading-6 font-medium text-gray'>{product.features}</p>
                </div>
                <div className='md:grid md:grid-cols-2 lg:flex lg:flex-col'>
                  <h3 className='text-xl lg:text-3xl font-bold mb-6 lg:mb-8 uppercase'>In the box</h3>
                  <ul>
                    {product.includes.map(item => (
                      <li key={item.item} className='grid grid-cols-[25px,_1fr] gap-4 text-gray mb-3'>
                        <span className='text-orange font-bold'>{item.quantity}x</span>
                        {item.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className='flex flex-col gap-5 mb-xl lg:mb-2xl md:grid md:grid-cols-[2fr,_3fr] md:grid-rows-2'>
                <div className='rounded-md overflow-hidden'>
                  <picture>
                    <source media='(max-width: 767px)' srcSet={product.gallery.first.mobile} />
                    <source media='(max-width: 1199px)' srcSet={product.gallery.first.tablet} />
                    <img src={product.gallery.first.desktop} alt={product.slug} className='md:h-full' />
                  </picture>
                </div>
                <div className='rounded-md overflow-hidden md:row-start-2'>
                  <picture>
                    <source media='(max-width: 767px)' srcSet={product.gallery.second.mobile} />
                    <source media='(max-width: 1199px)' srcSet={product.gallery.second.tablet} />
                    <img src={product.gallery.second.desktop} alt={product.slug} className='md:h-full' />
                  </picture>
                </div>
                <div className='rounded-md overflow-hidden md:row-span-full md:col-start-2'>
                  <picture>
                    <source media='(max-width: 767px)' srcSet={product.gallery.third.mobile} />
                    <source media='(max-width: 1199px)' srcSet={product.gallery.third.tablet} />
                    <img src={product.gallery.third.desktop} alt={product.slug} className='md:w-full' />
                  </picture>
                </div>
              </section>
              <section className='text-center mb-[70px]'>
                <h3 className='text-xl lg:text-3xl font-bold mb-10 md:mb-14 lg:mb-16 uppercase'>
                  You may also like
                </h3>
                <div className='md:flex md:flex-row md:gap-3 lg:gap-[30px]'>
                  {product.others.map(item => (
                    <div key={item.name} className='flex flex-col items-center gap-8 mb-14 md:mb-0'>
                      <div className='rounded-md overflow-hidden'>
                        <picture>
                          <img src={item.image.desktop} alt={item.slug} />
                        </picture>
                      </div>
                      <h4 className='text-xl font-bold'>{item.name}</h4>
                      <Button url={`/products/${item.slug}`} value='see product' />
                    </div>
                  ))}
                </div>
              </section>
              <section className='my-xl lg:my-2xl'>
                <CategoriesCards flexDirection='flex-col md:flex-row' gap='gap-y-[70px] md:gap-x-2.5 lg:gap-x-[30px]' paddingX='px-0' paddingY='pt-24 pb-0 md:pt-11' />
              </section>
            </article>
          )
        )}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default ProductDetails;
