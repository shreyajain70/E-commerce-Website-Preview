import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdCompareArrows } from "react-icons/md";
import QuantityBox from "../MainBodySection/QuantityBox";
import Tooltip from "@mui/material/Tooltip";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ProductTabs from "./ProductTabs";


export const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(
    "https://m.media-amazon.com/images/I/71mTMcVlF7L._SX679_.jpg"
  );

  const [selectedWeight, setSelectedWeight] = useState("50g");
  const weightOptions = ["50g", "100g", "200g", "300g", "500g"];

  return (
    <>
      <div className="prod-page-container">
        <span className="prod-discount-badge">28%</span>

        <div className="prod-flex-wrap">
          {/* Left - Zoom Image */}
          <div className="prod-img-section">
            <div className="prod-main-img">
              <InnerImageZoom
                src={mainImage}
                zoomSrc={mainImage}
                zoomType="hover"
                zoomPreload={true}
                alt="Main product"
              />
            </div>

            {/* Thumbnails */}
            <div className="prod-thumbnail-row">
              <img
                src="https://m.media-amazon.com/images/I/71mTMcVlF7L._SX679_.jpg"
                alt="Thumb 1"
                onClick={() =>
                  setMainImage(
                    "https://m.media-amazon.com/images/I/71mTMcVlF7L._SX679_.jpg"
                  )
                }
                className={
                  mainImage.includes("71mTMcVlF7L")
                    ? "prod-thumbnail-img active"
                    : "prod-thumbnail-img"
                }
              />

              <img
                src="https://m.media-amazon.com/images/I/81TUaavRe-L._SX679_.jpg"
                alt="Thumb 2"
                onClick={() =>
                  setMainImage(
                    "https://m.media-amazon.com/images/I/81TUaavRe-L._SX679_.jpg"
                  )
                }
                className={
                  mainImage.includes("81TUaavRe-L")
                    ? "prod-thumbnail-img active"
                    : "prod-thumbnail-img"
                }
              />

              <img
                src="https://m.media-amazon.com/images/I/71g-BgUhHHL._SX679_.jpg"
                alt="Thumb 3"
                onClick={() =>
                  setMainImage(
                    "https://m.media-amazon.com/images/I/71g-BgUhHHL._SX679_.jpg"
                  )
                }
                className={
                  mainImage.includes("71g-BgUhHHL")
                    ? "prod-thumbnail-img active"
                    : "prod-thumbnail-img"
                }
              />
            </div>
          </div>

          {/* Right - Details */}
          <div className="prod-details-section">
            <h1 className="prod-title">
              All Natural Italian-Style Chicken Meatballs
            </h1>

            <div className="prod-brand-rating">
              <span>Brands:</span>
              <span> Welch's</span>
            </div>

            <Rating name="read-only" value={5} readOnly />
            <hr className="prod-divider" />

            <div className="prod-price-row">
              <span className="prod-old-price">$5.00</span>
              <span className="prod-new-price">$6.00</span>
            </div>

            <span className="prod-stock-label">IN Stock</span>

            <p className="prod-desc">
              Classmate Hook Ball Pen- Blue (Pack of 10) | Multicolour Body Pens |
              Attractive Pastel Shades for Boys & Girls | Smooth Writing Ball Pen
              | Unique Design
            </p>

            {/* Weight Selection Buttons */}
            <div className="prod-weight-size">
              {weightOptions.map((wt) => (
                <button
                  key={wt}
                  className={`weight-size-btn${selectedWeight === wt ? " active" : ""}`}
                  onClick={() => setSelectedWeight(wt)}
                  type="button"
                >
                  {wt}
                </button>
              ))}
            </div>

            {/* Quantity */}
            <QuantityBox />

            {/* Add to Cart */}
            <div>
              <Button variant="contained" className="prod-add-cart-btn">
                Add To Cart
              </Button>
            </div>

            {/* Wishlist / Compare */}
            <div className="prod-wishlist-compare-row">
              <Tooltip
                title="Add To Wishlist"
                placement="top"
                classes={{ tooltip: "custom-tooltip" }}
              >
                <Button variant="outlined" className="prod-wishlist-btn">
                  <FaHeart />
                </Button>
              </Tooltip>
              <Tooltip
                title="Add To Compare"
                placement="top"
                classes={{ tooltip: "custom-tooltip" }}
              >
                <Button variant="outlined" className="prod-compare-btn">
                  <MdCompareArrows />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <ProductTabs></ProductTabs>
    </>
  );
};
