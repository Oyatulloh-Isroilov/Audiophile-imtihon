import Button from './Button';

function ProductCard({ slug, isNew, image, name, description }) {
  return (
    <div className='product-card mb-xl lg:mb-2xl text-center lg:grid lg:grid-cols-2 gap-x-xl items-center lg:text-left'>
      <div className='product-card-img rounded-md overflow-hidden mb-8 lg:mb-0'>
        <picture>
          <source media='(max-width: 767px)' srcSet={image.mobile} />
          <source media='(max-width: 1199px)' srcSet={image.tablet} />
          <img src={image.desktop} alt={slug} />
        </picture>
      </div>
      <div className='lg:max-w-[445.5px]'>
        {isNew && (
          <p className='uppercase text-[14px] text-orange tracking-xl mb-6 md:mb-4'>New product</p>
        )}
        <h2 className='tracking-wide text-2xl md:text-5xl leading-tight uppercase font-bold lg:max-w-none md:max-w-sm md:mx-auto lg:mx-0'>{name}</h2>
        <p className='my-6 lg:mb-10 md:mb-6 leading-6 font-medium text- lg:max-w-none md:max-w-xl md:mt-8 md:mx-auto lg:mx-0'>{description}</p>
        <Button url={`/products/${slug}`} value='see product' />
      </div>
    </div>
  );
}

export default ProductCard;
