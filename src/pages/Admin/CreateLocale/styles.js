import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  form{
    width: 600px
  }

  .tabContext{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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

export const ButtonContainer = styled.div`
  display: flex;
`;
export const MenuButton = styled.button`
  background-color: #F39200;
`;