import React from "react";
import { books } from './Books';
  
type BooksCardProprs = {
    title: string;
    author: string;
    image: string;
};

const BookCard : React.FC<BooksCardProprs> = ({title, author, image}) => {
    return (
        <div>
            <div className="BookBardImage"><img src={image} alt="BookCover"
                style={{
                justifyContent:"center",
                width:"230px",
                height:"300px"
            }}/></div>
            <div>
                <h1 style={{padding:"10px", marginBottom:"10px"}}>{title}</h1>
            </div>
            <div>
                <p style={{}}>{author}</p>
            </div>
        </div>
    );
};
export default BookCard;

