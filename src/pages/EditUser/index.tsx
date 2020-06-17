import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiInfo,
  FiGlobe,
  FiSettings,
} from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Header from '../../components/Header';
import { useToast } from '../../hooks/toast';
import { cepMask } from '../../utils/maskInput';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import Input from '../../components/Input';

import { Container, Content, Title, Subtitle } from './style';
import api from '../../service/api';
import viacep from '../../service/viacep';

interface UserParams {
  user: string;
  email: string;
  cpf: string;
  id?: string;
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

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
}

const EditUser: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<UserParams>();

  const [userInfo, setUserInfo] = useState<SubmitUser>(); //eslint-disable-line
  const [inputCep, setInputCep] = useState(`${params.cep}`);
  const [localidade, setLocalidade] = useState(`${params.city}`);
  const [logradouro, setLogradouro] = useState(`${params.streat}`);
  const [bairro, setBairro] = useState(`${params.neighborhood}`);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  useEffect(() => {
    api.get(`/usuarios?name=${params.user}`).then((response) => {
      setUserInfo(response.data);
    });
  }, [params.user]);

  const handleViaCep = useCallback(async () => {
    const treatedCep = cepMask(inputCep);
    setInputCep(treatedCep);

    try {
      await viacep.get<ViaCepResponse>(`${inputCep}/json`).then((response) => {
        setLocalidade(response.data.localidade);
        setLogradouro(response.data.logradouro);
        setBairro(response.data.bairro);
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'CEP Inválido',
        description: 'Verifique o CEP informado',
      });
    }
  }, [inputCep, addToast]);

  const handleSubmit = useCallback(
    async (data: SubmitUser) => {
      try {
        await api.patch(`usuarios/${params.id}`, data);

        addToast({
          type: 'success',
          title: 'Alterações aplicadas',
          description: `Usuário ${params.user} foi atualizado`,
        });

        history.push('/');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro nas configurações',
          description: 'Verifique se o formato das alterações estão corretos',
        });
      }
    },
    [params.id, params.user, history, addToast],
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>
            <FiSettings />
            Configurações
          </Title>
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
              readOnly
              value={params.cpf}
              icon={FiInfo}
              placeholder="CPF"
            />

            <Input
              name="cep"
              value={inputCep}
              onChange={(e) => setInputCep(e.target.value)}
              onBlur={handleViaCep}
              icon={FiGlobe}
              placeholder="CEP"
            />

            <Input
              name="streat"
              value={logradouro}
              readOnly
              icon={FiInfo}
              placeholder="Endereço"
            />

            <Input
              name="neighborhood"
              value={bairro}
              icon={FiInfo}
              readOnly
              placeholder="Bairro"
            />
            <Input
              name="city"
              value={localidade}
              readOnly
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
