import React from "react";
import etsy from "./data/etsy.json";
import Listing, { type ListingItem } from "./components/Listing";
import "./App.css";

function App(): React.JSX.Element {
  return (
    <div className="container">
      <Listing items={etsy as ListingItem[]} />
    </div>
  );
}

export default App;
