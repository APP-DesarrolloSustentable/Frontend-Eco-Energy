import React from "react";
import Content from "../components/Content";
import LoginForm from "../containers/LoginForm";

const Inicio = [{ href: "register", title: "Crear Cuenta" }];

function Login() {
  return (
    <body>
      <div className="Background-image">
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        /> */}

        <Content className="CardLogin" title="BIENVENIDO">
          <LoginForm Inicio={Inicio} />
        </Content>
      </div>
    </body>
  );
}

export default Login;
