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
  color: #444444;
  padding: 5px 12px;
  width: 100%;
  height: 40px;
  margin: 8px 0 0 0;
  background: #ffffff;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 5px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #f39200;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #f39200;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
    `}

  input {
    background: transparent;
    border: 0;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
