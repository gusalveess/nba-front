import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../Styles/header-style";
import { IoMdBasketball } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { GiBasketballJersey } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";

export default function Header() {
  const Navigate = useNavigate();
  const getting = localStorage.getItem("token");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);

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
          <IoMdBasketball onClick={() => Navigate("/")} />
          <CiCalendarDate onClick={() => Navigate("/game/date")} />
          <GiBasketballJersey
          onClick={() => Navigate('/user/my')}
            style={token === null ? { display: "none" } : { display: "block" }}
          />
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
