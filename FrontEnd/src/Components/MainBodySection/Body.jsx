import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";


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
  <div className="main-body-container">
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

  
    </>
  );
};
