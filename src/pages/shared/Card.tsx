import "./card.css";

import { Restaurant } from "../../models/Restaurant";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
type CardProps = {
  restaurant: Restaurant;
  cardClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Card = ({ restaurant, cardClick }: CardProps) => {
  const { id, img, name, description_short } = restaurant;
  const { getLocalStorage } = useContext(FavoritesContext);

  const favs = getLocalStorage();
  return (
    <div className="card" id={id.toString()} onClick={cardClick}>
      <div
        className={`fav ${
          favs.some((val) => val === id.toString()) ? "favt" : "favf"
        }`}
        id="fav"
      >
        <div className="add-to-fav">{`${
          favs.some((val) => val === id.toString())
            ? "Remove From Fav"
            : "Add To Fav"
        }`}</div>
      </div>

      <img src={img} alt="restaurant" />
      <div className="text">
        <h3>{name}</h3>
        <p>{description_short}</p>
      </div>

     
    </div>
  );
};
