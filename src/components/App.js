import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

function App() {
  // state lifted up from ListingsContainer
  const [listings, setListings] = useState([]);

  return (
    <div className="app">
      <Header setListings={setListings} listings={listings} />
      <Form setListings={setListings} listings={listings} />
      <ListingsContainer setListings={setListings} listings={listings} />
    </div>
  );
}

export default App;
