import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { IoMdBasketball } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { GiBasketballJersey, GiDiamondTrophy } from "react-icons/gi";
import {AiOutlineMenu} from "react-icons/ai"
import { GetToken } from "../Custom-Hooks/Token";

export default function MenuPopupState() {
  const Navigate = useNavigate();
  const token = GetToken();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button style={{backgroundColor: 'transparent'}} variant="contained" {...bindTrigger(popupState)}>
            <AiOutlineMenu />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => Navigate("/")}>
              <IoMdBasketball style={{fontSize: '30px'}}/> 
              <h5 style={{paddingLeft:'10px'}}>Jogos ao vivo</h5>
            </MenuItem>

            <MenuItem onClick={() => Navigate("/standings")}>
              <GiDiamondTrophy style={{ fontSize: '30px'}}/>
              <h5 style={{paddingLeft:'10px'}}>Classificação</h5>
            </MenuItem>

            <MenuItem onClick={() => Navigate("/game/date")}>
              <CiCalendarDate style={{ fontSize: '30px'}}/>
              <h5 style={{paddingLeft:'10px'}}>Buscar jogos pela data</h5>
            </MenuItem>

            <MenuItem  style={token === null ? { display: "none" } : { display: "flex" }} onClick={() => Navigate("/user/my")}>
              <GiBasketballJersey style={{fontSize: '30px'}}/>
              <h5 style={{paddingLeft:'10px'}}>Informações do usuário</h5>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
