import { Route, Routes } from "react-router-dom";
import { Header } from "./pages/shared/Header";
import { Landing } from "./pages/landing/Landing";
import { HomePage } from "./pages/homepage/HomePage";
import { Details } from "./pages/details/Details";
import { Favorites } from "./pages/favorites/Favorites";


const App = () => {
  // so as we say, the Header does not need to be routed
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
