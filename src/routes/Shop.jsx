import { useSelector } from 'react-redux';
import { selectCategories, selectIsLoading } from '../selectors/categoriesSelector';
import ProductList from '../components/ProductList'
import Spinner from '../components/shared/spinner/Spinner';
import CategoriesCards from '../components/CategoriesCards';
import About from '../components/About';
import Footer from '../components/Footer';

function Shop({ categoryName }) {
  const isLoading = useSelector(selectIsLoading);
  const categories = useSelector(selectCategories);
  const category = categories.find(category => category.category === categoryName);
  let sortedItems;

  if (!isLoading && category) {
    sortedItems = [...category.items].sort((a, b) => b.new - a.new);
  }

  return (
    <>
      <header className='bg-darkGray px-20 py-8 text-center'>
        <h1 className='uppercase text-2xl text-white font-bold tracking-widest'>{categoryName}</h1>
      </header>
      <main className='bg-offWhite pt-16 px-6 md:pt-xl md:px-10 lg:pt-40 lg:px-2xl'>
        <article className={isLoading ? 'flex flex-col justify-center' : ''}>
          {isLoading ? <Spinner /> : category && <ProductList items={sortedItems} />}
          <section className='my-xl lg:my-2xl'>
            <CategoriesCards
              flexDirection='flex-col md:flex-row'
              gap='gap-y-[70px] md:gap-x-2.5 lg:gap-x-[30px]'
              paddingX='px-0'
              paddingY='pt-12 pb-0 md:pt-11 md:pb-0'
            />
          </section>
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Shop;
