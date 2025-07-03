import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';


const slides = [
  { img: '/portfolio/slider-1.png', alt: 'Tata Studi' },
  { img: '/portfolio/slider-2.png', alt: 'Adani One' },
  { img: '/portfolio/slider-3.png', alt: 'BoomPop' },
  { img: '/portfolio/slider-4.png', alt: 'WeCura' },
  { img: '/portfolio/slider-5.png', alt: 'Tata Nue' },
  { img: '/portfolio/slider-6.png', alt: 'Frampik' },
  { img: '/portfolio/slider-7.png', alt: 'Tata Class Edge' }
];

const SliderSection = () => {
  const sliderRef = useRef(null);

  return (
    <section className="slider-section py-5">
      <Container>
        <div className="carousel-scroll-container" ref={sliderRef}>
          {slides.map((slide, i) => (
            <div className="carousel-card" key={i}>
              <img src={slide.img} alt={slide.alt} className="carousel-image" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SliderSection;
