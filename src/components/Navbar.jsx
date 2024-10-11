import React, { useContext, useEffect, useState } from "react";
import logo from "/logos.png";
import { FaRegUser } from "react-icons/fa";
import Modal from "../Modal";
import Profile from "../Profile";
import { Link, useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/AuthProvider";
import { loginContext } from "../../layout/Main";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user, loading } = useAuth();
  const [cart, refetch] = useCart();
  const location = useLocation();
  const { token, logout } = useContext(loginContext);
  // Get current path

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("token", token);

  const navItems = (
    <>
      <li
        className={`${location.pathname === "/" ? "text-blue-500" : "black"}`}
      >
        <Link to="/">Home ddd</Link>
      </li>
      <li
        className={`${
          location.pathname === "/menu" ? "text-blue-500" : "black"
        }`}
      >
        <Link to="/">All Products</Link>
      </li>
      <li
        className={`${
          location.pathname === "/subscription" ? "text-blue-500" : "black"
        }`}
      >
        <Link to="/">Subscription</Link>
      </li>
      {/* <li
        className={`${
          location.pathname === "/affiliate" ? "text-blue-500" : "black"
        }`}
      >
        <Link to="/affiliate">Register as agent</Link>
      </li> */}

      {/* <li
        className={`${
          location.pathname === "/about-us" ? "text-blue-500" : "black"
        }`}
      >
        <Link to="/about-us">careers</Link>
      </li>

      <li
        className={`${
          location.pathname === "/contact-us" ? "text-blue-500" : "black"
        }`}
      >
        <Link to="/contact-us">Contact</Link>
      </li> */}
    </>
  );
  return (
    <header
      className={`max-w-screen-2xl bg-white container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-white transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label tabIndex={0} className="  text-slate-50 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a href="">
            <img src={"public/logo.jpg"} alt="" className="w-[110px]" />
          </a>
        </div>

        {/* Navi items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-slate-400 space-x-1 menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end ">
          {/* shopping cart */}
          {user ? (
            <Link to="/cart-page">
              <label
                tabIndex={0}
                className="btn btn-ghost border-none btn-circle  lg:flex items-center justify-center mr-3"
              >
                <div className="indicator text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge  bg-myHoverYellow text-black badge-sm indicator-item">
                    {cart.length || 0}
                  </span>
                </div>
              </label>
            </Link>
          ) : (
            <></>
          )}

          {/* login button */}

          {user ? (
            <>
              <Profile user={user} />
            </>
          ) : (
            <button
              onClick={() => {
                if (token) {
                  logout();
                } else {
                  document.getElementById("my_modal_5").showModal();
                }
              }}
              className="btn flex items-center min-h-5 gap-2 px-6 py-2 border-none rounded-md bg-[#202029] text-white hover:bg-[#1089ff]"
            >
              <FaRegUser />
              {token ? "Logout" : "Login"}
            </button>
          )}
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
