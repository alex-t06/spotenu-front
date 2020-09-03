import React from "react";
import { ContainerHome, StyledButton } from "./StyleHomePage";
import LogoBlack from "../../images/SpotenuLogoBlack.png";
import { Button, Icon, ButtonToolbar } from "rsuite";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <ContainerHome>
      <img src={LogoBlack} alt='logo' />
      <div>
        <ButtonToolbar style={{ margin: 20, textDecoration: "none" }}>
          <Link to='/register/listener'>
            <Button style={StyledButton} size='lg' block>
              <Icon size='2x' icon='headphones' style={{ padding: 7 }} />{" "}
              CADASTRO OUVINTE
            </Button>
          </Link>

          <Link to='/register/admin'>
            <Button style={StyledButton} size='lg' appearance='default' block>
              <Icon size='2x' icon='unlock-alt' style={{ padding: 7 }} />{" "}
              CADASTRO ADMINISTRADOR
            </Button>
          </Link>

          <Link to='/register/band'>
            <Button style={StyledButton} size='lg' block>
              <Icon size='2x' icon='music' style={{ padding: 7 }} /> CADASTRO
              BANDA
            </Button>
          </Link>

          <Link to='/login'>
            <Button style={StyledButton} size='lg' block>
              <Icon size='2x' icon='sign-in' style={{ padding: 7 }} /> CONECTAR
            </Button>
          </Link>
        </ButtonToolbar>
      </div>
    </ContainerHome>
  );
};

export default HomePage;
