import React from 'react';
import CategoryCard from './CategoryCard';
import headphonesImg from '../assets/images/headphone.png';
import speakersImg from '../assets/images/speaker.png';
import earphonesImg from '../assets/images/earphone.png';

function CategoriesCards({ flexDirection, gap, paddingX, paddingY }) {
  const categories = [
    {
      title: 'headphones',
      url: '/headphones',
      img: headphonesImg,
    },
    {
      title: 'speakers',
      url: '/speakers',
      img: speakersImg,
    },
    {
      title: 'earphones',
      url: '/earphones',
      img: earphonesImg,
    },
  ];

  return (
    <div className={`flex ${flexDirection} ${gap} ${paddingX} ${paddingY} bg-offWhite w-full rounded-bl-md rounded-br-md z-30`}>
      {categories.map(category => (
        <CategoryCard key={category.title} image={category.img} url={category.url} title={category.title}/>
      ))}
    </div>
  );
}

export default CategoriesCards;
