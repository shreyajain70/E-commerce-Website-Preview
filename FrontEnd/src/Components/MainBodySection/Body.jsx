import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { ProductItems } from "./ProductItems";
import NewsletterPage from "./NewsletterPage";
import Footer from "./Footer";
import { IoMdMenu } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Body = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="main-body-container">
        {/* Icons Row */}
        <div>
          <div>
            <IoMdMenu />
            <HiViewGrid />
            <CgMenuGridO />
            <BsGrid3X3GapFill />
          </div>

          {/* Dropdown Menu */}
          <div>
            <button onClick={handleClick}>
              Show 9 <FaAngleDown />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open} // ✅ FIXED here
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>10</MenuItem>
              <MenuItem onClick={handleClose}>20</MenuItem>
              <MenuItem onClick={handleClose}>30</MenuItem>
              <MenuItem onClick={handleClose}>40</MenuItem>
              <MenuItem onClick={handleClose}>50</MenuItem>
              <MenuItem onClick={handleClose}>60</MenuItem>
            </Menu>
          </div>

          <div className="productListing">

          </div>
        </div>

        {/* Heading Section */}
        <div className="main-heading-container">
          <h3 className="main-heading-title">BEST SELLERS</h3>
          <p className="main-heading-desc">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button className="view-all-btn">
            View All <IoMdArrowForward />
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <ProductItems />
      <NewsletterPage />
      <Footer />
    </>
  );
};
