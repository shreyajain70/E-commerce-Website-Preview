import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ()=>{
    return(
        <>
        
                        <div className="Search-UI">
                            <input type="text" placeholder="Search Products here.." />
                            <button>
                                <FaSearch />
                            </button>
                        </div>
         
        </>
    )
}