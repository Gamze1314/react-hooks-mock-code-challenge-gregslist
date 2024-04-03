import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ setListings, listings }) {
  const [isSorted, setIsSorted] = useState(false);
  

  function handleDelete(id) { 
    // console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
      // Update state after successful deletion
        const updatedLis = listings.filter((li) => li.id !== id);
        setListings(updatedLis);
     });
    };
  

  // return ListingCards for each listing and store it in a variable
  const lis = listings.map((li) => {
    return (
      <ListingCard
        key={li.description}
        id={li.id} // Pass the id prop => for delete functionality
        description={li.description}
        location={li.location}
        image={li.image}
        onDeleteListing={handleDelete}
      />
    );
  });

  // sort the listing alphabetically by location
  function sortByLocation() {
    const sortedListings = [...listings].sort((a, b) => {
      const locationA = a.location.toUpperCase();
      const locationB = b.location.toUpperCase();

      if (locationA > locationB) {
        return -1;
      }

      if (locationA < locationB) {
        // compares name properties' values
        return 1;
      }
      return 0;
    });

    // Update the state indicating the current sorting method
    setIsSorted(!isSorted);
    setListings(sortedListings);
    // Trigger re-render by updating the state with the sorted array
  }

  return (
    <main>
      <button onClick={sortByLocation}>Sort by Location</button>
      <ul className="cards">{lis}</ul>
    </main>
  );
}

export default ListingsContainer;
