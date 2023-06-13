import "./description.css";

import { Restaurant } from "../../../models/Restaurant";
import { FavIcon } from "../../shared/FavIcon";

type DescriptionProps = {
  restaurant: Restaurant;
};

export const Description = ({ restaurant }: DescriptionProps) => {
  const { id } = restaurant;

  return (
    <div className="content fav-icon-position">
     
      <div className="image ">
      <FavIcon id={id} />
        <img src={restaurant?.img} alt="" />
      </div>
      <div className="description ">
        <ul className="labels">
          <li>Name</li>
          <li>Adress</li>
          <li>Description</li>
        </ul>

        <ul className="text">
          <li>{restaurant?.name}</li>
          <li>{restaurant?.address}</li>
          <li>{restaurant?.description_long}</li>
        </ul>
      </div>
    </div>
  );
};
