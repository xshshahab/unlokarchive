import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import SocialLinks from "./SocialLinks";
import Logo from "../../assets/Logo.png";

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  handleLogoClick,
  isMobileMenu = false,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 bg-black flex flex-col items-start p-4 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="flex items-center justify-between w-full">
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="logo" width={40} />
          </div>
          <button
            onClick={toggleMobileMenu}
            aria-label="Close Mobile Menu"
            className="text-3xl"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="w-full mt-8">
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Roadmap
          </NavLink>
          <NavLink
            to="/guide"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Guide
          </NavLink>
          <hr className="opacity-20" />
          <div id="auth" className="flex flex-col pt-3 gap-2.5">
            <Link
              to="/auth/login"
              id="login"
              className="font-bold hover:text-purple-500"
            >
              Login
            </Link>

            <Link
              to="/auth/signup"
              id="signup"
              className="px-2 py-1.5 w-[75px] rounded bg-purple-600 hover:bg-purple-700"
            >
              Sign Up
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-3 p-2 mt-auto">
          <SocialLinks />
        </div>
      </div>

      {isMobileMenu && (
        <div className="absolute top-0 right-0 flex items-center p-2 pr-8 md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            {isMobileMenuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <RiMenu3Line className="text-4xl" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default MobileMenu;