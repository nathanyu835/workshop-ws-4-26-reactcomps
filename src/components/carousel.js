import React from 'react';
import { Carousel } from 'antd';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><h3><img src={img1} alt="img1" /></h3></div>
      <div><h3><img src={img2} alt="img2" /></h3></div>
      <div><h3><img src={img3} alt="img3" /></h3></div>
      <div><h3><img src={img4} alt="img4" /></h3></div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
