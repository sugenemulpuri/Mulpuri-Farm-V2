import React from "react";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function ProductDetail( { item: propItem }) {

const location = useLocation();

  const item = propItem || location.state?.item;
    return (
        <div className="App">
        <div className="itemDetail">
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <h3>{item.name}</h3>
          <p>SKU: {item.sku}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
        <br />
        <br />
        <Link to="/" >
        <button>Home</button>
        </Link>
        <br />
        <br />
        </div>
      );
}
//function for each Inventory Item which takes the item prop and creates the html object
export default ProductDetail;