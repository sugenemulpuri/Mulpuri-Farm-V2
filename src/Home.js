import React, { useEffect, useState } from "react";
import './App.css';
import InventoryList from "./InventoryList";

function Home() {

  const [inventory, setInventory] = useState([]);
  //data is assigned to inventory and setInventory function updates it to be used

  useEffect(() => {
    fetch("./data/inventory.json")
    .then((res) => res.json())
    .then((data) => setInventory(data))
    .catch((err) => console.error("Failed to load inventory", err));
  }, []);

  //data is fetched and fed to setInventory to use in app


  return (
   
      <div className="App">
        <div className="App-body">
<h1>
  What We Have in Stock
</h1>
</div>
      <div className="Inventory-section"><InventoryList items={inventory} /></div>
      </div>
    
 );
}

export default Home;