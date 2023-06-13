
import { Restaurant } from "../../models/Restaurant";
import { Card } from "./Card";
import "./cards-container.css";
import { RemoveFavPop } from "./RemoveFavPop";

type CardsContainerProps = {
  restaurants: Restaurant[];
};

export const CardsContainer = ({ restaurants }: CardsContainerProps) => {
 
  return (
    <div className="cards-container">
      {restaurants.map((restaurant) => {
        return (
          <Card
            key={restaurant.id}
            restaurant={restaurant}
          />
        );
      })}
      <RemoveFavPop />
    </div>
  );
};
