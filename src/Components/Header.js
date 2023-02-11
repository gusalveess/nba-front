import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../Styles/header-style";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import MenuPopupState from "./Menu";

export default function Header() {
  const Navigate = useNavigate();
  const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

  function Logout() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const body = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.post("http://localhost:4000/log-out", body, config);
    console.log(token);
    promise.then(() => {
      Navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      setTimeout(() => {
        window.location.reload(true);
      }, 100);
    });
    promise.catch((err) => console.log(err));
  }


  return (
    <>
      <HeaderComponent>
        <img src="https://uploaddeimagens.com.br/images/004/328/161/thumb/nba_1.png?1675440390" />
        <span></span>
        <span></span>
        <div>
          <MenuPopupState />
          {token === null ? (
            <BsPersonCircle onClick={() => Navigate("/sign-in")} />
          ) : (
            <BiLogOut onClick={() => Logout()} />
          )}
        </div>
      </HeaderComponent>
    </>
  );
}
