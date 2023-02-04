import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../Styles/header-style";
import {IoMdBasketball} from 'react-icons/io'
import {CiCalendarDate} from 'react-icons/ci'
import {BsPersonCircle} from 'react-icons/bs'
import {GiBasketballJersey} from 'react-icons/gi';

export default function Header() {

    const Navigate = useNavigate();

    return (
        <>
         <HeaderComponent>
            <img src="https://uploaddeimagens.com.br/images/004/328/161/thumb/nba_1.png?1675440390"/>
            <span></span>
            <span></span>
            <div>
                <IoMdBasketball onClick={() => Navigate('/')}/>
                <CiCalendarDate />
                <GiBasketballJersey />
                <BsPersonCircle/>
            </div>
         </HeaderComponent>
        </>
    )
}