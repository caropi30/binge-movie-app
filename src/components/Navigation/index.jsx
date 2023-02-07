import React from "react";
import "./index.module.scss";
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
      <div className="navigation">
        <div className="navigation-first">
          <NavButton icon={LogoMenuIcon("#FC4747")} />
        </div>
        <div className="navigation-second">
          <NavButton icon={MainMenuIcon("#5A698F")} />
          <NavButton icon={FilmMenuIcon("#5A698F")} />
          <NavButton icon={TvMenuIcon("#5A698F")} />
          <NavButton icon={BookedMenuIcon("#5A698F")} />
        </div>
      </div>
      <div className="navigation-third">
        <UserButton src={usrImg} />
      </div>
    </>
  );
};

export { NavigationBar };
