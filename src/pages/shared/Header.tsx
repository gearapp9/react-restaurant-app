import { Fragment, useContext } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext";
export const Header = () => {
  const { headerType } = useContext(HeaderContext);

  return (
    <Fragment>
      <header
        className={`${
          headerType === "landing" ? "landing-header" : "home-header"
        }`}
      >
        <div
          className={`container ${
            headerType === "landing"
              ? "landing-header-container"
              : "home-header-container"
          }`}
        >
          <div className="header-logo">
            <Link to={"/"} className="logo">
              Reactaurant
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav-links">
              {/* <Link
                to={"/sign-in"}
                className={`${headerType === "sign-in" ? "hide" : ""}`}
              >
                <li className="sign-in head-btn">Sign In</li>
              </Link> */}
              {/* <Link
                to={"/sign-up"}
                className={`${headerType === "sign-up" ? "hide" : ""}`}
              >
                <li className="sign-up head-btn">Sign Up</li>
              </Link> */}

              <Link
                to={"/Home"}
                className={`${headerType === "Homepage" ? "hide" : ""}`}
              >
                <li className="head-btn">{`${
                  headerType !== "landing" ? "Home" : "Log In"
                }`}</li>
              </Link>

              <Link
                to={"/favorites"}
                className={`${headerType === "favorites" ? "hide" : ""}`}
              >
                <li className="head-btn">Favorites</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
