import React from "react";
import { NavButton } from "../Buttons/NavigationButton";
import bookedMenu from "../../assets/booked-menu.svg";

const NavigationBar = () => {
  return <NavButton text="hola" src={bookedMenu} />;
};

export { NavigationBar };
