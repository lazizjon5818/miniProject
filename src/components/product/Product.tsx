import React from "react";
import ProductCard from "./ProductCard"; 

interface ProductProps {
  products: Array<{ 
    id: number; 
    title: string; 
    price: number; 
    thumbnail: string; 
    rating: number; 
  }>;
}

const Product: React.FC<ProductProps> = ({ products }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(Product);
