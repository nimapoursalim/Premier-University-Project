import React from "react";
import Header from "./Pagelayout/Header";
import Footer from "./Pagelayout/footer";
import Magazines from "./pages/Magazines";
import Ebook from "./pages/Ebook";
import Abook from "./pages/Abook";
import KoataPlus from "./pages/Koataplus";
import Home from "./pages/Home";
import Education from "./pages/Education";

import CardList from "./Components/Book Card/CardList.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetailsPage from "./Components/Book Card/CardDetailsPage.tsx";
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Ebook" element={<Ebook />} />
                    <Route path="/Abook" element={<Abook />} />
                    <Route path="/Magazines" element={<Magazines />} />
                    <Route path="/KoataPlus" element={<KoataPlus />} />
                    <Route path="/Education" element={<Education />} />
 

                    <Route path="/" element={<CardList />} />
                    <Route path="/CardDetailsPage/:id" element={<CardDetailsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;