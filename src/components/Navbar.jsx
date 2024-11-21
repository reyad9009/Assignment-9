import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg px-10 btn rounded-full hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }>Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="/my-class"
        className={({ isActive }) =>
          isActive
            ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
            : "bg-white text-lg px-10 btn rounded-full hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
        }>My Classes</NavLink>
      </li>
    </>
  );

  return (
    <div className="mt-5 font-poppins">
      <div className="navbar bg-base-100">
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
          <Link to="/">
          <a className="btn btn-ghost text-3xl font-bold text-[#2196f3]">
            Career Kindle
          </a>
          </Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-10 text-lg font-extrabold">{links}</ul>
        </div>
        <div className="navbar-end ">
          <div className="">
            {user && user?.email ? (
              <div>
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                  title={user.displayName}
                />
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>

          <div className="px-5">
            {user && user?.email ? (
              <Link
                to="/auth/profile"
                className="bg-[#2196f3] px-8 py-3 text-xl font-semibold rounded-full text-white"
              >
                My Profile
              </Link>
            ) : (
              ""
            )}
          </div>

          <div className="">
            {user && user?.email ? (
              <button
                onClick={logOut}
                className="bg-[#2196f3] px-8 py-3 text-xl  font-semibold rounded-full text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="bg-[#2196f3] px-8 py-3 text-xl font-semibold rounded-full text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
