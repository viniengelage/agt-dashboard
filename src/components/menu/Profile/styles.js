import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ffff;
    font-size: 16px;
  }
  strong {
    color: #ffff;
    text-transform: capitalize;
    margin-bottom:20px;
  }
`;

export const ProfileImg = styled.img`
  cursor: pointer;
  border: 3px solid #ffff;
  width: 160px;
  height: 160;
  background: cover;
  border-radius: 50%;
`;
