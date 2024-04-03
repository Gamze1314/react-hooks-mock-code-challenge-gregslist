import React, { useState } from "react";

function Form({ setListings, listings }) {
  const [newListing, setNewListing] = useState({
    description: "",
    image: "",
    location: "",
  });



  return (
    <form >
      <label htmlFor="description">Product Description</label>
      <input
        type="text"
        id="description"
        value={newListing.description}
        onChange={(e) =>
          setNewListing({ ...newListing, description: e.target.value })
        }
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        id="image"
        value={newListing.image}
        onChange={(e) =>
          setNewListing({ ...newListing, image: e.target.value })
        }
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={newListing.location}
        onChange={(e) =>
          setNewListing({ ...newListing, location: e.target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
