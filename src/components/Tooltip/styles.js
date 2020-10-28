import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    background: #f39200;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: -72%;
    transform: translateX(-72%);
    color: #fff;
    &::before {
      content: '';
      border-style: solid;
      border-color: #f39200 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 90%;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;