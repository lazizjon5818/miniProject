import React, { useState, useEffect } from "react";
import { links } from "../../static";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) setSearchOpen(false);
  }, [menuOpen]);

  const handleNavigate = (href: string) => {
    navigate(href);
    setMenuOpen(false);
  };

  return (
    <header className="border-b-2 bg-white shadow-md">
      <div className="container mx-auto h-20 flex justify-between items-center px-4">
        <h2
          onClick={() => navigate("/")}
          className="text-2xl font-medium cursor-pointer"
        >
          Exclusive
        </h2>

        {/* Navbar (Desktop) */}
        <nav className="hidden lg:flex gap-4 text-sm text-gray-700">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavigate(link.href)}
                  className={`${
                    location.pathname === link.href
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : "hover:text-gray-800"
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search va Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center border border-gray-400 rounded-md px-3 w-64 h-8">
            <input
              type="text"
              className="flex-1 outline-none px-2"
              placeholder="What are you looking for?"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <div className="flex items-center space-x-6">
            <CiHeart
              className={`text-xl cursor-pointer ${
                location.pathname === "/wishlist" ? "text-blue-600" : ""
              }`}
              onClick={() => navigate("/wishlist")}
            />
            <MdOutlineShoppingCart
              className={`text-xl cursor-pointer ${
                location.pathname === "/cart" ? "text-blue-600" : ""
              }`}
              onClick={() => navigate("/cart")}
            />
            <FiUser
              className={`text-xl cursor-pointer ${
                location.pathname === "/account" ? "text-blue-600" : ""
              }`}
              onClick={() => handleNavigate("/account")}
            />
          </div>
        </div>

        {/* Mobil menyu tugmasi */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobil menyu */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-gradient-to-t from-black via-gray-900 to-transparent backdrop-blur-lg py-4 flex flex-col items-center gap-4 z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full flex justify-around items-center text-white text-lg">
          <button
            onClick={() => handleNavigate("/")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/" ? "text-blue-400" : ""
            }`}
          >
            <AiOutlineHome className="text-2xl" />
            <span>Home</span>
          </button>
          <button
            onClick={() => handleNavigate("/cart")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/cart" ? "text-blue-400" : ""
            }`}
          >
            <MdOutlineShoppingCart className="text-2xl" />
            <span>Cart</span>
          </button>
          <button
            onClick={() => handleNavigate("/wishlist")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/wishlist" ? "text-blue-400" : ""
            }`}
          >
            <CiHeart className="text-2xl" />
            <span>Wishlist</span>
          </button>
          <button
            onClick={() => handleNavigate("/account")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/account" ? "text-blue-400" : ""
            }`}
          >
            <FiUser className="text-xl cursor-pointer" />
            <span>Profile</span>
          </button>
        </div>

        <div className="w-full flex justify-around mt-4 text-white text-lg">
          <button
            onClick={() => handleNavigate("/about")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/about" ? "text-blue-400" : ""
            }`}
          >
            <BiInfoCircle className="text-2xl" />
            <span>About</span>
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className={`flex flex-col items-center gap-1 ${
              location.pathname === "/contact" ? "text-blue-400" : ""
            }`}
          >
            <BiPhoneCall className="text-2xl" />
            <span>Contact</span>
          </button>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex flex-col items-center gap-1"
          >
            <FaSearch className="text-2xl" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed top-0 left-0 w-full px-4 py-2 bg-black backdrop-blur-lg text-white flex items-center gap-2 transition-all duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none border-b-2 border-white px-2 py-1 text-lg"
          />
          <button onClick={() => setSearchOpen(false)} className="text-white text-xl">
            <FaTimes />
          </button>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
