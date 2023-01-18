import React from 'react';
interface ProductProps {
  title: string;
}
const Product = (product: ProductProps) => {
  return (
    <div>
      <div>{product.title}</div>
    </div>
  );
};

export default Product;
