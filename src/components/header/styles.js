import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f39200;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    cursor: pointer;
    color: #ffff;
  }
`;

export const Logo = styled.img`
    color: #fff;
    width: 18vh;
    cursor: pointer;
`;
