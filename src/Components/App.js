import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "../global.js";
import Home from "../Pages/Games-Live-Page.js";
import GameStats from "../Pages/Games-Stats-Page.js";
import DatePage from "../Pages/Game-Date-Page.js";
import SignInPage from "../Pages/Sign-In-Page.js";
import SignUpPage from "../Pages/Sign-Up-Page.js";
import TeamsChoose from "../Pages/Choose-Teams-Page.js";
import UserInfo from "../Pages/User-Info-Page.js";
import ChoosePlayer from "../Pages/Choose-Player-Page.js";

function App() {

  return (
    <>
      <Global />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameid" element={<GameStats />} />
            <Route path="/game/date" element={<DatePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/user/my" element={<UserInfo />}/>
            <Route path="/choose/teams" element={<TeamsChoose />} />
            <Route path="/choose/player" element={<ChoosePlayer/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
