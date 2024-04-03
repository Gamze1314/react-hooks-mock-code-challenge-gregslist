import React, { useState , useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
     .then((res) => res.json())
     .then((data) => {
        setListings(data);
      });
  }, [])

console.log(listings)

  return (
    <div className="app">
      <Header setListings={setListings} listings={listings} />
      <Form setListings={setListings} listings={listings} />
      <ListingsContainer setListings={setListings} listings={listings} />
    </div>
  );
}

export default App;
