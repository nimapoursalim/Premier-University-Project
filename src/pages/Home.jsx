import React from "react";
import BookCard from "../Components/Book Card/BookCard.tsx";
import Hero from "../Hero.jsx";
import { books } from "../Books.ts";
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
            <section className="BookCards">
            
                {books.map((item) => (
                    <div className="CardsThemselves"> 
                    <BookCard key={item.ID} image={item.image} title={item.title} author={item.author} />
                    </div>
                ))}
            
            </section>    
            </div> 
        </> 
    );
}

export default Home;