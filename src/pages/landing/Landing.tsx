import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import "./landing.css";
export const Landing = () => {
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("landing");

  
  return (
    <section className="landing">
      <div className="overlay"></div>
      <div className="text">
        <h1>Welcome to Reactaurant</h1>
        <p>
          Discover the best restaurants in Paris on Reactaurant! Order food
          delivery and takeout from places to eat in location near you.
        </p>
      </div>
    </section>
  );
};
