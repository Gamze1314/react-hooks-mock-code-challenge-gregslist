import React, { useState } from "react";

function Form({ setListings, listings }) {
  const [newListing, setNewListing] = useState({
    description: "",
    image: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      description: e.target.description.value,
      image: e.target.image.value,
      location: e.target.location.value,
    };

    // Update the state with the new form data
    setNewListing(formData);

    // Send the form data to the backend
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));

    // Update the state with the new listings data
    setListings([...listings, formData]);

    // Clear the form fields after submission
    setNewListing({
      description: "",
      image: "",
      location: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
