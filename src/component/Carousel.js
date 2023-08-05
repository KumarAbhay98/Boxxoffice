import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Imgslider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="Sliderbg">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/antmanc.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/avatarc.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/alienc.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/doctorstrangec.webp"
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/eternalsc.webp"
            alt="fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/shangchi.webp"
            alt="sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/pikachuuc.webp"
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={600}>
          <img
            className="d-block w-100"
            src="./images/kantarac.webp"
            alt="Eight slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Imgslider



