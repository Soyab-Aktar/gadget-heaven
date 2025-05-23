import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 bg-white px-4 py-2 rounded font-bold"
              : "hover:text-purple-200 px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 bg-white px-4 py-2 rounded font-bold"
              : "hover:text-purple-200 px-4 py-2"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-purple-600 rounded-t-2xl py-5 text-white">
      <div className="navbar max-w-11/12 mx-auto">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <a className="bg-white p-2 rounded-full text-black hover:cursor-pointer">
              <AiOutlineShoppingCart />
            </a>
            <a className="bg-white p-2 rounded-full text-black hover:cursor-pointer">
              <FaRegHeart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
