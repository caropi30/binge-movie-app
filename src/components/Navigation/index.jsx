import React from "react";
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

const NavigationBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-first">
          <NavButton icon={LogoMenuIcon("#FC4747")} />
        </div>
        <div className="nav-second">
          <NavButton
            classN="nav-second--secondBox-btn"
            icon={MainMenuIcon("#5A698F")}
          />
          <NavButton
            classN="nav-second--secondBox-btn"
            icon={FilmMenuIcon("#5A698F")}
          />
          <NavButton
            classN="nav-second--secondBox-btn"
            icon={TvMenuIcon("#5A698F")}
          />
          <NavButton
            classN="nav-second--secondBox-btn"
            icon={BookedMenuIcon("#5A698F")}
          />
        </div>
        <div className="nav-third">
          <UserButton classN="nav-third--usr-btn" src={usrImg} />
        </div>
      </div>
    </>
  );
};

export { NavigationBar };
