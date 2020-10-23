import styled from 'styled-components'

export const Container = styled.div`
    z-index: 1;
    background-color: #3F3D56;
    position: fixed;
    width: 360px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 1400px) {
        width: 260px;
    }
    overflow-y: auto;

    img{
        margin-top: 40px;
        width: 160px;
        @media only screen and (max-width: 1400px) {
            width: 120px;
        }
    }
    div::before{
        content:'';
        background-color: #fff;
        width: 10px;
        height:26px;
        margin-right: 10px;
        border-radius: 0px 3px 3px 0px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;

    svg{
        margin-right: 5px;
        color: #fff;
    }
    strong{
        font-size: 1rem;
        color: #fff;
    }
    &:hover{
       strong{
           color: #000;
       } 
       svg{
           color: #000;
       }  
    }
`;

export const Icon = styled.i`
  color: #000;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin: 0 auto 0 auto;
  }
`;