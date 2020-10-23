import React from "react";
import {
  PanelsContainer,
  Content,
  LeftPanel,
  RightPanel,
  ButtonTransparent,
  Discount,
  Online,
} from "./styles";
import { useHistory } from "react-router-dom";

const Panels = ({ left }) => {
  const history = useHistory();

  return (
    <PanelsContainer>
      {left ? (
        <LeftPanel>
          <Content>
            <h3>Novo Aqui ?</h3>
            <p>
              Cadastre seu estabelecimento, em pouco tempo entraremos em contato
              para confirmar seu cadastro!
            </p>
            <ButtonTransparent
              onClick={() => {
                history.push("/auth/register");
              }}
            >
              Criar Conta
            </ButtonTransparent>
          </Content>

          <Discount />
        </LeftPanel>
      ) : (
        <RightPanel>
          <Content>
            <h3>Ja possui uma conta ?</h3>
            <p>Acesse agora o painel e comece a divulgar suas promoções!</p>
            <ButtonTransparent
              onClick={() => {
                history.push("/auth");
              }}
            >
              Acessar
            </ButtonTransparent>
          </Content>

          <Online />
        </RightPanel>
      )}
    </PanelsContainer>
  );
};

export default Panels;
