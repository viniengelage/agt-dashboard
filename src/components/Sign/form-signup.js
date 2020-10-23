import React, { useState } from "react";
import {
  SignupForm,
  Title,
  InputField,
  ButtonSolid,
  SocialText,
  SocialMedia,
  SocialIcon,
  AgoraTemLogo,
} from "./styles";
import { useHistory } from "react-router-dom";
import auth from '../../services/api'
import { toast } from "react-toastify";

const FormSignup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    role: "seller",
  });
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    auth.post("/register", data)
      .then(() => {
        setLoading(false);
        return history.push("/auth");
      })
      .catch((error) => {
        setLoading(false);
        return console.error(error);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    return setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <SignupForm id="form-signup" onSubmit={handleSubmit}>
      <AgoraTemLogo
        onClick={() => {
          history.push("/auth");
        }}
      />
      <Title>Cadastrar</Title>
      <InputField disabled={loading}>
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          disabled={loading}
          value={data.email}
        />
      </InputField>
      <InputField disabled={loading}>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          disabled={loading}
          value={data.password}
        />
      </InputField>
      <InputField disabled={loading}>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Confirmar Senha"
          name="password_confirmation"
          onChange={handleChange}
          disabled={loading}
          value={data.password_confirmation}
        />
      </InputField>
      <ButtonSolid type="submit" disabled={loading}>
        {loading ? (
          <span>
            <i
              className="fas fa-spinner loading"
              style={{ marginRight: "5px" }}
            />
            Carregando
          </span>
        ) : (
          "Cadastre-se"
        )}
      </ButtonSolid>

      <SocialText>Cadastre-se utilizando sua rede-social</SocialText>
      <SocialMedia>
        <SocialIcon onClick={() => toast.info("Em breve...")}>
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon onClick={() => toast.info("Em breve...")}>
          <i className="fab fa-google"></i>
        </SocialIcon>
      </SocialMedia>
    </SignupForm>
  );
};

export default FormSignup;
