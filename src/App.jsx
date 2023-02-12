import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Main } from "./components/Main";
import {Header} from "./components/Header"
import {NavigationBar} from "./components/Navigation"

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
