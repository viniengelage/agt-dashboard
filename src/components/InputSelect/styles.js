import styled, { css } from 'styled-components';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    font-weight: bold;
    color: #3f3d56;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 8px 0 0 0;
  background: #ffffff;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 5px;

  svg{
    margin-left: 14px;
    margin-right: 10px;
    color: #3F3D56;
  }


  ${(props) =>
    props.isFocused &&
    css`
      color: #f39200;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
      border-radius: 5px;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #f39200;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
      border-radius: 5px;
    `}

    select {
      background: transparent;
      border: 0;
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #3F3D56;
      &:focus {
        outline: none;
      }

      &::placeholder{
        color:#3F3D56;
        font-size: 16px;
      }
  }
`;
