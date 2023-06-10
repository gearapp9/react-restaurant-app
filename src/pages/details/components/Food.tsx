import pizza from "../../../assets/pizza.jpg";

type FoodProp = {
  dish: string;
};

export const Food = ({ dish }: FoodProp) => {
  return (
    <div className="food-card">
      <img src={pizza} alt="" />
      <p>{dish}</p>
      <span>300 euro</span>
    </div>
  );
};
