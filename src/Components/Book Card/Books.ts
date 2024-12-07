export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    description: string;
  }

  export const books: Book[] = [
    { id : 1, title: "Iliad", author: "Homer", image : "https://m.media-amazon.com/images/I/71f6IxWPdzL._AC_UF1000,1000_QL80_.jpg", description: "Homer's monumental epic set at the end of the Trojan War explores love, heroism, and the intricate relationship between gods and mortals"},
    { id : 2, title: "Odyssey", author: "Homer", image : "https://monsieurdidot.com/wp-content/uploads/2020/02/The-Odyssey.jpg", description: "The Odyssey is the original collection of tall traveller's tales. Odysseus, on his way home from the Trojan War."},
    { id : 3, title: "To Kill a Mockingbird", author: "Harper Lee", image : "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg", description: "o Kill a Mockingbird is a novel by the American author Harper Lee. It was published in July 1960 and became instantly successful"},
    { id : 4, title: "1984", author: "George Orwell", image : "https://m.media-amazon.com/images/I/81qZ5kGMQ1L._AC_UF1000,1000_QL80_.jpg", description: ""},
    { id : 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image : "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg", description: ""},
    { id : 6, title: "Pride and Prejudice", author: "Jane Austen", image : "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg", description: ""},
    { id : 7, title: "Moby Dick", author: "Herman Melville", image : "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg", description: ""},
    { id : 8, title: "War and Peace", author: "Leo Tolstoy", image : "https://images.penguinrandomhouse.com/cover/9780375760648", description: ""},
    { id : 9, title: "The Catcher in the Rye", author: "J.D. Salinger", image : "https://m.media-amazon.com/images/I/8125BDk3l9L.jpg", description: ""},
    { id : 19, title: "The Hobbit", author: "J.R.R. Tolkien", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUktpuWlWdgUoakBw6-lOCEOj4o1TSps05A&s", description: ""},
    { id : 11, title: "Brave New World", author: "Aldous Huxley", image : "https://m.media-amazon.com/images/I/71GNqqXuN3L._AC_UF1000,1000_QL80_.jpg", description: ""},
    { id : 12, title: "Jane Eyre", author: "Charlotte Brontë", image : "https://m.media-amazon.com/images/I/91zU70Aw9IS._AC_UF1000,1000_QL80_.jpg", description: ""}
  ];
  