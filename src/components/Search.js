import React, { useState } from "react";

// use state to hold user input
// filter listings by name => ListingsContainer will render filtered listings
// lift listings state up to App component then pass down data as prop ( listings, setListings.)
// send information from Search to App component with CB "onSearchListing" => will then update state in App

function Search({ listings, setListings }) {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    const updatedListings = listings.filter((listing) => {
      return (
        listing.description.toLowerCase().includes(searchText.toLowerCase()) ||
        listing.description.toLowerCase() === searchText.toLowerCase()
      );
    });
    setListings(updatedListings);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
