import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Title, Form } from './styles';

const AddUser: React.FC = () => {
  return (
    <Container>
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
  );
};

export default AddUser;
