import React, { useState } from "react";
import "./index.scss";
import { NavButton } from "../Buttons/NavigationButton";
import {
  LogoMenuIcon,
  BookedMenuIcon,
  MainMenuIcon,
  FilmMenuIcon,
  TvMenuIcon,
} from "../Icons/index";
import { UserButton } from "../Buttons/UserButton";
import usrImg from "../../assets/usr.png";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  //const [iconColor, setIconColor] = useState(true)
  return (
    <>
      <div className="nav">
        <div className="nav-first">
          <NavButton icon={LogoMenuIcon()} />
        </div>
        <div className="nav-second">
          <NavLink to="/">
            <NavButton
              classN="nav-second--secondBox-btn"
              icon={MainMenuIcon("#5A698F")}
            />
          </NavLink>
          <NavLink to="movies">
            {" "}
            <NavButton
              classN="nav-second--secondBox-btn"
              icon={FilmMenuIcon("#5A698F")}
            />
          </NavLink>
          <NavLink to="tv">
            {" "}
            <NavButton
              classN="nav-second--secondBox-btn"
              icon={TvMenuIcon("#5A698F")}
            />
          </NavLink>
          <NavLink to="booked">
            <NavButton
              classN="nav-second--secondBox-btn"
              icon={BookedMenuIcon("#5A698F")}
            />
          </NavLink>
        </div>
        <div className="nav-third">
          <NavLink to="account">
            <UserButton classN="nav-third--usr-btn" src={usrImg} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export { NavigationBar };
