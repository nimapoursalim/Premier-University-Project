import React from 'react';
import { books } from '../Books.ts';
import './App.css'; // Optional styling

interface BookProps {
  title: string;
  author: string;
}

// Card Component
const BookCard: React.FC<BookProps> = ({ title, author }) => {
  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">By {author}</p>
    </div>
  );
};

// App Component
const bookc: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Book List</h1>
      <div className="card-container">
        {books.map((book, index) => (
          <BookCard key={index} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
};

export default BookCard;
