import React, { useState } from "react";
import {
  SigninForm,
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
import { useAuth } from "../../hooks/auth";

const FormSignin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const {signIn} = useAuth()
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      await signIn(data)
      setLoading(false)
      history.push('/home')
    } catch (error) {
      setLoading(false)
    }

  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    return setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <SigninForm id="form-signin" onSubmit={handleSubmit}>
      <AgoraTemLogo style={{ cursor: "default" }} />
      <Title>Acessar</Title>
      <InputField disabled={loading}>
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          name="email"
          disabled={loading}
        />
      </InputField>
      <InputField disabled={loading}>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Senha"
          value={data.password}
          onChange={handleChange}
          name="password"
          disabled={loading}
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
          "Entrar"
        )}
      </ButtonSolid>
      <SocialText>Acesse utilizando sua rede-social</SocialText>
      <SocialMedia>
        <SocialIcon onClick={() => toast.info("Em breve...")}>
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon onClick={() => toast.info("Em breve...")}>
          <i className="fab fa-google"></i>
        </SocialIcon>
      </SocialMedia>
    </SigninForm>
  );
};

export default FormSignin;
