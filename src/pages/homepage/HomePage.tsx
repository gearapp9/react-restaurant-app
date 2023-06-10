import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import { CardsContainer } from "../shared/CardsContainer";
import { restaurants } from "../../data/data";
import "./home-page.css";
import { RestaurantContex } from "../../contexts/RestaurantContext";

export const HomePage = () => {
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("Homepage");

  const { restaurantList, addRestaurants } = useContext(RestaurantContex);
  addRestaurants(restaurants);
  
  return (
    <section className="home">
      <div className="container">
        <h2>Reastaurants</h2>
        <CardsContainer restaurants={restaurantList} />
      </div>
    </section>
  );
};
