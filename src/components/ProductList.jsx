import ProductCard from './ProductCard';

function ProductList({ items }) {
  return (
    <section>
      {items.map(item => (
        <ProductCard key={item.id} slug={item.slug} isNew={item.new} name={item.name} image={item.categoryImage} description={item.description}/>
      ))}
    </section>
  );
}

export default ProductList;
