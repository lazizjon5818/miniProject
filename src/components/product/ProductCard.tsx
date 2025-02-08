import React from "react";
import { FaHeart, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: { 
    id: number; 
    title: string; 
    price: number; 
    thumbnail: string; 
    rating: number; 
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="relative border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 group w-full sm:w-[48%] md:w-72">
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
          <FaHeart className="text-gray-600" />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
          <FaEye className="text-gray-600" />
        </button>
      </div>

      <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail} 
          alt={product.title} 
          className="w-3/4 h-full object-contain"
          onClick={() => navigate(`/product/${product.id}`)}
          />
        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>

      <h2 className="text-md font-semibold mt-2">{product.title}</h2>

       <p className="text-red-600 text-lg font-bold">${product.price}</p>

       <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) =>
          i < product.rating ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : (
            <FaRegStar key={i} className="text-gray-400" />
          )
        )}
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
