import React, { useState, FormEvent, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/login.svg';

import { Container, Content, Background, Error } from './styles';

const Signin: React.FC = () => {
  const history = useHistory();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    const hasToken = localStorage.getItem('@2sow:token');

    if (hasToken) {
      history.push('/dashboard');
    }
  }, [history]);

  async function handleValidateUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!inputEmail || !inputPassword) {
      setHasError('Verifique suas credenciais');
      return;
    }

    if (inputPassword.length < 6) {
      setHasError('A senha deve conter mais de 6 digitos');
      return;
    }
    const token = uuid();
    localStorage.setItem('@2sow:token', token);

    history.push('/dashboard');
  }

  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleValidateUser}>
          <img src={logo} alt="Login" />

          <h1>Login</h1>

          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>

          {hasError && <Error>{hasError}</Error>}
        </form>
      </Content>
    </Container>
  );
};

export default Signin;
