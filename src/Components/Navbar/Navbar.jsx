import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const links = (
    <>
      <li>
        <NavLink className="text-black lg:text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className="text-black lg:text-white">
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/selectedGadgets" className="text-black lg:text-white">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/feedbackReviews" className="text-black lg:text-white">Feedback & Reviews</NavLink>
      </li>
    </>
  );

  return (
    <section>
      <div
        className={`${
          pathname === "/" ? "bg-[#9538E2]" : "bg-gray-300"
        } navbar  mt-5 text-white rounded-lg md:px-10`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <CiShoppingCart className="text-2xl" />
          <FaRegHeart className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
