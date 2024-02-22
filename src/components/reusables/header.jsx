import '../../../src/assets/css/components/reusables/header.css'
import Searchbar from '../../components/utils/searchbar'
import logo from '../../assets/images/reusables/logo192.png'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Header() {

    const [is_logged, setIsLogged] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('admin')) {
            setIsLogged(1);
        }
    }, []);

    return (
<div className="w-full flex items-center justify-between bg-blue-900">
            <nav className='flex items-center'>
                <Link to={'/'}><img className='image-logo' src={logo} alt='logo' /></Link>
                <ul className='list_link'>
                    <li>
                        <Link to={"/"} className='links'>Accueil</Link>
                    </li>
                    <li>Catégories</li>
                    <li>
                        <Link to={"/register"} className='links'>S'inscrire</Link>
                    </li>
                    <li>
                        <Link to={"/login"} className='links'>Connexion</Link></li>
                    {is_logged === 1 && (
                        <li>
                            <Link to={"/admin"} className='links'>Admin</Link></li>)}
                </ul>
            </nav>
            <Searchbar />
        </div>
    )
}

export default Header;