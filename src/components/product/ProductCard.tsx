import React, { useEffect, useCallback, useMemo } from "react";
import { FaHeart, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addToWishlist, removeFromWishlist, setWishlist } from "../../redux/wishlistSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  
  const isInWishlist = useMemo(
    () => wishlist.some((item) => item.id === product.id),
    [wishlist, product.id]
  );

  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (Array.isArray(savedWishlist)) {
        dispatch(setWishlist(savedWishlist));
      }
    } catch (error) {
      console.error("Error parsing wishlist from localStorage:", error);
    }
  }, [dispatch]);

  const handleWishlistClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const updatedWishlist = isInWishlist
        ? wishlist.filter((item) => item.id !== product.id)
        : [...wishlist, product];

      dispatch(isInWishlist ? removeFromWishlist(product.id) : addToWishlist(product));

      try {
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      } catch (error) {
        console.error("Error updating wishlist in localStorage:", error);
      }
    },
    [isInWishlist, wishlist, product, dispatch]
  );

  return (
    <div 
      className="w-[270px] h-[322px] relative border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 group cursor-pointer overflow-hidden"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
        <button 
          onClick={handleWishlistClick}
          className={`w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all ${
            isInWishlist ? "bg-red-50" : "hover:bg-gray-50"
          }`}
          aria-label="Add to wishlist"
        >
          <FaHeart className={`text-xl ${isInWishlist ? "text-red-500" : "text-gray-400 hover:text-red-500"}`} />
        </button>
        <button 
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
          aria-label="View details"
        >
          <FaEye className="text-xl text-gray-400 hover:text-gray-600" />
        </button>
      </div>

      <div className="w-full h-[250px] relative">
        <div className="w-full h-[210px] flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-3/4 h-full object-contain"
            loading="lazy"
          />
        </div>
        <button className="absolute bottom-0 left-0 w-full h-[40px] bg-black text-white text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>

      <div className="h-[72px] px-4 py-2 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-semibold line-clamp-1">{product.title}</h2>
          <p className="text-red-600 text-base font-bold">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? (
                <FaStar className="text-yellow-400 text-sm" />
              ) : (
                <FaRegStar className="text-gray-300 text-sm" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
