import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    margin-top: 10px;
  }

  label {
    margin-top: 15px;
  }
  
`;

export const Title = styled.h2`
  color: #3f3d56;
  font-size: 32px;
`;

export const CustomTabTitle = styled.h1`
  font-size: 16px;
  padding: 15px;
  width: 100%;
  border-radius: 3px;
  background-color: #3f3d56;
  color: #ffff;
  &:hover {
    color: #3f3d56;
    background-color: #f39200;
  }
  font-weight: 400;
`;
