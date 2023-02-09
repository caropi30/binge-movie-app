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
          <div className="nav-first--firstBox">
            <NavButton icon={LogoMenuIcon("#FC4747")} />
          </div>
          <div className="nav-first--secondBox">
            <NavButton
              classN="nav-first--secondBox-btn"
              icon={MainMenuIcon("#5A698F")}
            />
            <NavButton
              classN="nav-first--secondBox-btn"
              icon={FilmMenuIcon("#5A698F")}
            />
            <NavButton
              classN="nav-first--secondBox-btn"
              icon={TvMenuIcon("#5A698F")}
            />
            <NavButton
              classN="nav-first--secondBox-btn"
              icon={BookedMenuIcon("#5A698F")}
            />
          </div>
        </div>
        <div className="nav-second">
          <UserButton classN="nav-second--usr-btn" src={usrImg} />
        </div>
      </div>
    </>
  );
};

export { NavigationBar };
