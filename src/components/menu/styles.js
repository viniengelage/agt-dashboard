import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  background-color: #3f3d56;
  position: fixed;
  width: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    width: 360px;
  }
  @media only screen and (max-width: 700px) {
    width: 300px;
  }
  overflow-y: auto;

  img {
    margin-top: 40px;
    width: 160px;
    @media only screen and (max-width: 1400px) {
      width: 120px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  background-color: #F39200;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  svg {
    margin-left: 15px;
    margin-right: 5px;
    color: #fff;
  }
  strong {
    font-size: 1.2rem;
    color: #fff;
  }
  &:hover {
    strong {
      color: #3F3D56;
    }
    svg {
      color: #3F3D56;
    }
  }

  div::before {
    content: '';
    background-color: #fff;
    width: 10px;
    height: 26px;
    margin-right: 10px;
    border-radius: 0px 3px 3px 0px;
  }
`;

export const ExitContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    stroke-width: 1;
    color: #ffff;
  }

  &:hover {
    p,
    svg {
      color: #f39200;
    }
  }
`;

export const Exit = styled.p`
  outline-style: none;
  color: #fff;
  font-size: 18px;
  font-weight: 400;

  margin-left: 5px;
`;
