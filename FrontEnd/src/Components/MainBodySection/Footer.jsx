import React from "react";


const footerData = [
  {
    heading: "FRUIT & VEGETABLES",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Packaged Produce",
      "Party Trays",
    ],
  },
  {
    heading: "BREAKFAST & DAIRY",
    items: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
  {
    heading: "MEAT & SEAFOOD",
    items: [
      "Breakfast Sausage",
      "Dinner Sausage",
      "Beef",
      "Chicken",
      "Sliced Deli Meat",
      "Shrimp",
      "Wild Caught Fillets",
      "Crab and Shellfish",
      "Farm Raised Fillets",
    ],
  },
  {
    heading: "BEVERAGES",
    items: [
      "Water",
      "Sparkling Water",
      "Soda & Pop",
      "Coffee",
      "Milk & Plant-Based Milk",
      "Tea & Kombucha",
      "Drink Boxes & Pouches",
      "Craft Beer",
      "Wine",
    ],
  },
  {
    heading: "BREADS & BAKERY",
    items: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-columns">
      {footerData.map((column, idx) => (
        <div className="footer-column" key={idx}>
          <h4 className="footer-heading">{column.heading}</h4>
          <ul className="footer-list">
            {column.items.map((item, itemIdx) => (
              <li key={itemIdx} className="footer-list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;
