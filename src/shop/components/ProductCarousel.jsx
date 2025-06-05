// components/ProductCarousel.jsx
import React, { useRef } from 'react';
import ProductCard from './ProductCard';

function ProductCarousel({ products }) {
  const trackRef = useRef(null);

  const scrollProducts = (direction) => {
    const container = trackRef.current;
    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-carousel">
      <button className="carousel-arrow left" onClick={() => scrollProducts('left')}>&lt;</button>
      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={() => scrollProducts('right')}>&gt;</button>
    </div>
  );
}

export default ProductCarousel;
