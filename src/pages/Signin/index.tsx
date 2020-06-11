import React from 'react';

import logo from '../../assets/login.svg';

import { Container, Content, FormAnimeted, Background } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
