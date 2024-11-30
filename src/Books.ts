// Define the structure of a book using an interface
export interface Book {
    ID: number;
    title: string;
    author: string;
    image: string;
  }
  
  // Create a dataset of books
  export const books: Book[] = [
    { ID : 1, title: "Iliad", author: "Homer", image : "Iliads-Cover.jpg"},
    { ID : 1, title: "Odyssey", author: "Homer", image : "The-Odyssey.jpg"},
    { ID : 1, title: "To Kill a Mockingbird", author: "Harper Lee", image : "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg"},
    { ID : 2, title: "1984", author: "George Orwell", image : "https://m.media-amazon.com/images/I/81qZ5kGMQ1L._AC_UF1000,1000_QL80_.jpg"},
    { ID : 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image : "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg"},
    { ID : 4, title: "Pride and Prejudice", author: "Jane Austen", image : "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",},
    { ID : 5, title: "Moby Dick", author: "Herman Melville", image : "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg"},
    { ID : 6, title: "War and Peace", author: "Leo Tolstoy", image : "https://images.penguinrandomhouse.com/cover/9780375760648"},
    { ID : 7, title: "The Catcher in the Rye", author: "J.D. Salinger", image : "https://m.media-amazon.com/images/I/8125BDk3l9L.jpg"},
    { ID : 8, title: "The Hobbit", author: "J.R.R. Tolkien", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUktpuWlWdgUoakBw6-lOCEOj4o1TSps05A&s"},
    { ID : 9, title: "Brave New World", author: "Aldous Huxley", image : "https://m.media-amazon.com/images/I/71GNqqXuN3L._AC_UF1000,1000_QL80_.jpg"},
    { ID : 10, title: "Jane Eyre", author: "Charlotte Brontë", image : "https://m.media-amazon.com/images/I/91zU70Aw9IS._AC_UF1000,1000_QL80_.jpg"}
  ];
  