import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { FaTimes, FaHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import Button from "@mui/material/Button";
import { MdCompareArrows } from "react-icons/md";
import { QuantityBox } from "./QuantityBox";

export const ProductModel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://m.media-amazon.com/images/I/71mTMcVlF7L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81TUaavRe-L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71g-BgUhHHL._SX679_.jpg",
  ];

  return (
    <>
    <Dialog
      open={true}
      onClose={props.closeProductModel}
      className="ProductModel-div"
    >
      {/* Close button */}
      <button
        className="Product-close-btn"
        onClick={props.closeProductModel}
      >
        <FaTimes />
      </button>

      <span className="discount-badge">28%</span>

      {/* Flex Content Wrapper */}
      <div className="ProductModel-flex">

        {/* Left - Images */}
        <div className="ProductModel-images">
          <div className="ProductModel-main-image">
            <InnerImageZoom
              src={images[activeIndex]}
              zoomSrc={images[activeIndex]}
              zoomType="hover"
              className="zoom-img"
            />
          </div>
          <div className="ProductModel-thumbnails">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={() => setActiveIndex(i)}
                className={
                  activeIndex === i
                    ? "ProductModel-thumb active"
                    : "ProductModel-thumb"
                }
                alt=""
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="ProductModel-details">
          <h1 className="ProductModel-heading">
            All Natural Italian-Style Chicken Meatballs
          </h1>

          <div>
            <span>Brands:</span>
            <span className="ProductModel-brand"> Welch's</span>
          </div>

          <Rating name="read-only" value={5} readOnly />

          <hr />

          <div>
            <span className="ProductModel-oldPrice">$5.00</span>
            <span className="ProductModel-netPrice">$6.00</span>
          </div>

          <span>IN Stock</span>

          <p>
            Classmate Hook Ball Pen- Blue (Pack of 10) | Multicolour Body Pens |
            Attractive Pastel Shades for Boys & Girls | Smooth Writing Ball Pen |
            Unique Design
          </p>

          {/* Quantity */}

          <QuantityBox></QuantityBox>


          {/* Add to Cart */}
          <div className="ProductModel-actions">
            <Button variant="contained" className="ProductModel-addToCart">
              Add To Cart
            </Button>
          </div>

          {/* Wishlist / Compare */}
          <div className="ProductModel-compareWishlist">
            <Button variant="outlined">
              <FaHeart /> Add to Wishlist
            </Button>
            <Button variant="outlined">
              <MdCompareArrows /> Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>



    
    </>
  );
};
