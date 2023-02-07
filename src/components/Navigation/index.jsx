import React from "react";
import { NavButton } from "../Buttons/NavigationButton";
import {BookedMenuIcon, MainMenuIcon, FilmMenuIcon, TvMenuIcon} from "../Icons/index"


const NavigationBar = () => {
  return (
    <>
      <NavButton  icon={BookedMenuIcon("#5A698F")}  />
      <NavButton  icon={MainMenuIcon("#5A698F")}  />
      <NavButton  icon={FilmMenuIcon("#5A698F")}  />
      <NavButton  icon={TvMenuIcon("#5A698F")}  />
    </>
  )
};

export { NavigationBar };
