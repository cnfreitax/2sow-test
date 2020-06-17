import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiInfo, FiGlobe } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import Input from '../../components/Input';

import { Container, Content, Title, Subtitle } from './style';
import api from '../../service/api';

interface UserParams {
  user: string;
  email: string;
  cpf: string;
  id: string;
  cep: string;
  city: string;
  streat: string;
  neighborhood: string;
}

interface SubmitUser {
  name: string;
  email: string;
  cpf: string;
  cep: string;
  streat: string;
  neighborhood: string;
  city: string;
}

const EditUser: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<UserParams>();
  console.log(params.user);

  const [userInfo, setUserInfo] = useState<SubmitUser>();

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  useEffect(() => {
    api.get(`/usuarios?name=${params.user}`).then((response) => {
      setUserInfo(response.data);
    });
  }, [params.user]);

  const handleSubmit = useCallback(
    async (data: SubmitUser) => {
      try {
        await api.patch(`usuarios/${params.id}`, data);
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [params.id, history],
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>Configurações.</Title>
          <Subtitle>
            As alterações serão aplicadas para o usuário{' '}
            <span>{params.user}</span>
          </Subtitle>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              defaultValue={params.user}
              icon={FiUser}
              placeholder="Nome"
            />
            <Input
              defaultValue={params.email}
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="cpf"
              value={params.cpf}
              icon={FiInfo}
              placeholder="CPF"
            />

            <Input
              name="cep"
              defaultValue={params.cep}
              icon={FiGlobe}
              placeholder="CEP"
            />

            <Input
              name="streat"
              defaultValue={params.streat}
              icon={FiInfo}
              placeholder="Endereço"
            />

            <Input
              name="neighborhood"
              defaultValue={params.neighborhood}
              icon={FiInfo}
              placeholder="Bairro"
            />
            <Input
              name="city"
              defaultValue={params.city}
              icon={FiInfo}
              placeholder="Cidade"
            />
            <button type="submit">Aplicar</button>
          </Form>
        </Content>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default EditUser;
