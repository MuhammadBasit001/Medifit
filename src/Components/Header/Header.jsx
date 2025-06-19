import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import search from "../images/search-2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#eeede7] w-full px-4 py-4 md:px-12 relative md:flex md:justify-center">
      <header className="bg-[#eeede7] w-full lg:w-[70vw] px-4 py-4 lg:px-12 relative">
        {/* === TOP BAR === */}
        <div className="flex items-center justify-between relative">
          {/* === Logo === */}
          <div className="w-32 z-10">
            <Link to="/">
              <img src={logo} alt="logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* === Center Nav (Desktop Only) === */}
          <div className="hidden md:flex gap-6 text-lg absolute left-1/2 -translate-x-1/2">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">Pages</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* === Right Side Icons === */}
          <div className="flex items-center gap-4 z-10">
            {/* Desktop icons */}
            <div className="hidden md:flex gap-4">
              <Link to="/search">
                <img src={search} alt="search" className="w-6 h-6" />
              </Link>
              <Link to="/cart">
                <img src={cart} alt="cart" className="w-6 h-6" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>

        {/* === Mobile Dropdown (Nav + Icons) === */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center gap-4 bg-[#eeede7] py-4 md:hidden`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Pages</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="flex gap-4 mt-2">
            <Link to="/search" onClick={() => setMenuOpen(false)}>
              <img src={search} alt="search" className="w-6 h-6" />
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <img src={cart} alt="cart" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
