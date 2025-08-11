import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { FaSearch, FaTimes, FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";

const CountryDropdown = () => {
  // State to control modal visibility
  const [isOpenModel, setIsOpenModel] = useState(false);

  // State for selected country
  const [selectedCountry, setSelectedCountry] = useState("India");

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // List of countries
  const countries = [
    "India", "Sri Lanka", "United States", "Canada", "Australia",
    "United Kingdom", "China", "Japan", "Germany", "France",
    "Brazil", "South Africa", "Russia", "Singapore", "Italy",
    "Spain", "Mexico", "Indonesia", "Pakistan", "Bangladesh",
    "Turkey", "New Zealand", "Saudi Arabia", "Nigeria", "Argentina"
  ];

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpenModel(false);
    setSearchTerm(""); // reset search after selection
  };

  return (
    <>
      {/* Location button */}
      <div className="location-dropdown">
        <button className="location-btn" onClick={() => setIsOpenModel(true)}>
          Your Location{" "}
          <span className="Location-Dropdown-angle">
            <FaAngleDown />
          </span>
          <div>
            <span className="location-label">{selectedCountry}</span>
          </div>
        </button>
      </div>

      {/* Country selection dialog */}
      <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)} className="locationModel">
        {/* Close button */}
        <button onClick={() => setIsOpenModel(false)} className="close-btn" aria-label="Close dialog">
          <FaTimes />
        </button>

        <h2>Choose Your Delivery Location</h2>
        <p>Enter your address and we will specify the offer for your area.</p>

        {/* Search input */}
        <div className="Search-UI">
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Country list */}
        <ul className="CountryList">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li key={index}>
                <Button onClick={() => handleCountrySelect(country)}>
                  {country}
                </Button>
              </li>
            ))
          ) : (
            <li style={{ padding: "10px", textAlign: "center" }}>No results found</li>
          )}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
