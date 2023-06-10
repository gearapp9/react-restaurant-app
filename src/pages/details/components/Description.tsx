import "./description.css";

import { Restaurant } from "../../../models/Restaurant";

type DescriptionProps = {
  restaurant: Restaurant | undefined;
};

export const Description = ({ restaurant }: DescriptionProps) => {
  return (
    <div className="content">
      <div className="image">
        <img src={restaurant?.img} alt="" />
      </div>
      <div className="description">
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
