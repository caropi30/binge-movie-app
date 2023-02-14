import { useState } from "react";
import "./scss/app/app.scss";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Header>
        <NavigationBar />
      </Header>
      <Main />
    </div>
  );
}

export default App;
