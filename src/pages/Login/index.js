import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { loginRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('Seu e-mail é obrigatório!'),
  password: Yup.string()
    .min(6, 'Insira sua senha! Mínimo 6 caracteres')
    .required('Sua senha é obrigatória!'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }
  return (
    <Container>
      <div>
        <h1>FASTFEET</h1>

        <Form schema={schema} onSubmit={handleSubmit}>
          <label htmlFor="email">SEU E-MAIL</label>
          <Input type="email" name="email" placeholder="exemplo@email.com" />

          <label htmlFor="password">SUA SENHA</label>
          <Input type="password" name="password" placeholder="***********" />

          <button type="submit">
            {loading ? 'Autenticando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </div>
    </Container>
  );
}
