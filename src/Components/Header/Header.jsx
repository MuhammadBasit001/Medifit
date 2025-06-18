import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import search from "../images/search-2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#eeede7] w-full px-4 py-4 md:px-12 relative">
      {/* === TOP BAR === */}
      <div className="flex items-center justify-between md:grid md:grid-cols-3">
        {/* === Logo on the Left (All Screens) === */}
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* === Center Nav (Desktop Only) === */}
        <nav className="hidden md:flex justify-center gap-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">Pages</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* === Right Side === */}
        <div className="flex items-center gap-4">
          {/* Desktop icons */}
          <div className="hidden md:flex gap-4">
            <Link to="/search">
              <img src={search} alt="search" className="w-6 h-6" />
            </Link>
            <Link to="/cart">
              <img src={cart} alt="cart" className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile hamburger */}
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
        {/* Nav Links */}
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Pages</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* Mobile icons */}
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
  );
};

export default Header;
