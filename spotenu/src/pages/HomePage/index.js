import React from "react";
import LogoBlack from "../../images/SpotenuLogoBlack.png";
import { Link } from "react-router-dom";
import { MainButton } from "../../themes";
import { ContainerHome, ContainerLogo, ContainerButtons } from "./style";

const HomePage = () => {
  return (
    <ContainerHome>
      <ContainerLogo>
        <img src={LogoBlack} alt='logo' />
      </ContainerLogo>
      <ContainerButtons>
        <Link to='/register/listener'>
          <MainButton size='large' style={{ width: "80vw", height: "8vh" }}>
            CADASTRO OUVINTE
          </MainButton>
        </Link>

        <Link to='/register/admin'>
          <MainButton size='large' style={{ width: "80vw", height: "8vh" }}>
            CADASTRO ADMINISTRADOR
          </MainButton>
        </Link>

        <Link to='/register/band'>
          <MainButton size='large' style={{ width: "80vw", height: "8vh" }}>
            CADASTRO BANDA
          </MainButton>
        </Link>

        <Link to='/login'>
          <MainButton size='large' style={{ width: "80vw", height: "8vh" }}>
            CONECTAR
          </MainButton>
        </Link>
      </ContainerButtons>
    </ContainerHome>
  );
};

export default HomePage;
