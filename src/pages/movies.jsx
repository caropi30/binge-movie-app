import React from "react";
import { Main } from "../components/Main";


const MoviesPage = () => {
    return(
        <Main>
            {/* <Section classN="trending" title="Trending">
                <CardContainer classN="card-trending" isTrending={isTrending} /> 
            </Section> */}
            <Section classN="recomended" title="Recomended for you">
                <CardContainer />
            </Section>
        </Main>
    )
    
}

export default MoviesPage

export {MoviesPage};