import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { TbApps } from 'react-icons/tb';
import { MdInstallMobile, MdOutlineInstallDesktop } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className=" w-full f py-4 shadow">
      <div className="navbar flex justify-between items-center container mx-auto px-[3%] md:px-0">
        <div className="flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="px-3 text-[#131313cc] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className="text-black font-medium text-base flex items-center gap-1"
                >
                  <IoHomeOutline className="text-lg nav-icon" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className="text-black font-medium text-base flex items-center gap-1"
                >
                  <TbApps className="text-lg nav-icon" />
                  <span>Apps</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className="text-black font-medium text-base flex items-center gap-1"
                >
                  <MdInstallMobile className="text-lg nav-icon" />
                  <span>Installation</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex gap-1 items-center">
            <img className="w-[40px] h-[40px]" src={logo} alt="" />
            <p className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base">
              HERO.IO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className="text-black font-medium text-base flex items-center gap-1"
              >
                <IoHomeOutline className="text-lg nav-icon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className="text-black font-medium text-base flex items-center gap-1"
              >
                <TbApps className="text-lg nav-icon" />
                <span>Apps</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className="text-black font-medium text-base flex items-center gap-1"
              >
                <MdOutlineInstallDesktop className="text-lg nav-icon" />
                <span>Installation</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://github.com/mahadi609im"
            className="py-[11.5px] px-[15.5px] rounded-md md:rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 shadow-lg text-white text-base font-semibold cursor-pointer flex items-center gap-[10px] hover:scale-105 transition-all ease-in-out"
          >
            <FaGithub className="text-xl" />
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
