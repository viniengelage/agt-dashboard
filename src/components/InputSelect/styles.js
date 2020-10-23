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
  margin-top: 20px;
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
`;
