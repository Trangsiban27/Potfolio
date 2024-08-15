import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <nav className="w-full h-[70px] mb-8 flex items-center">
        <Link to="/" className="h-full mr-20">
          <img
            src="./src/assets/2.svg"
            alt=""
            className="object-cover h-full"
          />
        </Link>

        <div className="flex items-center gap-10 font-bold text-white uppercase">
          <NavLink to="/main">Giới thiệu</NavLink>
          <NavLink to="/">Dự án</NavLink>
          <NavLink to="/">Blog</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
