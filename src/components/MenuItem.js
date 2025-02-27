import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, price, description, imageId, ratings, offerTags } =
    item.card.info;

  return (
    <div className="menu-item">
      {/* Left Section: Details */}
      <div className="menu-details">
        <h4 className="item-name">{name}</h4>
        <span className="item-price">₹{price / 100}</span>
        {offerTags?.length > 0 && (
          <span className="item-offer">
            {offerTags[0].title} <small>{offerTags[0].subTitle}</small>
          </span>
        )}
        <div className="rating">
          <span className="star">⭐</span>{" "}
          {ratings?.aggregatedRating?.rating || "N/A"} (
          {ratings?.aggregatedRating?.ratingCount || "0"})
        </div>
        <p className="item-description">{description}</p>
      </div>

      {/* Right Section: Image & Button */}
      <div className="menu-image-container">
        <img
          className="menu-image"
          src={`https://media-assets.swiggy.com/${imageId}`}
          alt={name}
        />
        <button className="add-button">ADD</button>
      </div>
    </div>
  );
};

export default MenuItem;
