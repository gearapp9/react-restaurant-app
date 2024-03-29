import { Food } from "./Food";

type FoodContainerProps = {
  dishType: string;
  dish: string[];
};

export const FoodContainer = ({ dishType, dish }: FoodContainerProps) => {
  return (
    <div className="menu-content">
      <h3>{dishType}</h3>
      <div className="foods">
        {dish.map((val,i)=><Food key={i} dish={val}/>)}
      </div>
    </div>
  );
};
