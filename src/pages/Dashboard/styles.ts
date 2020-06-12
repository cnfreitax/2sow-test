import styled from 'styled-components';
import { shade } from 'polished';

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
          color: ${shade(0.3, '#792359')};
          transform: translateX(2px);
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
          color: ${shade(0.3, '#792359')};
          transform: translateX(2px);
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 50px;
  max-width: 300px;
  color: #fff;

  span {
    font-size: 35px;
    color: #fd5e81;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #fff;
    border-radius: 5px 0 0 5px;
    border: 2px solid transparent;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 1);
    background: transparent;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 90px;
    height: 70px;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
    background: #fd5e81;
    transition: background-color 0.5s;
    &:hover {
      background: ${shade(0.3, '#fd5e81')};
    }

    svg {
      width: 30px;
      height: 30px;
      color: #792359;
    }
  }
`;

export const Users = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin-top: 30px;
  padding: 30px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 1);
  padding: 15px;
  transition: transform 0.2s;
  color: #fff;
  line-height: 25px;
  position: relative;

  @media (max-width: 700px) {
    & + div {
      margin-top: 15px;
    }
  }

  &:hover {
    transform: translateX(5px);
  }
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;

    border-radius: 50%;
  }

  > strong {
    font-size: 20px;
  }

  strong {
    color: #fd5e81;
  }

  div {
    display: flex;

    strong {
      margin-right: 5px;
    }
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  > button {
    margin-right: 5px;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: #c53030;

      width: 20px;
      height: 20px;

      &:hover {
        color: ${shade(0.3, '#c53030')};
      }
    }
  }
`;
