import React from "react";
import { Link } from "react-router-dom";
import "./InventoryItem.css";
import "./ProductDetail";

function InventoryItem( { item }) {
    return (
<Link to={`${item.sku}`} state={{ item }} style={{textDecoration: 'none'}}>
        <div className="item">
            <h3>{item.name}</h3>
            <p>SKU: {item.sku}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
        </div>
        </Link>
    );
}
//function for each Inventory Item which takes the item prop and creates the html object
export default InventoryItem;