import React from "react";
import CardList from "../Components/Book Card/CardList.tsx";
import Hero from "../Hero.jsx";
import "./Home.css"


function Home() {
     return(
        <>
        <div className="App">
            <div >
                <div className="White-Gradient">
                    <Hero/>
                </div>
            </div> 
                    <CardList/>
            </div> 
        </> 
    );
}

export default Home;