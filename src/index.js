import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage/index.js";
import Home from './pages/Home/index.js'

ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/personagens" exact element={<CharactersPage />} />
      </Routes>
    </Router>,

  document.getElementById("root")
);