import '../../../src/assets/css/components/reusables/header.css'
import Button from '../../components/utils/buttons'
import Searchbar from '../../components/utils/searchbar'

function Header() {
    return (
        <div className="header">
            <nav className='navbar'>
                <ul className='list_link'>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Auth</li>
                </ul>
            </nav>       
                <Searchbar />
                <Button />
         </div>
    )
}

export default Header;