import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from './Books.ts';
import "./CardDetailsPage.css"

const CardDetailsPage: React.FC = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const card = books.find((card) => card.id === parseInt(id || '', 10));

  if (!card) {
    return <h2>Card not found</h2>;
  }

  return (
    <div className='BookCardDetail'>
      <img src={card.image} alt="a photo" className='DetailPagePhoto' />
      <h1 className='content'>{card.title}</h1>
      <p className='content'>by {card.author}</p>
      <p className='content'>{card.description}</p>
      <button className='DetailPageGoBackButton' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default CardDetailsPage;