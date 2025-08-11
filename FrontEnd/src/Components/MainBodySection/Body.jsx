import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { ProductItems } from "./ProductItems";
import NewsletterPage from "./NewsletterPage";
import Footer from "./Footer";
export const Body = () => {
  return (
    <>
      <div className="main-body-container">
        <div className="main-heading-container">
          <h3 className="main-heading-title">BEST SELLERS</h3>
          <p className="main-heading-desc">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div className="view-all-container">
          <button className="view-all-btn">
            View All <IoMdArrowForward />
          </button>
        </div>
      </div>
      
<ProductItems></ProductItems>
<NewsletterPage></NewsletterPage>
<Footer></Footer>
    </>
  );
};
