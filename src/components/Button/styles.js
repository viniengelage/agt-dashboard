import styled from 'styled-components';
import {shade} from 'polished'

export const InputButton = styled.button`
  margin-top: 20px;

  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;

  border: none;
  border-radius: 3px;
  background-color: #f39200;

  &:hover {
    background-color: ${shade(0.2, '#f39200')};
  }
`;