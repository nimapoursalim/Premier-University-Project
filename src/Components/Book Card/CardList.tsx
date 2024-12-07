import React from "react";
import BookCardMaker from "./BookCardMaker.tsx";
import { books } from "./Books.ts";
import "./BookCard.css"

function CardList() {
    return (
    <section className="BookCards">

        {books.map((item) => (
        <div className="CardsThemselves"> 
        <BookCardMaker key={item.id} id={item.id} image={item.image} title={item.title} author={item.author} description={""} />
        </div>
        ))}

    </section> 
    )
};

export default CardList;
  