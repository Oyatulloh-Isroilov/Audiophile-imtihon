function SummaryItem({ item }) {
  return (
    <div className='grid grid-cols-[auto,_1fr,_auto] items-center gap-x-4'>
      <div className='rounded-md overflow-hidden w-16'>
        <img className='w-full' src={item.image.mobile} alt='' />
      </div>
      <div>
        <h3 className='text-black text-base font-bold'>{item.name.split(' ')[0]}</h3>
        <p className='text-gray/60 text-[14px] font-bold'>$ {item.price.toLocaleString('en-US')}</p>
      </div>
      <p className='text-gray/60 font-bold text-right'>x{item.quantity}</p>
    </div>
  );
}

export default SummaryItem;
