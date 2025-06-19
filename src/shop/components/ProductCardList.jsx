import React from 'react';
import ProductCard from './ProductCard';
import styles from '../../../scss/pages/shop/shop.module.scss';

function ProductCardList({ products, onToggleCartItem }) {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleCartItem={onToggleCartItem}
        />
      ))}
    </div>
  );
}


export default ProductCardList; 