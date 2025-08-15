import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import Button from "@mui/material/Button";


 const QuantityBox = () => {

    const [inputVal, setInputVal]= useState(1)

    function MinusFunc(){
if(inputVal!==1 && inputVal>0){
    setInputVal(inputVal-1)
}
    }

    function PlusFunc(){
        setInputVal(inputVal+1)
    }
    return (
        <>
            <div className="ProductModel-quantity">
                <button onClick={MinusFunc}>
                    <FiMinus />
                </button>
                <input type="text" value={inputVal} />
                <button onClick={PlusFunc}>
                    <IoAdd />
                </button>
            </div>

        </>
    )
}
export default QuantityBox;