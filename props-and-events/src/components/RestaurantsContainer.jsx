import Restaurant from "./Restaurant.jsx";
import { restaurants } from "../data/data.js"

// Higher order component
// These containers are for behind the scene logic
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
