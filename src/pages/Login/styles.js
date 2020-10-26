import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
    background-color: #3F3D56;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 1400px) {
        form{
            width: 320px;
            display: flex;
            flex-direction: column;
        }
    }

    form{
        max-width: 480px;
        display: flex;
        flex-direction: column;
    }

    a{
        text-decoration: none;
        color: #fff;
        margin-top: 25px;
        text-align: center;
        font-size: 22px;
        &:hover{
            color: ${shade(0.2, '#FFFF')}
        }
    }
`;

export const Title = styled.div`
    color: #F39200;
`;

export const Logo = styled.img`
    width: 100%;
    margin-bottom: 80px;
`;

export const Image = styled.img`
    width: 877px;
    @media only screen and (max-width: 1400px) {
            width: 600px;
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;