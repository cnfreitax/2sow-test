import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import { Container, Content, Title, Form } from './styles';

const AddUser: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>Adicione um novo usuário.</Title>
          <Form>
            <input placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input placeholder="CPF" />

            <input placeholder="CPF" />
            <input placeholder="Endereço" />

            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <button type="button">Adicionar</button>
          </Form>
        </Content>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default AddUser;
