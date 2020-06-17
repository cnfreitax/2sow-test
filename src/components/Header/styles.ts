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
          color: ${shade(0.3, '#792359')};
          transform: translateX(2px);
        }
      }
    }

    button {
      background: transparent;
      border: 0;
      margin-right: 15px;

      svg {
        color: #fd5e81;
        width: 20px;
        height: 20px;
        transition: color 0.5s, transform 0.5s;

        &:hover {
          color: ${shade(0.3, '#792359')};
          transform: translateX(2px);
        }
      }
    }
  }
`;
