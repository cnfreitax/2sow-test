import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 30px;
  background: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.secundary};
  }

  div {
    display: flex;
    a {
      text-decoration: none;
      svg {
        margin-right: 20px;
        color: ${(props) => props.theme.colors.secundary};
        width: 20px;
        height: 20px;
        transition: opacity 0.5s;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    button {
      background: transparent;
      border: 0;
      margin-right: 15px;

      svg {
        color: ${(props) => props.theme.colors.secundary};
        width: 20px;
        height: 20px;
        transition: opacity 0.5s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
