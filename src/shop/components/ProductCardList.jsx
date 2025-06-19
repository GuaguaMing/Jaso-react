import React from 'react';
import ProductCard from './ProductCard';
import styles from '../../../scss/pages/shop/shop.module.scss';

function ProductCardList({ products, onAddToCart }) {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}/>
      ))}
    </div>
  );
}

export default ProductCardList; 