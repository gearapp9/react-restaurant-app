import { useLocation } from "react-router-dom";
import { Description } from "./components/Description";
import { Menu } from "./components/Menu";
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import { RestaurantContex } from "../../contexts/RestaurantContext";

export const Details = () => {
  const { state } = useLocation();
  const id = state?.id;
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("Details");

  
  const { restaurantList } = useContext(RestaurantContex);

  const restaurant = restaurantList.find((res) => res.id.toString() === id);

  return (
    <section className="detail">
      <div className="container">
        <Description restaurant={restaurant} />
        <Menu menu={restaurant?.menu} />
      </div>
    </section>
  );
};
