import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FcElectronics } from "react-icons/fc";
import { MdBakeryDining } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { SideBar } from "./SideBar";


export const NavCategoryFile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="Category-div">
        {/* Category Button */}
        <button onClick={toggleSidebar} className="category-btn">
          <span>
            <IoMenu />
            All Categories
            <FaAngleDown />
          </span>
        </button>

        {/* Sidebar dropdown (only when open) */}
        {isSidebarOpen && (
          <div className="sidebar-dropdown">
            <SideBar />
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <div className="nav-items-div">
        <button className="nav-items">
          <span><FaHome /></span>
          Home
        </button>
        <button className="nav-items">
          <span><GiDress /></span>
          Fashion
        </button>
        <button className="nav-items">
          <span><MdLocalGroceryStore /></span>
          Grocery
        </button>
        <button className="nav-items">
          <span><FcElectronics /></span>
          Electronic
        </button>
        <button className="nav-items">
          <span><MdBakeryDining /></span>
          Bakery
        </button>
        <button className="nav-items">
          <span><FaBlog /></span>
          Blog
        </button>
        <button className="nav-items">
          <span><FcBusinessContact /></span>
          Contact Us
        </button>
        <button className="nav-items">
          <span><FcAbout /></span>
          About Us
        </button>
      </div>
    </nav>
  );
};
