import React, { useState } from "react";

function ListingCard({ id, image, description, location, onDeleteListing }) {
  // clicking on star icon will activate star icon
  // onClick event on both stars
  // event handler => toggle classNames active/emoji button
  const [isActive, setIsActive] = useState(true);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isActive ? (
          <button
            onClick={() => setIsActive(!isActive)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setIsActive(!isActive)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          onClick={() => onDeleteListing(id)}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
