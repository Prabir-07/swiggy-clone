import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    locality
  } = resData?.info
  return (
    <div className="res-card">
      {/* Image Section */}
      <div className="res-img-container">
        <img
          className="res-img"
          src={IMG_URL + cloudinaryImageId}
        />
      </div>

      {/* Text Section */}
      <div className="res-info">
        <h3 className="res-title">{name}</h3>
        <div className="res-details">
          <span className="res-rating">⭐ {avgRating} </span>
          <span className="res-time">• {sla.slaString} </span>
        </div>
        <p className="res-cuisines"> {cuisines.join(", ")} </p>
        <p className="res-location">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;