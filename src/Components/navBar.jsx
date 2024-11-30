import './navBar.css';

export default function Navbar() { 
    return <nav className="nav">
        <a href="/" className="site-title">Kidibo</a>
        
        <ul>
            <li>
            </li>
            <li>
                <a href="/Home" className="NavBar-item-Hover">Fidi-Plus</a>
            </li>
            <li>
                <a href="/Home" className="NavBar-item-Hover">University Subject</a>
            </li>
            <li>
                <a href="/Home" className="NavBar-item-Hover">Magazines</a>
            </li>
            <li>
                <a href="/Ebook" className="NavBar-item-Hover">Audiobook</a>
            </li>
            <li>
                <a href="/Home" className="NavBar-item-Hover">Ebook</a>
            </li>
            <li>
                <a href="/Home" className="NavBar-item-Hover">Home</a>
            </li>
        </ul>
    </nav>
}