const dataset = [
    { id: 1, name: "Book One", author: "Author One", image: "/images/book1.jpg", url: "/book/1" },
    { id: 2, name: "Book Two", author: "Author Two", image: "/images/book2.jpg", url: "/book/2" },
    { id: 3, name: "Book Three", author: "Author Three", image: "/images/book3.jpg", url: "/book/3" },
  ];

  interface Book {
    id: number;
    name: string;
    author: string;
    image: string;
    url: string;
  }

  import React from "react";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="BookCard">
      <img src={book.image} alt={book.name} className="BookCard__Image" />
      <h2 className="BookCard__Name">{book.name}</h2>
      <p className="BookCard__Author">by {book.author}</p>
      <a href={book.url} className="BookCard__Link">More Info</a>
    </div>
  );
};

export default BookCard;
