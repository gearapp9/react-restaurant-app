import { createContext, useEffect, useState } from "react";
import { Restaurant } from "../models/Restaurant";

type ContextProp = {
  children: React.ReactNode;
};
type RestaurantContexProps = {
  restaurantList: Restaurant[];
  addRestaurants: (data: Restaurant[]) => void;
};
export const RestaurantContex = createContext<RestaurantContexProps>(
  {} as RestaurantContexProps
);

export const RestaurantProvider = ({ children }: ContextProp) => {
  const [restaurantList, setRestaurants] = useState<Restaurant[]>([]);
  
  const addRestaurants = (data: Restaurant[]) => {
    useEffect(()=>{
    setRestaurants(data);

    },[])
  };
  const value = { restaurantList, addRestaurants };

  return (
    <RestaurantContex.Provider value={value}>
      {children}
    </RestaurantContex.Provider>
  );
};
