import Header from "./Pagelayout/Header";
import Footer from "./Pagelayout/footer";
import React from "react";
import Ebook from "./pages/Ebook";
import Abook from "./pages/Abook";
import Magazines from "./pages/Magazines";
import KoataPlus from "./pages/Koataplus";
import Home from "./pages/Home";
import Education from "./pages/Education";
import './App.css'

function App() {
    let component;
    switch(window.location.pathname) {
    case "/Home":
        component = <Home/>
      break
    case "/Ebook":
        component = <Ebook/>
      break
    case "/Abook":
        component = <Abook/>
      break
    case "/Magazines":
        component = <Magazines/>
      break    
    case "/KoataPlus":
        component = <KoataPlus/>
      break   
    case "/KoataPlus":
        component = <Education/>
      break  
    }
    return (
      <>
      <div className="App">
      <Header/>
      {component}
      <Footer/>
      </div>
      </>
    )
};

export default App;
