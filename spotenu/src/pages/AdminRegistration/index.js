import React from "react";
import SpotenuLogo2 from "../../images/SpotenuLogo2.png";
import { useForm } from "../../hooks/useForm";
import { useStyles, MainButton } from "../../themes";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Typography,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  Container,
  ImgContainer,
  LogoRegister,
  ContainerForm,
  StyledForm,
  ContainerButtons,
} from "./style";

const AdminRegistration = () => {
  const classes = useStyles();
  const {
    form,
    onChange,
    clickShowPassword,
    mouseDownPassword,
    resetForm,
  } = useForm({
    nickname: "",
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleClickShowPassword = () => clickShowPassword();
  const handleMouseDownPassword = (event) => mouseDownPassword(event);

  const handleSubmit = () => {};

  return (
    <Container>
      <Link to='/'>
        <ImgContainer>
          <LogoRegister src={SpotenuLogo2} alt='logo spotenu' />
        </ImgContainer>
      </Link>
      <ContainerForm onSubmit={handleSubmit}>
        <Typography
          variant='h3'
          align='center'
          color='textSecondary'
          gutterBottom
        >
          Cadastro Administrador
        </Typography>
        <StyledForm>
          <TextField
            color='primary'
            className={classes.input}
            required
            variant='outlined'
            label='Apelido'
            type='text'
            name='nickname'
            value={form.nickname}
            onChange={handleInputChange}
          />

          <TextField
            color='primary'
            className={classes.input}
            required
            variant='outlined'
            label='Nome'
            type='text'
            placeholder='Nome Sobrenome'
            name='name'
            value={form.name}
            onChange={handleInputChange}
          />

          <TextField
            color='primary'
            className={classes.input}
            required
            variant='outlined'
            label='E-mail'
            type='email'
            name='email'
            placeholder='email@email.com'
            value={form.email}
            onChange={handleInputChange}
          />

          <FormControl
            required
            color='primary'
            className={classes.input}
            variant='outlined'
          >
            <InputLabel htmlFor='password'>Senha</InputLabel>
            <OutlinedInput
              placeholder='Mínimo 10 caracteres'
              name='password'
              type={form.showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleInputChange}
              inputProps={{
                pattern: "/^.{10,}$/",
                title: "A senha deve conter no mínimo 6 caracteres",
              }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {form.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>

          <ContainerButtons>
            <Link to='/'>
              <MainButton size='large' style={{ width: "30vw", height: "5vh" }}>
                CANCELAR
              </MainButton>
            </Link>

            <MainButton
              type='submit'
              size='large'
              style={{ width: "30vw", height: "5vh" }}
            >
              ENVIAR
            </MainButton>
          </ContainerButtons>
        </StyledForm>
      </ContainerForm>
    </Container>
  );
};

export default AdminRegistration;
