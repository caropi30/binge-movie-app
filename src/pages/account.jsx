import React, {useState} from "react";
import { Main } from "../components/Main";
import Login from "../components/Login";

const Account = () => {
    const [isLogedIn, setIsLogedIn] = useState(true)
    return(
        <Main>
           <Login isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
        </Main>
    )
    
}

export default Account;