import { createContext, useState } from "react";
import { favType } from "../models/FavType";

type ContextProp = {
  children: React.ReactNode;
};
type FavoritesContextProps = {
  removeFav: boolean;
  favoriteList: String[];
  toggleFavorite: (fav: favType) => void;
  getLocalStorage: () => string[];
  setLocalStorage: () => void;
  toggleRemoveFav: () => void;
  reSetFavList: () => void;
};

export const FavoritesContext = createContext({} as FavoritesContextProps);

export const FavoritesProvider = ({ children }: ContextProp) => {
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };

  const [favoriteList, setFavorites] = useState<String[]>(
    getLocalStorage().length ? getLocalStorage() : []
  );
  const [removeFav, setRemoveFav] = useState<boolean>(false);

  const toggleFavorite = (fav: favType) => {
    if (fav.isFav) {
      favoriteList.push(fav.favId);
    } else {
      favoriteList.splice(
        favoriteList.findIndex((i) => i === fav.favId),
        1
      );
    }
    //state don't change unless we creating new array
    setFavorites(favoriteList.map((val) => val));
  };

  const toggleRemoveFav = () => {
    if (removeFav) {
      setRemoveFav(false);
      return;
    }
    setRemoveFav(true);
  };

  const setLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
  };

  const reSetFavList = () => {
    setFavorites(getLocalStorage().length ? getLocalStorage() : []);
  };

  const value = {
    removeFav,
    favoriteList,
    toggleFavorite,
    getLocalStorage,
    setLocalStorage,
    toggleRemoveFav,
    reSetFavList,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
