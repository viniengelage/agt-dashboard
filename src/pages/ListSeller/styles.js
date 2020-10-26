import styled from 'styled-components';
import {shade} from 'polished'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TableHeader = styled.div`
    height: 40px;
    width: 1200px;
    background-color: #F39200;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const TableTitle = styled.p`
    color: #ffff;
    font-size: 20px;
    font-weight: bold;
`;
export const Title = styled.h2`
  color: #3f3d56;
  font-size: 32px;
`;

export const Button = styled.button`
  margin-top: 20px;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  color: #3f3d56;
  cursor: pointer;

  border: none;
  height: 40px;
  border-radius: 3px;
  background-color: #f39200;

  &:hover {
    background-color: ${shade(0.2, '#f39200')};
  }
`;