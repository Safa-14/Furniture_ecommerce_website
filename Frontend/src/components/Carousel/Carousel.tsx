import React, { useState } from 'react';
import styles from './styles.module.css';
import {banners} from '../../data/data';


const {carousel_container, carousel_slide,carousel_image,carousel_button, prevButton, nextButton} = styles;

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex !== banners.length - 1) {
          console.log(banners[currentIndex]);
          
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      };
    
      const prevSlide = () => {
        if (currentIndex !== 0) {
          setCurrentIndex(currentIndex - 1);
          console.log(banners[currentIndex].banner);
        } else {
          setCurrentIndex(banners.length - 1);
        }
      };

  return (
    <div className={carousel_container}>
      <div className={carousel_slide}>
      <img
          src={banners[currentIndex].banner}
          alt={`Slide ${currentIndex + 1}`}
          className={carousel_image}
        />
      </div>
      <button onClick={prevSlide} className={`${carousel_button} ${prevButton}`}>❮</button>
      <button onClick={nextSlide} className={`${carousel_button} ${nextButton}`}>❯</button>
    </div>
  )
}

export default Carousel
