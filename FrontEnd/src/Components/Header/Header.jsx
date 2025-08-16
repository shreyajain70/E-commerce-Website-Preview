import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import CountryDropdown from "./CountryDropdown";
import { SearchBar } from "./SearchBar";
import { NavCategoryFile } from "./NavCategoryFile";
import { Link } from "react-router-dom";

export const Header = ()=>{
    return(
        <>
          <div className="Header-container">
                <div className="logo-div">
                    <img
                        className="logo"
                        src="https://i.pinimg.com/736x/51/60/ac/5160ac8aafcad38b85208a7b6bfdbd07.jpg"
                        alt="logo"
                    />
                </div>

                <CountryDropdown></CountryDropdown>
                <SearchBar></SearchBar>



                <div className="User-Cart-Wrapper">
                    <div className="Login-UI">
                        <Link to={"/SignUpPage"}><button>
                            <FaUser />
                        </button></Link>
                    </div>
                    <div className="Cart-UI">
                      <Link to={"/AddToCart"}> <button>
                            <FaCartArrowDown />
                        </button></Link> 
                        <span className="cart-count">1</span>
                    </div>
                </div>
            </div>

            <NavCategoryFile></NavCategoryFile>
        </>
    )
}