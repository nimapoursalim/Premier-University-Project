import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./BookCard.css"

interface BookProps {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
}

// Card Component
const BookCardMaker: React.FC<BookProps> = ({ title, author, image, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/CardDetailsPage/${id}`);
  };

  return (
    <div
      onClick={handleClick}
    > 
      <img src={image} alt="book's photo" className='CardPhoto'/>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCardMaker;
