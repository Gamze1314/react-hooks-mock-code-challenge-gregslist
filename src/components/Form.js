import React, { useState } from "react";

function Form({ setListings }) {
  const [formData , setFormData] = useState({
    description: "",
    image: "",
    location: "",
  });

console.log(formData);

function handleSubmit(e) {
  e.preventDefault();

  const newListing = {
    description: formData.description,
    image: formData.image,
    location: formData.location,
  };

  //send POST request to the server, and update the state
  fetch("http://localhost:6001/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newListing),
  })
    .then((res) => res.json())
    .then((data) => {
      setListings((prevListings) => [...prevListings, data]);
    })

}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Product Description</label>
      <input
        type="text"
        id="description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        id="image"
        value={formData.image}
        onChange={(e) =>
          setFormData({ ...formData, image: e.target.value })
        }
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={formData.location}
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
