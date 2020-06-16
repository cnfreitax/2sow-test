import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiInfo, FiGlobe } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Form } from '@unform/web';
import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import Input from '../../components/Input';

import { Container, Content, Title } from './styles';

const AddUser: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>Adicione um novo usuário.</Title>
          <Form initialData={{ name: 'Victor' }} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input name="cpf" icon={FiInfo} placeholder="CPF" />

            <div>
              <Input name="cep" icon={FiGlobe} placeholder="CEP" />
            </div>
            <Input name="address" icon={FiInfo} placeholder="Endereço" />

            <Input name="neighborhood" icon={FiInfo} placeholder="Bairro" />
            <Input name="city" icon={FiInfo} placeholder="Cidade" />
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
