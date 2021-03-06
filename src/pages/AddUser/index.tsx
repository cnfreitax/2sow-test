import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiInfo, FiGlobe } from 'react-icons/fi';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { PassThrouthLoading } from 'react-loadingg';
import Header from '../../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import usePersistedState from '../../utils/usePersistedState';

import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Title, LoadingContainer } from './styles';
import api from '../../service/api';
import viacep from '../../service/viacep';
import { cpfMask, cepMask } from '../../utils/maskInput';
import { useToast } from '../../hooks/toast';

interface AddressProps {
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

interface SubmitiUser {
  name: string;
  email: string;
  cpf: string;
  address: AddressProps;
}

const AddUser: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const [inputCep, setInputCep] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cpfInput, setCpfInput] = useState('');
  const [loadUser, setLoadUser] = useState(false);

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

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
    async (data: SubmitiUser) => {
      setLoadUser(true);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório.'),
          email: Yup.string()
            .required('Campo obrigatório')
            .email('Formato incorreto'),
          cpf: Yup.string().required('Campo obrigatório'),
          cep: Yup.string().required('Campo obrigatório'),
          streat: Yup.string().required('Campo obrigatório'),
          neighborhood: Yup.string().required('Campo obrigatório'),
          city: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/usuarios', data);

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Usuário foi adicionado à sua lista',
        });
        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history, addToast],
  );

  const handleCpfMask = useCallback(() => {
    const treatedCpf = cpfMask(cpfInput);
    setCpfInput(treatedCpf);
  }, [cpfInput]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Title>Adicione um novo usuário.</Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="cpf"
              value={cpfInput}
              onChange={(e) => setCpfInput(e.target.value)}
              onBlur={handleCpfMask}
              icon={FiInfo}
              maxLength={14}
              placeholder="CPF"
            />

            <Input
              name="cep"
              value={inputCep}
              onChange={(e) => setInputCep(e.target.value)}
              onBlur={handleViaCep}
              icon={FiGlobe}
              maxLength={9}
              placeholder="CEP"
            />

            <Input
              name="streat"
              defaultValue={logradouro}
              icon={FiInfo}
              placeholder="Endereço"
            />

            <Input
              name="neighborhood"
              defaultValue={bairro}
              icon={FiInfo}
              placeholder="Bairro"
            />
            <Input
              name="city"
              defaultValue={localidade}
              icon={FiInfo}
              placeholder="Cidade"
            />
            <button type="submit">Adicionar</button>
            {loadUser && (
              <LoadingContainer>
                <PassThrouthLoading
                  size="large"
                  color="#792359"
                  speed={0}
                  style={{ textAlign: 'center' }}
                />
              </LoadingContainer>
            )}
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
