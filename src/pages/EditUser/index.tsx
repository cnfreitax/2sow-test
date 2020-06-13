import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Title, Form, SubTitle } from './style';

const EditUser: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Edite as informações do usuário.</Title>
        <SubTitle>Lembre-se de verifica-las antes de confirmar</SubTitle>
        <Form>
          <input placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="CPF" />

          <input placeholder="CPF" />
          <input placeholder="Endereço" />

          <input placeholder="Bairro" />
          <input placeholder="Cidade" />
          <button type="button">Confirmar</button>
        </Form>
      </Content>
      <Link to="/">
        <FiArrowLeft />
      </Link>
    </Container>
  );
};

export default EditUser;
