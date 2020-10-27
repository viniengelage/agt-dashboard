import styled from 'styled-components';

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
  width: 660px;
  background-color: #F39200;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  padding: 0 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TableTitle = styled.p`
  color: #ffff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  width: 200px;
`;

export const TableCel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 660px;
  height: 60px;
  margin-top: 0;
  background-color: #3F3D56;
  margin-top: 10px;
  padding: 0 30px;
  position: relative;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* p::after{
    content: '';
    background-color: #F39200;
    height:5px;
    width: 100%;
    bottom: 0;
    right: 0px;
    position: absolute;
  } */

`;

export const TableCelTitle = styled.p`
  width: 200px;
  color: #ffff;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;