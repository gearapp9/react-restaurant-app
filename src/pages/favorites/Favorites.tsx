import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import { CardsContainer } from "../shared/CardsContainer";
import "./favorites.css";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Restaurant } from "../../models/Restaurant";
import { RestaurantContex } from "../../contexts/RestaurantContext";

export const Favorites = () => {
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("favorites");

  const { restaurantList } = useContext(RestaurantContex);

  // You did not need to share the access to the local storage
  // You could have had a state variable in the Fav context returning the FavoritesIds and
  // let the context handle the local storage in private
  const { getLocalStorage } = useContext(FavoritesContext);
  const favList = getLocalStorage();
  
  const favRestaurants = ():Restaurant[] => {
    return restaurantList.filter((rest) => favList.includes(rest.id.toString()));
  };
  

  return (
    <section className="favorites">
      <div className="container">
        <h2>Favorite Reastaurants</h2>
        <CardsContainer restaurants={favRestaurants()} />
      </div>
    </section>
  );
};
