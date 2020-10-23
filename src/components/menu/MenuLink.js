import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 600px) {
    border-left: none;
    border-bottom: 3px solid
      ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
    padding: 0;
    padding-bottom: 20px;
    margin-bottom: 0;
    padding-top: 1rem;
  }
`;

const Icon = styled.i`
  color: ${(props) =>
    props.active ? props.theme.activeMenu : props.theme.textColor};
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin: 0 auto 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${(props) =>
    props.active ? props.theme.activeMenu : props.theme.textColor};
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const MenuLink = ({ title, icon, onClick, path }) => {
  const [active, setActive] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (path === location.pathname) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname, path]);

  return (
    <Container onClick={onClick} active={active}>
      <Icon active={active} className={icon} />
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default MenuLink;
