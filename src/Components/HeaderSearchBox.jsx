import { useState } from "react";
import "./HeaderSearchBox.css"
import { colors } from "@mui/material";

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "Anna Karenina", author: "Leo Tolstoy" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
    { title: "Wuthering Heights", author: "Emily Brontë" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "The Kite Runner", author: "Khaled Hosseini" },
    { title: "Les Misérables", author: "Victor Hugo" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Ulysses", author: "James Joyce" }
];

function HeaderSearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => 
    book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
);

  return (
    <>
    <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))
        ) : (
          <li>No books found</li>
        )}
    
    </>
  );
}

export default HeaderSearchBox;



