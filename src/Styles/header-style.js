import styled from "styled-components";

export const HeaderComponent = styled.div`

display: flex;
justify-content: space-around;
background: rgb(19,19,29);
background: linear-gradient(to right bottom, #181818, #171717, #151515, #141414, #121212);
align-items: center;
-webkit-box-shadow: 10px 10px 5px 1px rgba(0,0,0,0.6);
-moz-box-shadow: 10px 10px 5px 1px rgba(0,0,0,0.6);
box-shadow: 10px 10px 5px 1px rgba(0,0,0,0.6);
width: 100%;
height: 100px;
position: fixed;
top: 0;
left: 0;

img {
    height: 170px;
    width: 170px;
}

svg {
    height: 50px;
    width: 50px;
    color: #fff;
    transition: all ease-in-out 0.3s;
}
svg:hover {
    color: #F38225;
    cursor: pointer;
}

div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
}


@media (max-width: 600px) {

    height: 80px;

        img {
            height: 120px;
            width: 120px;
        }

        svg {
            height: 40px;
        }

        div {
            width: 150px;
        }
	}

`