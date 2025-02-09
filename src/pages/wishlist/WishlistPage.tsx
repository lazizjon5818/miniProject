import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import { FaHeart, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="relative bg-white p-4 rounded-lg shadow-md group"
            >
              {/* Wishlist va ko'rish tugmalari */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                  className="bg-white p-2 rounded-full shadow-md text-red-500 hover:text-red-700"
                >
                  <FaHeart />
                </button>
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-black"
                >
                  <FaEye />
                </button>
              </div>

              {/* Rasm */}
              <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-3/4 h-full object-contain cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                {/* 🛒 Add to Cart tugmasi (faqat kursor ustida chiqadi) */}
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add To Cart
                </button>
              </div>

              {/* Mahsulot ma'lumotlari */}
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-red-600 font-bold">${product.price}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-500 text-sm">({product.rating})</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
