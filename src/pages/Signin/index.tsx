import React, { useState, useEffect, useRef, useCallback } from 'react';
import { uuid } from 'uuidv4';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import InputLogin from '../../components/InputLogin';
import { useToast } from '../../hooks/toast';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

interface SubmitUser {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  // const [hasError, setHasError] = useState('');

  useEffect(() => {
    const hasToken = localStorage.getItem('@2sow:token');

    if (hasToken) {
      history.push('/dashboard');
    }
  }, [history]);

  const handleLogin = useCallback(
    async (data: SubmitUser) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Campo Obrigatório')
            .email('Formato não é válido'),
          password: Yup.string().min(4, 'Senha incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const token = uuid();
        localStorage.setItem('@2sow:token', token);

        history.push('/dashboard');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro no login!',
          description: 'Verifique suas credenciais',
        });
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <Form ref={formRef} onSubmit={handleLogin}>
          <img src={logo} alt="Login" />

          <h1>Login</h1>

          <InputLogin
            name="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="E-mail"
          />
          <InputLogin
            name="password"
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Signin;
