import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className="teste">
            teste
        </div>

        <Link to="/personagens">
            outra page
        </Link>

    </>
}

export default Home;