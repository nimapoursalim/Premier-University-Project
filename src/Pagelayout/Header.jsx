import React  from "react";
import './Header.css'
import'../index.css'
const Header = () => { 
    return (
        <section className="h-wrapper">
          <div className="flexCenter paddings  hl-container">
            <img className="headerLogo" src="./Site-logo.png" alt="logo" width={110} />
            </div>
            <div className="paddings innerWidth h-container">
            <div className="h-menu">
                <a className="HeadetBtn" style={{fontSize:"2rem", fontWeight:"bold"}} href="/Home">Home</a>
                <a className="HeadetBtn" href="/Ebbok">Ebook</a>
                <a className="HeadetBtn" href="/Abook">Abook</a>
                <a className="HeadetBtn" href="/Magazine">Magazine</a>
                <a className="HeadetBtn" href="/Education">Education</a>
              <button style={{fontSize:"1.4rem", fontWeight:"bold"}} className="button"> 
                <a href="">KotaPlus</a>
              </button>
            </div>
          </div>
        </section>
    );
};
export default Header;


