"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src="/photos/jpg.jpg" alt="Logo" className="h-16 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["HOME", "ABOUT", "RECORDS", "FUND DETAILS", "TEAM", "CONTACT"].map((item) => {
        // Set the correct route path (HOME should redirect to "/")
        const routePath = item === "HOME" ? "/" : `/${item.replace(/ /g, "").toLowerCase()}`;
          return (
          <NavLink
            key={item} // Unique key for React rendering
            to={routePath} // Dynamic path for each navigation item
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-[#2C7C41]" // Active link color
                  : "text-gray-700 hover:text-[#2C7C41]" // Default & hover colors
              }`
            }
          >
            {item} {/* Display navigation item name */}
          </NavLink>
          )
            })}
            <NavLink
              to="/signin"
              className="bg-[#2C7C41] text-white px-6 py-2 rounded-md hover:bg-green-700 hover:text-black transition-colors"
            >
              Invest Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 bg-white hover:text-[#2C7C41] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["HOME", "ABOUT", "RECORDS", "FUND DETAILS", "TEAM", "CONTACT"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.replace(/ /g, "").toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#2C7C41] text-white"
                      : "text-gray-700 hover:bg-green-100 hover:text-[#2C7C41]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <NavLink
              to="/signin"
              className="block w-full text-center bg-[#2C7C41] text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Invest Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
