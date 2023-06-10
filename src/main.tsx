import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider } from "./contexts/HeaderContext.tsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.tsx";
import { RestaurantProvider } from "./contexts/RestaurantContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <FavoritesProvider>
          <RestaurantProvider>
            <App />
          </RestaurantProvider>
        </FavoritesProvider>
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
