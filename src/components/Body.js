import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineHome,
} from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi";
import { BiDollar, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [AllList, setAllList] = useState([]);
  const [SearchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.983672109642054&lng=79.53181611032477&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log(ListOfRestaurants);
  const handleTopRated = () => {
    const filteredList = ListOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setListOfRestaurants(filteredList);
  };

  const handleSearch = () => {
    const newList = ListOfRestaurants.filter(
      (res) => res.info.name === SearchText
    );
    setListOfRestaurants(newList);
  };

  const handlePopularRest = () => {
    const newList = ListOfRestaurants.filter(
      (res) => parseFloat(res.info.totalRatingsString) > 9
    );
    setListOfRestaurants(newList)
  }

  const handleFastDeliveryRest = () => {
    const newList = ListOfRestaurants.filter(
      (res) => parseFloat(res.info.sla.slaString.substring(0, 2)) <= 20
    );
    setListOfRestaurants(newList)
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <FiSearch className="search-icon" />
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setListOfRestaurants(AllList);
            }}
          >
            <AiOutlineHome className="filter-icon" />
            Home
          </button>

          <button className="filter-btn" onClick={handleTopRated}>
            <AiOutlineStar className="filter-icon" />
            Top Rated
          </button>

          <button className="filter-btn" onClick={handleFastDeliveryRest}>
            <AiOutlineClockCircle className="filter-icon" />
            Fast Delivery
          </button>

          <button className="filter-btn" onClick={handlePopularRest}>
            <HiOutlineFire className="filter-icon" />
            Popular
          </button>

          <button className="filter-btn">
            <BiDollar className="filter-icon" />
            Offers
          </button>
        </div>
      </div>

      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
