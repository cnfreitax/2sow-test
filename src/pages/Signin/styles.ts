import styled from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/background-signin.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  align-items: center;

  place-content: center;

  form {
    width: 250px;
    margin: 50px 0;
    text-align: center;

    img {
      width: 86px;
      height: 86px;
    }

    h1 {
      color: #fff;
      margin-bottom: 50px;
      letter-spacing: 5px;
    }

    input {
      width: 100%;
      background: #222;
      border-radius: 4px;
      padding: 10px;
      border: 1px solid #333;
      color: #fff;
      ::placeholder {
        color: #fff;
      }

      & + input {
        margin-top: 6px;
      }
    }

    button {
      margin-top: 20px;
      width: 100%;
      height: 56px;
      background: #001242;
      border-radius: 4px;
      padding: 0 10px;
      border: 0;
      color: #fff;
      font-weight: 500;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#001242')};
      }
    }
  }
`;

export const FormAnimeted = styled.div``;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
  font-size: 20px;
`;
