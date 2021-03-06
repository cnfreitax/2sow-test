import React, { useCallback, useEffect, useState, FormEvent } from 'react';
import { FiSearch, FiTrash2, FiEdit } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { PassThrouthLoading } from 'react-loadingg';
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
  Error,
  Users,
  SubTitle,
  UserSearch,
  LoadingContainer,
  Options,
  UsersContainer,
  UserCard,
} from './styles';

interface User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  city: string;
  cep: string;
  streat: string;
  neighborhood: string;
}

const Dashboard: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const { addToast } = useToast();

  const [users, setUsers] = useState<User[]>([]);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [userResult, setUserResult] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/usuarios?_sort=name').then((response) => {
      setUsers(response.data);
      localStorage.setItem('@2sow:list', JSON.stringify(response.data));
      setIsLoading(false);
    });
  }, []);

  const handleSearchUser = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setInputError('');
      if (!userSearchInput) {
        setInputError('Digite um nome');
        return;
      }

      try {
        api.get(`/usuarios?name=${userSearchInput}`).then((response) => {
          setUserResult(response.data);
          setUserSearchInput('');
          setIsLoading(false);
        });
      } catch (err) {
        setInputError('Usuário não encontrado');
      }
    },
    [userSearchInput, setInputError],
  );

  const handleDeleteUser = useCallback(
    (id) => {
      api.delete(`usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      addToast({
        type: 'info',
        title: 'Usuário removido',
        description: `Usuário foi removido de sua lista`,
      });
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
          <Form hasError={!!inputError} onSubmit={handleSearchUser}>
            <input
              value={userSearchInput}
              onChange={(e) => setUserSearchInput(e.target.value)}
              type="text"
              placeholder="Digite um nome"
            />

            <button type="submit">
              <FiSearch />
            </button>
          </Form>
          {inputError && <Error>{inputError}</Error>}
          {isLoading && (
            <LoadingContainer>
              <PassThrouthLoading
                size="large"
                color="#792359"
                speed={0}
                style={{ textAlign: 'center' }}
              />
            </LoadingContainer>
          )}

          <Users>
            {userResult.map((user) => (
              <UserSearch key={user.cpf}>
                <Options>
                  <Link
                    to={`user-edit/${user.name}/${user.email}/${user.cpf}/${user.id}/${user.cep}/${user.city}/${user.streat}/${user.neighborhood}`}
                  >
                    <FiEdit />
                  </Link>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    type="button"
                  >
                    <FiTrash2 />
                  </button>
                </Options>
                <strong>{user.name}</strong>
                <div>
                  <strong>CPF:</strong>
                  <p>{user.cpf}</p>
                </div>
                <div>
                  <strong>E-mail:</strong>
                  <p>{user.email}</p>
                </div>
                <p>{user.city}</p>
              </UserSearch>
            ))}

            <SubTitle>Seus usuários:</SubTitle>

            <UsersContainer>
              {users.map((user) => (
                <UserCard key={user.id}>
                  <Options>
                    <Link
                      to={`user-edit/${user.name}/${user.email}/${user.cpf}/${user.id}/${user.cep}/${user.city}/${user.streat}/${user.neighborhood}`}
                    >
                      <FiEdit />
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      type="button"
                    >
                      <FiTrash2 />
                    </button>
                  </Options>
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                  <div>
                    <strong>CPF:</strong>
                    <p>{user.cpf}</p>
                  </div>
                  <div>
                    <strong>Cidade:</strong>
                    <p>{user.city}</p>
                  </div>
                </UserCard>
              ))}
            </UsersContainer>
          </Users>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
