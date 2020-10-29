import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:10px;

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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  svg{
    margin-left: 10px;
    margin-right: 10px;
    color: #3F3D56;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      box-shadow: 0 0 0 1px #c53030;
      svg{
        color: #c53030;
      }
    `}
    ${(props) =>
    props.isFocused &&
    css`
      color: #3F3D56;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
      border-radius: 5px;

      svg{
        color: #f39200;
      }
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #3F3D56;
      border-color: #f39200;
      box-shadow: 0 0 0 1px #f39200;
      border-radius: 5px;
      svg{
        color: #f39200;
      }
    `}

  input {
    background: transparent;
    border: 0;
    width: 90%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &::placeholder{
      color:#3F3D56;
      font-size: 16px;
      margin-left: 35px;
    }
  }
`;
export const Error = styled(Tooltip)`
  margin-left: 0px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
