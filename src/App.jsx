import React, { useState } from "react";
import "./scss/app/app.scss";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/Navigation";
import HomePage  from "./pages/home";
import { Outlet } from "react-router-dom";



function App() {
  return (
      <div className="App">
        <Header>
          <NavigationBar />
        </Header>
        <Outlet />
      </div>
  );
}

export default App;
