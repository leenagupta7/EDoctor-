import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner_1 from '../images/banner_1.jpg'
import banner_2 from '../images/banner_2.jpg'
import banner_3 from '../images/banner_3.png'
import banner_4 from '../images/banner_4.jpg'
import banner_5 from '../images/banner_5.jpg'
import banner_6 from '../images/banner_6.jpg'

const ImageCarousel = () => {
  return (
    <Carousel infiniteLoop={true} showArrows={true}>
      <div>
        <img src={banner_1} alt="banner_1" />
      </div>
      <div>
        <img src={banner_2} alt="banner_2" />
      </div>
      <div>
        <img src={banner_3} alt="banner_3" />
      </div>
      <div>
        <img src={banner_4} alt="banner_4" />
      </div>
      <div>
        <img src={banner_5} alt="banner_5" />
      </div>
      <div>
        <img src={banner_6} alt="banner_6" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;