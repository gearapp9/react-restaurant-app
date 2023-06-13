import "./card.css";

import { Restaurant } from "../../models/Restaurant";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FavIcon } from "./FavIcon";
type CardProps = {
  restaurant: Restaurant;
};

export const Card = ({ restaurant }: CardProps) => {
  const { id, img, name, description_short } = restaurant;

  const navigate = useNavigate();

  const cardClick = (e: React.MouseEvent<HTMLElement>) => {
    const elment = e.target as HTMLElement;
    if (elment.id === "fav") {
      return;
    }

    navigate({
      pathname: "/details",
      search: createSearchParams({
        id: `${elment.closest(".card")?.id}`,
      }).toString(),
    });
  };

  return (
    <div
      className="card fav-icon-position"
      id={id.toString()}
      onClick={cardClick}
    >
      <FavIcon id={id} />
      <img src={img} alt="restaurant" />
      <div className="text">
        <h3>{name}</h3>
        <p>{description_short}</p>
      </div>
    </div>
  );
};
