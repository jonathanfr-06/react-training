import '../../../src/assets/css/components/reusables/header.css'
import Searchbar from '../../components/utils/searchbar'
import logo from '../../assets/images/reusables/logo192.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav className='navbar'>
                <img class='image-logo' src={logo} alt='logo' />
                <ul className='list_link'>
                    <li>
                        <Link to={"/"} className='links'>Accueil</Link>
                    </li>
                    <li>Catégories</li>
                    <li>
                        <Link to={"/register"} className='links'>S'inscrire</Link>
                    </li>
                    <li>Connexion</li>
                </ul>
            </nav>
            <Searchbar />
        </div>
    )
}

export default Header;