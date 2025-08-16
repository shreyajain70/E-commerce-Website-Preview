import React from "react";
import { MdOutlineMail } from "react-icons/md";


export const NewsletterPage = () => (
  <div className="newsletter-container">
    <div className="newsletter-main">
      {/* Left Side */}
      <div className="newsletter-content">
        <h4>$20 discount for your first order</h4>
        <h2>Join our newsletter and get...</h2>
        <p>
          Join our email subscription now to get updates <br />
          on promotions and coupons.
        </p>

        <div className="newsletter-input">
          <span className="icon-wrapper">
            <MdOutlineMail />
          </span>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="newsletter-image">
        <div className="coupon">        
            <img src="https://i.pinimg.com/1200x/8f/09/8e/8f098ede4234d10984d6ee6ae3e5dabb.jpg"></img>        
             </div>
      </div>
    </div>

    {/* Features */}
    <div className="newsletter-features">
      <div>
        <span className="feature-icon">📦</span>
        Everyday fresh products
      </div>
      <div>
        <span className="feature-icon">🚚</span>
        Free delivery for order over $70
      </div>
      <div>
        <span className="feature-icon">🔥</span>
        Daily Mega Discounts
      </div>
      <div>
        <span className="feature-icon">💲</span>
        Best price on the market
      </div>
    </div>
  </div>
);


