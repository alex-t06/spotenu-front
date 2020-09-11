import React, { useState } from "react";
import SpotenuLogo2 from "../../images/SpotenuLogo2.png";
import { useProtectedPage } from "../../Hooks/ProtectedPage";
import { useForm } from "../../hooks/useForm";
import { useStyles, MainButton } from "../../themes";
import { Link } from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import {
  Typography,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Snackbar,
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
  useProtectedPage();

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const classes = useStyles();
  const history = useHistory();
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

  let token = localStorage.getItem("token");

  if (token === null) {
    token = sessionStorage.getItem("token");
  }

  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleClickShowPassword = () => clickShowPassword();
  const handleMouseDownPassword = (event) => mouseDownPassword(event);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      nickname: form.nickname,
      password: form.password,
      role: "admin",
    };

    axios
      .post(
        `https://36bv90ajrc.execute-api.us-east-1.amazonaws.com/dev/user/admin/signup`,
        body
      )
      .then((response) => {
        setOpen(true);
        setSeverity("success");
        setAlertTitle("Sucesso!");
        setAlertMessage("Cadastro efetuado com sucesso.");
        history.goBack();
      })
      .catch((error) => {
        setOpen(true);
        setSeverity("error");
        setAlertTitle("Erro!");
        setAlertMessage("Dados incorretos!");
        resetForm();
      });
  };

  return (
    <Container>
      <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          <AlertTitle>{alertTitle}</AlertTitle>
          {alertMessage}
        </Alert>
      </Snackbar>
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
                pattern: "^.{10,}$",
                title: "A senha deve conter no mínimo 10 caracteres",
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
