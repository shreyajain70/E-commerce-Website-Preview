import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

export const SideBar = () => {
    const [shareValue, setShareValue] = React.useState([0, 100]);

    const handleShareChange = (event, newValue) => {
        setShareValue(newValue);
    };

    return (
        <div className="sidebar-container">
            {/* Product Categories */}
            <div className="filter-box">
                <h4 className="filter-title">Product Categories</h4>
                <div className="scrollable-list">
                    <ul>
                        <li>
                            <FormControlLabel control={<Checkbox />} label="Men" />
                            <FormControlLabel control={<Checkbox />} label="Women" />
                            <FormControlLabel control={<Checkbox />} label="Beauty" />
                            <FormControlLabel control={<Checkbox />} label="Kids" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Filter by Share */}
            <div className="filter-box">
                <h4 className="filter-title">Filter by Price</h4>
                <Slider
                    className="share-slider"
                    value={shareValue}
                    min={500}
                    max={10000}
                    onChange={handleShareChange}
                    valueLabelDisplay="auto"
                />
                <div className="slider-values">
                    <span>From: {shareValue[0]}</span>
                    <span>To: {shareValue[1]}</span>
                </div>
            </div>
            {/* Product status */}
            <div className="filter-box">
                <h4 className="filter-title">Product Status</h4>
                <div className="scrollable-list">
                    <ul>
                        <li>
                            <FormControlLabel control={<Checkbox />} label="In Stock" />
                            <FormControlLabel control={<Checkbox />} label="On Sale" />
                        </li>
                    </ul>
                </div>
            </div>
            {/* Brands */}
            <div className="filter-box">
                <h4 className="filter-title">Brands</h4>
                <div className="scrollable-list">
                    <ul>
                        <li>
                            <FormControlLabel control={<Checkbox />} label="SwiftCart" />
                            <FormControlLabel control={<Checkbox />} label="UrbanNest" />
                            <FormControlLabel control={<Checkbox />} label="BeautyShopora" />
                            <FormControlLabel control={<Checkbox />} label="NovaMart" />
                             <FormControlLabel control={<Checkbox />} label="TrendHive" />
                            <FormControlLabel control={<Checkbox />} label="Cartique" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
