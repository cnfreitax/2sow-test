import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  padding: 0 20px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-top: 50px;
  max-width: 300px;
  color: ${(props) => props.theme.colors.color};

  span {
    font-size: 35px;
    color: #fd5e81;
  }
`;

export const SubTitle = styled.h1`
  font-size: 25px;
  margin-top: 20px;
  max-width: 300px;
  color: ${(props) => props.theme.colors.color};
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  width: 100%;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: ${(props) => props.theme.colors.color};
    border-radius: 5px 0 0 5px;
    border: 2px solid transparent;
    box-shadow: 0 0 8px rgba(0, 0, 0, 1);
    background: transparent;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors.color};
    }
  }
  button {
    width: 90px;
    height: 70px;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    font-weight: bold;
    margin-left: 10px;
    background: ${(props) => props.theme.colors.primary};
    transition: opacity 0.5s;
    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 30px;
      height: 30px;
      color: ${(props) => props.theme.colors.secundary};
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-size: 20px;
`;

export const Users = styled.div`
  width: 100%;
  display: grid;

  grid-gap: 24px;
  list-style: none;
  margin-top: 50px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    margin-bottom: 40px;
  }

  td,
  th {
    border: 1px solid ${(props) => props.theme.colors.color};
    text-align: left;
    padding: 8px;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1rem;
    font-weight: 5px;
  }

  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors.primary};
  }

  td {
    color: ${(props) => props.theme.colors.color};
    font-size: 1em;

    @media (width: 1015px) {
      max-width: 150px;
    }
    @media (max-width: 700px) {
      max-width: 60px;
    }
    a {
      text-decoration: none;

      svg {
        color: #c53030;

        width: 20px;
        height: 20px;

        &:hover {
          color: ${shade(0.3, '#c53030')};
        }
      }
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
  }
`;

export const UserSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 1);
  padding: 10px;
  transition: transform 0.2s;
  color: ${(props) => props.theme.colors.color};
  line-height: 25px;
  position: relative;

  &::before {
    position: absolute;
    height: 80%;
    width: 4px;
    left: 0;
    top: 10%;
    content: '';
    background: #fd5e81;
  }

  @media (max-width: 700px) {
    & + div {
      margin-top: 15px;
    }
  }

  &:hover {
    transform: translateX(5px);
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
      margin-right: 2px;
      flex: 1;
    }
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  margin-right: 8px;

  a {
    text-decoration: none;
    margin-right: 5px;

    svg {
      color: #c53030;

      width: 20px;
      height: 20px;

      &:hover {
        color: ${shade(0.3, '#c53030')};
      }
    }
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
