import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
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

  .loadingContainer {
    margin-top: 30px;
  }
  .tabContainer{
    display: flex;
    width: 1000px;
    justify-content: space-between;
    align-items: center;
  }

  .titleTabe{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    width: 300px;
    height: 60px;
    border-radius: 6px;
    background-color: #3f3d56;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    color: #ffff;
    cursor: pointer;
    list-style: none;
    &:hover {
      color: #3f3d56;
      background-color: #f39200;
    }
  }

  .selectedTab{
    color: #fff;
    background-color: #f39200;
  }
  
`;

export const Title = styled.h2`
  color: #3f3d56;
  font-size: 32px;
`;

export const CepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  form{
    display: flex;
    width: 100%;
  }
  div{
    width: 99%;
  }
  button{
    margin-top: 55px !important;
    width: 20%;
  }
`;
