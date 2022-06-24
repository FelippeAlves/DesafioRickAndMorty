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
                    <Link data-testid='logo' to="/"><img src={ logo } /></Link>
                </div>
                <nav className="menu">
                    <Link data-testid='btn-person' className='buttons space-itens' to="/personagens">Personagens</Link>
                    <Link data-testid='btn-places' className='buttons space-itens' to="/lugares-famosos">Lugares Famosos</Link>
                    <Link data-testid='btn-ep' className='buttons' to="/episodios">Episódios</Link>
                </nav>
                <div className='menuMobile'>
                    <MenuMobile />
                </div>
            </div>
        </>
    )
}
