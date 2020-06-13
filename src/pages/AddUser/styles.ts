import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  a {
    visibility: hidden;
    position: absolute;
    top: 5%;
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
  padding: 50px 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  max-width: 300px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  display: flex;

  input {
    flex: 1;
    width: 100%;

    padding: 0 24px;
    border: 0;
    color: #fff;
    border-radius: 5px 0 0 5px;
    border: 1px solid #fd5e81;
    box-shadow: 0 0 1px rgba(0, 0, 0, 2);
    background: transparent;
    padding: 8px;

    &::placeholder {
      color: #a8a8b3;
    }

    & + input {
      margin-top: 10px;
    }
  }

  button {
    flex: 1;
    height: 100px;
    padding: 15px;
    margin-top: 10px;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #fd5e81;
    transition: background-color 0.5s;
    &:hover {
      background: ${shade(0.3, '#fd5e81')};
    }
  }
`;
