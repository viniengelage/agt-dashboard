import styled from 'styled-components';
import {shade} from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  color: #3f3d56;
  font-size: 32px;
`;

export const TableHeader = styled.div`
  height: 40px;
  width: 1260px;
  background-color: #F39200;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 6px 0 0;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TableTitle = styled.p`
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  width: 300px;
`;

export const TableCel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1260px;
  height: 60px;
  margin-top: 0;
  background-color: #3F3D56;
  padding-bottom:10px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;

  p::after{
    content: '';
    background-color: #F39200;
    height:5px;
    width: 100%;
    bottom: 0;
    right: 0px;
    position: absolute;
  }

`;

export const TableCelTitle = styled.p`
  width: 300px;
  color: #ffff;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

export const TableRevealed = styled.p`
  width: 300px;
  color: #ffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const TableRevealedTitle = styled.p`
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 300px;
`;
