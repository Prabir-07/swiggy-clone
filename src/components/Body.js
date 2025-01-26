import RestaurantCard from './RestaurantCard.js';
import resList from '../utils/resList.js';
import { useState } from 'react';

const Body = () => {

  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className='body'>
            <div className='filter'>
                <button 
                  className='filter-btn' 
                  onClick = {() => {
                    const filteredList =  resList.filter(
                      (res)=>res.info.avgRating > 4.3
                    )
                    setListOfRestaurants(filteredList);
                }}>
                  Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
              {
                ListOfRestaurants.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>))
              }
            </div>
        </div>
    )
}

export default Body;