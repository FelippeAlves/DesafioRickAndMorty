import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import imageLandingPage from "../../assets/imgs/rick-and-morty-landing-page.png"
import Header from "../../components/Header/index.js";

const Home = () => {
    return <>
        <Header />

        <main>
            <div className="main-container">  

                <div className="title">
                    <span data-testid='title'>
                        Está preparado para navegar no mundo de Rick and Morty ?
                    </span>
                </div> 

                <img data-testid='image' className="img-landing" src={ imageLandingPage } />

                <div className="btn-start">
                    <Link data-testid='btn-start' className="start" to="/personagens">
                        Inciar Aventura
                    </Link>
                </div>

                <div className="reference">
                    <span data-testid='reference'>
                        ©rickandmortyapi.com
                    </span>
                </div>
            </div>
        </main>
    </>
}

export default Home;