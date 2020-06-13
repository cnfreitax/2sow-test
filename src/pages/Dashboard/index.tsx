import React, { useCallback, useEffect, useState } from 'react';
import {
  FiUserPlus,
  FiPower,
  FiSearch,
  FiTrash2,
  FiEdit,
} from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import api from '../../service/api';

import {
  Container,
  Header,
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
  const history = useHistory();

  const [users, setUsers] = useState<User[]>([]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@2sow:token');
    history.push('/');
  }, [history]);

  useEffect(() => {
    api.get('/usuarios').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDeleteUser = useCallback(
    (id) => {
      api.delete(`usuarios/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    },
    [users],
  );

  return (
    <Container>
      <Header>
        <Link to="/">2SowUser</Link>

        <div>
          <Link to="/user-new">
            <FiUserPlus />
          </Link>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </Header>

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
                <button onClick={() => handleDeleteUser(user.id)} type="button">
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
              <div>
                <strong>Endereço:</strong>
                <p>{user.address.streat}</p>
              </div>
              <p>{user.address.city}</p>
            </User>
          ))}
        </Users>
      </Content>
    </Container>
  );
};

export default Dashboard;
