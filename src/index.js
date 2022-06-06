import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/index.js";
import EpisodesPage from "./pages/EpisodesPage/index.js";
import FamousPlaces from "./pages/FamousPlaces/index.js";
import Home from './pages/Home/index.js'

ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/personagens" exact element={<CharactersPage />} />
        <Route path="/lugares-famosos" exact element={<FamousPlaces />} />
        <Route path="/episodios" exact element={<EpisodesPage />} />
      </Routes>
    </Router>,

  document.getElementById("root")
);