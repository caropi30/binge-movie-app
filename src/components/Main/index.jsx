import React from "react";
import "./index.scss";

const Main = ({children}) => {
  //const [isTrending, setIsTrending] = (true);
  return (
    <>
      <main className="main">
       {children}
      </main>
    </>
  );
};

export { Main };
