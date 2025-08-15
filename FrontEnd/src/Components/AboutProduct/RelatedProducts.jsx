import React from "react";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";



export const RelatedProducts = ()=>{
    return(
        <>
          {/* Related Products Section */}
        <div className="main-heading-container">
          <h3 className="main-heading-title">Related Products</h3>
        </div>
          <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="product-swiper"
            >
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>


 <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

               {/* Recently Viewed Products Section */}
        <div className="main-heading-container">
          <h3 className="main-heading-title">Recently Viewed Products</h3>
        </div>
          <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="product-swiper"
            >
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>


 <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T2121_986590.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">28%</span>
                            <div className="product-icons">
                                <button
                                    className="icon-btn"
                                    onClick={() => { ViewProductDetails(1) }}
                                >
                                    <AiOutlineFullscreen />
                                </button>
                                <button className="icon-btn"><FaRegHeart /></button>
                            </div>
                        </div>
                        <h3 className="product-title">Werther's Original Caramel Hard Candies</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={5} readOnly />
                        <div className="price-container">
                            <span className="old-price">$20.00</span>
                            <span className="new-price">$14.00</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    )
}