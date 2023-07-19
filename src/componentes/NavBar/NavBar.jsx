import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1 className='tituloAkatsuki'>Akatsuki</h1>
            </Link>
            
            <nav >
                <ul >
                    <li >
                <NavLink className='colorCategoriaNavBar1' to="/categoria/uchiha">Uchiha</NavLink>
                    </li>
                    <li>
                <NavLink className='colorCategoriaNavBar2' to="/categoria/uzumaki">Uzumaki</NavLink>
                    </li>
                    
                </ul>
            </nav>
            <CartWidget/>
            
        </header>
    )
}

export default NavBar



