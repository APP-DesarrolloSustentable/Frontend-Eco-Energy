import React from "react";
import Content from "../components/Content";
import RegisterForm from "../containers/RegisterForm";

function Register() {
  return (
    <div className="Background-image">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      /> */}
      <Content className="CardRegister" title="REGISTRO">
        <RegisterForm />
      </Content>
    </div>
  );
}

export default Register;
