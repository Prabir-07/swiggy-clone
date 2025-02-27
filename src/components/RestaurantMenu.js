import React from "react";
import "./RestaurantMenu.css";
import { useState, useEffect } from "react";
import resShimmer from "./resShimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <resShimmer />;

  const {
    name,
    avgRatingString,
    totalRatingString,
    costForTwoMessage,
    sla,
    cuisines,
    areaname,
  } = resInfo?.cards[2].card?.card?.info;

  const offers = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  
  return (
    <div className="restaurant-menu">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <h1 className="restaurant-name">{name}</h1>
        <div className="restaurant-info">
          <span className="rating">
            ⭐ {avgRatingString} ({totalRatingString})
          </span>
          <span className="price">{costForTwoMessage}</span>
          <span className="categories">{cuisines.join(", ")}</span>
          <span className="location">Outlet: {areaname}</span>
          <span className="delivery-time">{sla.slaString}</span>
        </div>
      </div>

      {/* Deals Section */}
      <div className="deals-section">
        {offers.map((offer, index) => {
          <button key={index} className="deal">
            {offer.info.header}
          </button>;
        })}
      </div>

      {/* Menu Section */}
      <div className="menu-section">
        <h2 className="menu-title">MENU</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for dishes"
        />
      </div>

      {/* Recommended Section */}
      <div className="recommended-section">
        <h3>Recommended ({itemCards.length})</h3>

        {itemCards.map((item, index) => (
          <MenuItem key = {index} item = {item}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
