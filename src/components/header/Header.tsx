import { NavLink } from "react-router-dom";
import { TrendingUp } from "lucide-react";

function Header() {
  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-[#1ac8ed]" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                VentureFund
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className="text-gray-700 hover:text-[#1ac8ed]">
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-[#1ac8ed]"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/resources"
                className="text-gray-700 hover:text-[#1ac8ed]"
              >
                RESOURCES
              </NavLink>
              <NavLink
                to="/fund"
                className="text-gray-700 hover:text-[#1ac8ed]"
              >
                FUND DETAILS
              </NavLink>
              <NavLink
                to="/team"
                className="text-gray-700 hover:text-[#1ac8ed]"
              >
                TEAM
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-[#1ac8ed]"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
