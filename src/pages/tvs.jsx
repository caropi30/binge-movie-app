import React from "react";
import { Main } from "../components/Main";


const TvsPage = () => {
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

export default TvsPage