/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Forms, SigninSignup } from "./styles";
import FormSignin from "./form-signin";
import FormSignup from "./form-signup";
import Panels from "./panels-container";
import { useLocation } from "react-router-dom";

const FormContainer = ({ login }) => {
  const [mode, setMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (login) {
      return setMode(true);
    } else {
      if (location.pathname === "/auth") {
        return setMode(true);
      } else if (location.pathname === "/auth/register") {
        return setMode(false);
      }
    }
  }, []);

  return (
    <>
      <Container mode={mode}>
        <Forms>
          <SigninSignup mode={mode}>
            {mode ? <FormSignin /> : <FormSignup />}
          </SigninSignup>
        </Forms>
      </Container>
      <Panels left={mode} />
    </>
  );
};

export default FormContainer;
