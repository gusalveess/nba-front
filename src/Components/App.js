import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from '../global.js'
import Home from "../Pages/Games-Live-Page.js";
import GameStats from "../Pages/Games-Stats-Page.js";

function App() {
  return (
    <>
    <Global/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameid" element={<GameStats/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
