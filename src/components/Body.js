import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

AppBody = () => {
  // Local State Variable - Super Powerfull Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let updatedRestaurantList = restaurantList.map((res) => {
      let arr = {
        ...res,
        data: { ...res.data, name: res.data.name + " Hi" },
      };
      return arr;
    });

    setTimeout(() => {
      setListOfRestaurants(updatedRestaurantList);
      setFilteredRes(updatedRestaurantList);
    });
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the Cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRes(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterdList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
