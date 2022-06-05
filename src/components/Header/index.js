import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/Rick-And-Morty-Logo-header.png'
import MenuMobile from '../MenuMobile/index.js';
import './styles.scss';

export default function Header() {

    return (
        <>
            <div className="container">
                <div className="logo-container">
                    <img src={ logo } />
                </div>
                <nav className="menu">
                    <Link className='buttons space-itens' to="/personagens">Personagens</Link>
                    <Link className='buttons space-itens' to="/personagens">Lugares Famosos</Link>
                    <Link className='buttons' to="/personagens">Episódios</Link>
                </nav>
                <div className='menuMobile'>
                    <MenuMobile />
                </div>
            </div>
        </>
    )
}
