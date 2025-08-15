import React from "react";
import Rating from "@mui/material/Rating";
import QuantityBox from "../MainBodySection/QuantityBox";
import { IoIosClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCartShopping } from "react-icons/fa6";


export const CartSection = () => {
  return (
    <section className="cart-section">
      <div className="cart-main-card">
        <div className="cart-content">



          {/* LEFT SIDE - TABLE */}
          {/* Of Cart Products */}
          <div className="cart-left">
            <h1 className="cart-title">Your Cart</h1>
            <p className="cart-subtitle">
              There are <b>3</b> products in your cart
            </p>

            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="cart-product">
                        <img
                          src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"
                          alt="Shirt"
                          className="cart-product-img"
                        />
                        <div>
                          <h6 className="cart-product-name">Shirts</h6>
                          <Rating
                            name="read-only"
                            value={3}
                            precision={1}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td>$4.50</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$5.00</td>
                    <td className="remove-btn">
                      <IoIosClose />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="cart-product">
                        <img
                          src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"
                          alt="Shirt"
                          className="cart-product-img"
                        />
                        <div>
                          <h6 className="cart-product-name">Shirts</h6>
                          <Rating
                            name="read-only"
                            value={3}
                            precision={1}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td>$4.50</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$5.00</td>
                    <td className="remove-btn">
                      <IoIosClose />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="cart-product">
                        <img
                          src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"
                          alt="Shirt"
                          className="cart-product-img"
                        />
                        <div>
                          <h6 className="cart-product-name">Shirts</h6>
                          <Rating
                            name="read-only"
                            value={3}
                            precision={1}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td>$4.50</td>
                    <td>
                      <QuantityBox />
                    </td>
                    <td>$5.00</td>
                    <td className="remove-btn">
                      <IoIosClose />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SIDE - CART TOTALS */}
          {/* Of Total Items */}
          <div className="cart-totals-card">
            <div className="cart-totals-title">Cart Totals</div>
            <div className="cart-totals-row">
              <span>Subtotal</span>
              <span>$12.31</span>
            </div>
            <div className="cart-totals-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-totals-row">
              <span>Estimate for</span>
              <span>United Kingdom</span>
            </div>
            <div className="cart-totals-row cart-totals-total">
              <span>Total</span>
              <span>$12.31</span>
            </div>
            <Button
              variant="contained"
              className="add-to-cart-btn"
            >
              <FaCartShopping style={{ marginRight: 8 }} />
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
