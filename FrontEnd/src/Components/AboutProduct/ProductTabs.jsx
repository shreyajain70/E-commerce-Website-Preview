import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { RelatedProducts } from "./RelatedProducts";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className="tabs-container">
      {/* Tab Buttons */}
      <ul className="tab-buttons">
        <li>
          <button
            className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Description
          </button>
        </li>
        <li>
          <button
            className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Additional Info
          </button>
        </li>
        <li>
          <button
            className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Vendor
          </button>
        </li>
        <li>
          <button
            className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Reviews
          </button>
        </li>
      </ul>

      {/* Description Section*/}
      <div className={`tab-content ${activeTab === 0 ? "show" : "hide"}`}>
        <p>
          Uninhibited carnally hired played in whimpered dear gorilla koala depending
          and much yikes off far quetzal goodness...
        </p>
        <ul>
          <li>Type Of Packing: Bottle</li>
          <li>Color: Green, Pink, Powder Blue, Purple</li>
          <li>Quantity Per Case: 100ml</li>
          <li>Ethyl Alcohol: 70%</li>
          <li>Piece In One: Carton</li>
        </ul>
      </div>


{/* Additional Info Section */}
    <div className={`tab-content ${activeTab === 1 ? "show" : "hide"}`}>
  <div className="additional-info-section">
    <table className="info-table">
      <tbody>
        <tr className="info-row">
          <td className="info-label">Stand Up</td>
          <td className="info-value">35"L x 24"W x 37-45"H (front to back wheel)</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Folded (w/o wheels)</td>
          <td className="info-value">32.5"L x 18.5"W x 16.5"H</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Folded (w/ wheels)</td>
          <td className="info-value">32.5"L x 24"W x 18.5"H</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Door Pass Through</td>
          <td className="info-value">24"</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Frame</td>
          <td className="info-value">Aluminum</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Weight</td>
          <td className="info-value">21 lbs</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Wheel Size</td>
          <td className="info-value">8"</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Maximum Capacity</td>
          <td className="info-value">50 lbs</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Handle Height</td>
          <td className="info-value">37-45"</td>
        </tr>
        <tr className="info-row">
          <td className="info-label">Brakes</td>
          <td className="info-value">Foot-activated parking brake</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



{/* Vendor Section */}
      <div className={`tab-content ${activeTab === 2 ? "show" : "hide"}`}>
        <p>Vendor details go here.</p>
      </div>

{/* Review Section */}

<div className={`tab-content ${activeTab === 3 ? "show" : "hide"}`}>
  <div className="reviews-list">
    {/* Review 1 */}
    <div className="review-item">
      <div className="review-header">
        <span className="review-name">Rinku Verma</span>
        <span className="review-date">01/03/2023</span>
        <span className="review-rating">
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        </span>
      </div>
      <div className="review-body">
        <p>
          Noodles &amp; Company is an American fast-casual restaurant that offers
          international and American noodle dishes and pasta in addition to soups
          and salads.
        </p>
      </div>
    </div>

    {/* Review 2 */}
    <div className="review-item">
      <div className="review-header">
        <span className="review-name">Priya Sharma</span>
        <span className="review-date">19/05/2022</span>
        <span className="review-rating">
          <Rating name="read-only" value={4.0} precision={0.5} readOnly />
        </span>
      </div>
      <div className="review-body">
        <p>
          Elevate your music experience with the JBL Flip 6, a portable Bluetooth
          speaker designed for rich, powerful sound anywhere you go.
        </p>
      </div>
    </div>
  </div>

  {/* Review Form */}
  <h3 className="add-review-heading">Add a Review</h3>
  <form className="review-form">
    <p className="review-info-text">
      Your email address will not be published. Required fields are marked{" "}
      <span className="required">*</span>
    </p>

    {/* Rating */}
    <label className="review-label">
      <span className="label-text">
        Your rating <span className="required">*</span>
      </span>
      <Rating
        name="review-rating"
        defaultValue={0}
        precision={1}
        size="large"
        className="review-stars"
      />
    </label>

    {/* Review */}
    <label className="review-label">
      <span className="label-text">
        Your review <span className="required">*</span>
      </span>
      <textarea
        className="review-input"
        placeholder="Write your review..."
        rows={3}
        required
      />
    </label>

    {/* Name */}
    <label className="review-label">
      <span className="label-text">Name</span>
      <input className="review-name-input" type="text" placeholder="Name" />
    </label>

    {/* Upload */}
    <label className="review-label">
      <span className="label-text">Upload Image</span>
      <input className="review-image-input" type="file" accept="image/*" />
    </label>

    {/* Submit */}
    <button className="submit-review-btn" type="submit">
      Submit Review
    </button>
  </form>
</div>

    </div>
<RelatedProducts></RelatedProducts>
        </>
  );
}

export default ProductTabs;
