import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    background-color: white;
`;

export const BannerContainer = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
    align-items: center;

    a{
        display: flex;
        justify-content:center;
        align-items: center;

        width: 400px;
        height: 50px;

        background-color: #F39200;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        border-radius: 6px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        text-decoration: none;

        &:hover {
            background-color: ${shade(0.2, '#f39200')};
        }
    }
`;
export const Title = styled.h2`
    font-size: 36px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3F3D56;
    border-radius:6px;
    color: #fff;
    padding: 0 20px;
`;
export const TableHeaderSmall = styled.h3`
    width: 150px;
    margin-left: 20px;
    display: flex;
    text-align: left;
`;
export const TableHeaderMedium = styled.h3`
    width: 200px;
    margin-left: 20px;
    display: flex;
    text-align: left;
`;
export const TableHeaderBig = styled.h3`
    width: 250px;
    margin-left: 20px;
    display: flex;
    text-align: left;
`;

export const TableContentSmall = styled.h3`

`;