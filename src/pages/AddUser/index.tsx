import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiInfo, FiGlobe } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Title } from './styles';
import api from '../../service/api';

interface AddressProps {
  cep: string;
  streat: string;
  neighborhood: string;
  city: string;
}

interface SubmitiUser {
  name: string;
  email: string;
  cpf: string;
  address: AddressProps;
}

const AddUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const handleSubmit = useCallback(async (data: SubmitiUser) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Por favor digite um nome.'),
        email: Yup.string().required('Obrigatório').email('Formato incorreto'),
        cpf: Yup.string().required('CPF obrigatório'),
        cep: Yup.string().required('CEP obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/usuarios', data);
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>Adicione um novo usuário.</Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input name="cpf" icon={FiInfo} placeholder="CPF" />

            <Input name="cep" icon={FiGlobe} placeholder="CEP" />

            <Input name="streat" icon={FiInfo} placeholder="Endereço" />

            <Input name="neighborhood" icon={FiInfo} placeholder="Bairro" />
            <Input name="city" icon={FiInfo} placeholder="Cidade" />
            <button type="submit">Adicionar</button>
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
