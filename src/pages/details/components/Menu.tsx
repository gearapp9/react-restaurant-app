import { Restaurant } from "../../../models/Restaurant";
import { FoodContainer } from "./FoodContainer";
import "./menu.css";

type MenuProps = {
  menu: Restaurant["menu"] | undefined;
};

export const Menu = ({ menu }: MenuProps) => {
  const foodMenu = menu || {};

  const dishType = Object.keys(foodMenu) as string[];
  const dish = Object.values(foodMenu) as string[][];

  return (
    <div className="menu">
      <h2>Menu</h2>
      {dishType.map((value, i) => (
        //change
        <FoodContainer key={value} dishType={value} dish={dish[i]} />
      ))}
    </div>
  );
};
