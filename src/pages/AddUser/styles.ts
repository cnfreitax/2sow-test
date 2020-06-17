import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;

  > a {
    visibility: hidden;
    position: absolute;
    top: 10%;
    margin-left: 20px;

    svg {
      color: #fd5e81;
      width: 20px;
      height: 20px;
    }

    @media (max-width: 700px) {
      visibility: visible;
    }
  }
`;

export const Content = styled.div`
  place-content: center;
  width: 100%;
  max-width: 600px;
  height: 500px;
  margin: 0 auto;
  padding: 30px 20px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    display: flex;

    button {
      margin: 8px 0;
      padding: 8px;

      border-radius: 0px 5px 5px 0px;
      border: 0;
      color: ${(props) => props.theme.colors.color};

      background: ${(props) => props.theme.colors.primary};
      transition: opacity 0.5s;
      &:hover {
        opacity: 0.8;
      }

      button + button {
        flex: 1;
        height: 100px;
        padding: 15px;
        margin-top: 10px;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: ${(props) => props.theme.colors.color};
        font-weight: bold;
        background: ${(props) => props.theme.colors.primary};
        transition: background-color 0.5s;
        &:hover {
          background: ${shade(0.3, '#fd5e81')};
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  max-width: 300px;
  color: ${(props) => props.theme.colors.color};
`;
