import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/image.png";
import "../App.css";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import 'animate.css';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "",
          text: "You are logged out successfully",
          icon: "success",
          
        })
      })
      .catch();
  };

  return (
    <div className="my-5">
      <div className="navbar flex items-center justify-between">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow nav space-y-2"
            >
              <NavLink className="text-xl text-gray-600 font-medium" to="/">
                Home
              </NavLink>
              {user ? (
                <div className="space-y-2 flex flex-col">
                  <NavLink
                    className="text-xl text-gray-600 font-medium cursor-pointer"
                    to="/my_profile"
                  >
                    My Profile
                  </NavLink>
                  <Link
                    className="btn bg-white px-3 py-1 border-2 border-gray-400 text-lg text-gray-600 "
                    to="/"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    className="btn bg-white px-3 py-1 border-2 border-gray-400 text-lg text-gray-600 "
                    to="/auth/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-[#70B2B2] px-3 py-1 border-none  text-lg text-white "
                    to="/auth/signup"
                  >
                    Sign UP
                  </Link>
                </>
              )}
            </div>
          </div>
          <Link to="/" className=" flex items-center gap-2 animate__animated animate__pulse animate__infinite ">
            <img className="w-10 h-10 " src={logo} alt="" />
            <h3 className="text-base lg:text-2xl font-bold text-[#70B2B2] ">
              Skill Swap
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center gap-5 nav">
          <NavLink className="text-xl text-gray-600 font-medium" to="/">
            Home
          </NavLink>
          {user && (
            <NavLink
              className="text-xl text-gray-600 font-medium"
              to="/my_profile"
            >
              My Profile
            </NavLink>
          )}
        </div>
        <div className="navbar-end items-center gap-2">
          {user ? (
            <>
              <Link
                to="/my_profile"
                className="lg:tooltip lg:tooltip-bottom before:bg-transparent before:text-black"
                data-tip={user.displayName}
              >
                <img
                  className=" w-14 h-14 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </Link>
              <Link
                className="btn bg-white px-3 py-1 border-2 border-gray-400 text-lg text-gray-600 hidden lg:block"
                to="/"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                className="btn bg-white px-3 py-1 border-2 border-gray-400 text-lg text-gray-600 hidden lg:block"
                to="/auth/login"
              >
                Login
              </Link>
              <Link
                className="btn bg-[#70B2B2] px-3 py-1 border-none  text-lg text-white hidden lg:block"
                to="/auth/signup"
              >
                Sign UP
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
