import { ReactComponent as Logo } from "../../assets/agt-logo.svg";
import { ReactComponent as DiscountSvg } from "../../assets/discount.svg";
import { ReactComponent as OnlineSvg } from "../../assets/online.svg";
import styled, { keyframes } from "styled-components";

export const AgoraTemLogo = styled(Logo)`
  path {
    fill: ${({ theme }) => theme.header};
  }
  height: 100px;
  width: 300px;
  margin-bottom: 50px;
  cursor: pointer;

  @media only screen and (max-width: 570px) {
    height: 50px;
    margin-bottom: 0px;
    width: 150px;
  }
`;

export const Discount = styled(DiscountSvg)`
  width: 100%;
  @media only screen and (max-width: 870px) {
    height: 400px;
  }
  @media only screen and (max-width: 570px) {
    display: none;
  }
`;

export const Online = styled(OnlineSvg)`
  width: 100%;
  @media only screen and (max-width: 570px) {
    display: none;
  }
`;

export const Forms = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media only screen and (max-height: 665px) {
    margin-top: 50px;
  }
`;

export const SigninSignup = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${(props) => (props.mode ? "75%" : "25%")};
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 7;
  @media only screen and (max-width: 870px) {
    width: 100%;
    top: ${(props) => (props.mode ? "95%" : "40%")};
    left: 50%;
    transform: ${(props) =>
      props.mode ? "translate(-50%, -100%)" : "transform: translate(-50%, 0)"};
  }
  @media only screen and (max-width: 570px) {
    top: ${(props) => (props.mode ? "75%" : "35%")};
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media only screen and (max-width: 570px) {
    padding: 0 1.5rem;
  }
`;

export const SigninForm = styled(Form)`
  z-index: 2;
`;

export const SignupForm = styled(Form)`
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
  @media only screen and (max-width: 570px) {
    font-size: 1.5rem;
  }
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? "#e1e1e1" : "#f0f0f0")};
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
  i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }

  input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }

  input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  @media only screen and (max-width: 570px) {
    padding: 0 0.2rem;
    height: 40px;

    i {
      font-size: 0.8rem;
      line-height: 40px;
    }

    input {
      font-size: 0.8rem;
    }
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSolid = styled.button`
  width: 150px;
  background: ${({ theme }) => theme.gradient};
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.activeMenu};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.secondary};
  }
  .loading {
    animation: ${rotate} 2s infinite linear;
  }
`;

export const SocialText = styled.p`
  padding: 0.7rem 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colorGray};
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: ${({ theme }) => theme.colorGray};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colorGray};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: ${({ theme }) => theme.activeMenu};
    border-color: ${({ theme }) => theme.activeMenu};
  }
`;

export const PanelsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;

  h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    padding: 0.7rem 0;
  }

  @media only screen and (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      padding: 0.5rem 0;
    }
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.textColor};

  @media only screen and (max-width: 870px) {
    padding-right: 15%;
  }
  @media only screen and (max-width: 570px) {
    padding: 0.5rem 1rem;
  }
`;

export const LeftPanel = styled(Panel)`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;

  @media only screen and (max-width: 870px) {
    grid-row: 1 / 2;
  }
`;

export const RightPanel = styled(Panel)`
  pointer-events: all;
  padding: 3rem 12% 2rem 17%;

  @media only screen and (max-width: 870px) {
    grid-row: 3 / 4;
  }

  ${Online} {
    transform: translateX(120%);
    @media only screen and (max-width: 870px) {
      transform: translateY(200px);
    }
  }

  ${Content} {
    transform: translateX(150%);
    @media only screen and (max-width: 870px) {
      padding-right: 15%;
      transform: translateY(200px);
    }
  }
`;

export const ButtonTransparent = styled.button`
  width: 150px;
  background-color: transparent;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: ${({ theme }) => theme.textColor};
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;

  margin: 0;
  background: none;
  border: 2px solid ${({ theme }) => theme.textColor};
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.darkOrange};
    border-color: ${({ theme }) => theme.darkOrange};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: ${(props) => (props.mode ? "48%" : "52%")};
    transform: ${(props) =>
      props.mode ? "translateY(-50%)" : "translate(100%, -50%)"};
    background-image: ${({ theme }) => theme.gradient};
    border-radius: 50%;
    z-index: 6;
  }

  @media only screen and (max-width: 870px) {
    min-height: 800px;
    height: 100vh;

    &::before {
      width: 1500px;
      height: 1500px;
      transform: ${(props) =>
        props.mode ? "translateX(-50%)" : "translate(-50%, 100%)"};
      bottom: ${(props) => (props.mode ? "68%" : "32%")};
      left: 30%;
      right: initial;
      top: initial;
    }
  }

  @media only screen and (max-width: 570px) {
    padding: 1.5rem;

    &::before {
      bottom: ${(props) => (props.mode ? "72%" : "28%")};
      left: 50%;
    }
    height: 130vh;
  }
`;
