import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { books } from '../../Books';
  
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

