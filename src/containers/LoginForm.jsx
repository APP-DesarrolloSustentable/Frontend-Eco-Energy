import React from "react";
import InputLine from "../components/InputLine";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "../utility/Util";
import { login } from "../api";

class LoginForm extends React.Component {
  state = {
    loginData: {
      username: "",
      password: "",
    },
    errors: {
      username: false,
      password: false,
    },
  };

  onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, this.state.loginData);
    loginData[name] = value;
    this.setState({
      loginData,
    });
  };

  haveErrors = () => {
    this.setState(
      {
        errors: {
          username: isEmpty(this.state.loginData.username),
          password: isEmpty(this.state.loginData.password),
        },
      },
      () => {
        this.doLogin();
      }
    );
  };

  doLogin = (event) => {
    this.props.history.push("/menu");
    event.preventDefault();
    // if (
    //   this.state.errors.password === false &&
    //   this.state.errors.username === false
    // ) {
    //   login(this.state.loginData)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw Error(response.statusText);
    //       }
    //       return response.text();
    //     })
    //     .then((token) => {
    //       localStorage.setItem("token", token);
    //       this.props.history.push("/menu");
    //     })
    //     .catch((err) => {
    //       alert("Datos Incorrectos");
    //     });
    // }
  };

  doRegisterPage = (event) => {
    this.props.history.push("/register");
    event.preventDefault();
  };

  render() {
    const { username, password } = this.state.loginData;
    const { errors } = this.state;

    return (
      <form>
        {/* Agregar error campos vacios */
        /* Agregar mensaje de caracteres y numeros a password */
        /* Añadir mensaje de password no coinciden */}
        <div className="IconStyle">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <InputLine
          name="username"
          placeholder="Usuario"
          type="text"
          onChange={this.onChange}
          error={errors.username}
          value={username}
          required={true}
        />
        <InputLine
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={this.onChange}
          error={errors.password}
          value={password}
          required={true}
        />
        <div>
          <button type="submit" className="LoginButton" onClick={this.doLogin}>
            Iniciar Sesion
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="CreateButton"
            onClick={this.doRegisterPage}
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
