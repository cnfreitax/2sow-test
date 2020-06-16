import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch, FiTrash2, FiEdit } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import api from '../../service/api';

import { useToast } from '../../hooks/toast';

import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import {
  Container,
  Content,
  Title,
  Form,
  Users,
  User,
  Options,
} from './styles';

interface User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  address: {
    streat: string;
    neighborhood: string;
    city: string;
  };
}

const Dashboard: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const { addToast } = useToast();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/usuarios').then((response) => {
      setUsers(response.data);
      localStorage.setItem('@2sow:list', JSON.stringify(response.data));
    });
  }, []);

  const handleDeleteUser = useCallback(
    (id) => {
      api.delete(`usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      addToast();
    },
    [users, addToast],
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Content>
          <Title>
            Adicione, liste
            <span> & </span>
            explore por usuários cadastrados
          </Title>
          <Form>
            <input type="text" placeholder="Digite um nome" />
            <button type="button">
              <FiSearch />
            </button>
          </Form>

          <Users>
            {users.map((user) => (
              <User key={user.cpf}>
                <Options>
                  <button type="button">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    type="button"
                  >
                    <FiTrash2 />
                  </button>
                </Options>

                <img
                  src="https://avatars1.githubusercontent.com/u/60153670?s=460&u=3a96de007817cfdaff15e19a7897b7f640b2022a&v=4"
                  alt="Victor Freitas"
                />
                <strong>{user.name}</strong>
                <div>
                  <strong>CPF:</strong>
                  <p>{user.cpf}</p>
                </div>
                <div>
                  <strong>E-mail:</strong>
                  <p>{user.email}</p>
                </div>

                <p>{user.address.streat}</p>

                <p>{user.address.city}</p>
              </User>
            ))}
          </Users>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
