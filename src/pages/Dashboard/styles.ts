import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 64px;
  padding: 30px;
  background: #792359;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    color: #fd5e81;
  }

  div {
    display: flex;
    a {
      text-decoration: none;
      svg {
        margin-right: 20px;
        color: #fd5e81;
        width: 20px;
        height: 20px;
        transition: color 0.5s, transform 0.5s;

        &:hover {
          color: #c53030;
          transform: translateX(3px);
        }
      }
    }

    button {
      background: transparent;
      border: 0;

      svg {
        color: #fd5e81;
        width: 20px;
        height: 20px;
        transition: color 0.5s, transform 0.5s;

        &:hover {
          color: #c53030;
          transform: translateX(3px);
        }
      }
    }
  }
`;
