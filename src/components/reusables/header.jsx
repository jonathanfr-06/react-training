import '../../../src/assets/css/components/reusables/header.css'
import Searchbar from '../../components/utils/searchbar'
import logo from '../../assets/images/reusables/logo192.png'
function Header() {
    return (
        <div className="header">
            <nav className='navbar'>
            <img class='image-logo' src={logo} alt='logo' />
                <ul className='list_link'>
                    <li>Accueil</li>
                    <li>Catégories</li>
                    <li>S'inscrire</li>
                    <li>Connexion</li>
                </ul>
            </nav>       
                <Searchbar />
         </div>
    )
}

export default Header;