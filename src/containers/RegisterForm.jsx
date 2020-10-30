import React from "react";
import InputLine from "../components/InputLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { isEmpty, validatePassword, validateEmail } from "../utility/Util";
import { register } from "../api/index";
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  state = {
    registerData: {
      name: "",
      lastname: "",
      birth_date: "",
      email: "",
      username: "",
      password: "",
      passConfirmation: "",
    },
    errors: {
      name: false,
      lastname: false,
      confirmation: false,
      email: false,
      username: false,
      password: false,
      passConfirmation: false,
    },
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData);
    registerData[name] = value;
    this.setState({
      registerData,
    });
    console.log("onChange");
  };

  doRegister = (event) => {
    const {
      name,
      lastname,
      birth_date,
      email,
      username,
      password,
      passConfirmation,
    } = this.state.registerData;

    const nameError = isEmpty(name);
    const lastnameError = isEmpty(lastname);
    const birth_dateError = isEmpty(birth_date);
    const emailError = isEmpty(email);
    const usernameError = isEmpty(username);
    const passwordError = isEmpty(password);
    const passConfirmationError = validatePassword(passConfirmation, password);

    this.setState({
      errors: {
        name: nameError,
        lastname: lastnameError,
        birth_date: birth_dateError,
        email: emailError,
        username: usernameError,
        password: passwordError,
        passConfirmation: passConfirmationError,
      },
    });

    event.preventDefault();
    console.log("registrado");
    register(this.state.registerData);
    this.props.history.push("/login");
  };

  render() {
    const {
      name,
      lastname,
      birth_date,
      email,
      username,
      password,
      passConfirmation,
    } = this.state.registerData;
    const { errors } = this.state;

    return (
      <form>
        <div className="IconStyle">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <InputLine
          name="name"
          placeholder="Nombre"
          required={true}
          type="text"
          onChange={this.onChange}
          error={errors.name}
          value={name}
        />
        <InputLine
          name="lastname"
          placeholder="Apellido"
          required={true}
          type="text"
          onChange={this.onChange}
          error={errors.lastname}
          value={lastname}
        />
        <InputLine
          name="birth_date"
          placeholder="DD/MM/AA"
          required={true}
          type="text"
          onChange={this.onChange}
          error={errors.birth_date}
          value={birth_date}
        />
        <InputLine
          name="email"
          placeholder="correo@correo.com"
          required={true}
          type="text"
          onChange={this.onChange}
          error={errors.email}
          value={email}
        />
        <InputLine
          name="username"
          placeholder="Nombre de usuario"
          required={true}
          type="text"
          onChange={this.onChange}
          error={errors.username}
          value={username}
        />
        <InputLine
          name="password"
          placeholder="Contraseña"
          required={true}
          type="password"
          onChange={this.onChange}
          error={errors.password}
          value={password}
        />
        <div>
          <p className="text-pass">
            *Utiliza ocho caracteres como minimo con una combinacion de letras y
            numeros
          </p>
        </div>

        <InputLine
          name="passConfirmation"
          placeholder="Confirmar Contraseña"
          required={true}
          type="password"
          onChange={this.onChange}
          error={errors.passConfirmation}
          value={passConfirmation}
        />
        <div>
          <button
            type="submit"
            className="LoginButton"
            onClick={this.doRegister}
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegisterForm);
