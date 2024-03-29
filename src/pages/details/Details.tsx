import { useLocation, useSearchParams } from "react-router-dom";
import { Description } from "./components/Description";
import { Menu } from "./components/Menu";
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import { RestaurantContex } from "../../contexts/RestaurantContext";
import { Restaurant } from "../../models/Restaurant";
import { RemoveFavPop } from "../shared/RemoveFavPop";
import "./details.css";

export const Details = () => {
  
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  
  const id = searchParams.get("id");
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("Details");

  const { restaurantList } = useContext(RestaurantContex);

  const restaurant = restaurantList.find(
    (res) => res.id.toString() === id
  ) as Restaurant;

  return (
    <section className="detail">
      <div className="container">
        <Description restaurant={restaurant} />
        <Menu menu={restaurant?.menu} />
      </div>
      <RemoveFavPop />
    </section>
  );
};
