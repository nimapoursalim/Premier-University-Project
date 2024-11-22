import React from "react";
import BookCard from "./Book Card/BookCard";
import iliadBooksPhoto from "./assets/Iliads-Cover.jpg"
import odysseyBooksPhoto from "./assets/The-Odyssey.jpg"
import Listeofbooks from "./Listeofbooks"
import Navbar from "./navBar";
import Footer from "./Page Layout/footer";
import "./App.css"
import HeaderSearchBox from "./Components/HeaderSearchBox";


function App() {
    return(
        <>
        <HeaderSearchBox/>
        <div className="App">
        <Navbar/> 
        <div className="grid-container">
            <BookCard name="Iliad" author="Homer" image={iliadBooksPhoto}/>
            <BookCard name="odyssey" author="Homer" image={odysseyBooksPhoto}/>
            <p>i dont niggers</p>
        </div>    
        <Footer/>
        </div>
        </>
    );
}

export default App;

// <BookCard name="Iliad" author="Homer" image={BooksPhoto}/>