import React from "react";
import "./index.scss";

const Header = ({children}) => {
    return(
        <>
            <header>
                {children}
            </header>
        </>
    )
}

export {Header}