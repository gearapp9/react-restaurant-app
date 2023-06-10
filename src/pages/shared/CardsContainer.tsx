import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../models/Restaurant";
import { Card } from "./Card";
import "./cards-container.css";
import React, { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { RemoveFavPop } from "./RemoveFavPop";

type CardsContainerProps = {
  restaurants: Restaurant[];
};

export const CardsContainer = ({ restaurants }: CardsContainerProps) => {
  // prettier-ignore
  const {toggleRemoveFav, toggleFavorite, setLocalStorage } = useContext(FavoritesContext);

  const navigate = useNavigate();

  const cardClick = (e: React.MouseEvent<HTMLElement>) => {
    const elment = e.target as HTMLElement;
    if (elment.id === "fav") {
      toggleFavIcon(elment);

      return;
    }
    navigate("/details", {
      state: {
        id: elment.closest(".card")?.id,
      },
    });
  };

  const toggleFavIcon = (elment: HTMLElement) => {
    const id = elment.closest(".card")?.id || "";
    if (elment.className.includes("favf")) {
      toggleFavorite({
        favId: id,
        isFav: true,
      });
      setLocalStorage();
    } else {
      toggleRemoveFav();
      toggleFavorite({
        favId: id,
        isFav: false,
      });
    }
  };

  return (
    <div className="cards-container">
      {restaurants.map((restaurant) => {
        return (
          <Card
            key={restaurant.id}
            restaurant={restaurant}
            cardClick={cardClick}
          />
        );
      })}
      <RemoveFavPop />
    </div>
  );
};
