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
  div::after {
    content: '';
    background-color: #fff;
    width: 10px;
    height: 26px;
    margin-right: 10px;
    border-radius: 0px 3px 3px 0px;
  }
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;

  svg {
    margin-right: 5px;
    color: #fff;
  }
  strong {
    font-size: 1rem;
    color: #fff;
  }
  &:hover {
    strong {
      color: #000;
    }
    svg {
      color: #000;
    }
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
