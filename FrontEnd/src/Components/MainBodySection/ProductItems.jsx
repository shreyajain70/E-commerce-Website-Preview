import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ProductModel } from "./ProductModel";

export const ProductItems = () => {

    const [isOpenProductModel, setisOpenProductModel] = useState(false);

    const ViewProductDetails = (id) => {
        setisOpenProductModel(true);
    };

    const closeProductModel = () => {
        setisOpenProductModel(false)
    }

    return (
        <>

        {/* Honey Product */}
            <Swiper
                slidesPerView={4}
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

            {/* Almond Product */}
            <Swiper
                slidesPerView={4}
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
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>

<SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://hips.hearstapps.com/hmg-prod/images/766/03-best-individually-packaged-foods-1522242225.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">8%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds</h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={4} readOnly />
                        <div className="price-container">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Salt Product */}
            <Swiper
                slidesPerView={4}
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
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img-container">
                            <img
                                className="product-img"
                                src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg"
                                alt="Product"
                            />
                            <span className="discount-badge">15%</span>
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
                        <h3 className="product-title">Blue Diamond Almonds </h3>
                        <span className="in-stock">In Stock</span>
                        <Rating name="read-only" value={3} readOnly />
                        <div className="price-container">
                            <span className="old-price">$25.00</span>
                            <span className="new-price">$20.00</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {isOpenProductModel && <ProductModel closeProductModel={closeProductModel} />}
        </>
    );
};
