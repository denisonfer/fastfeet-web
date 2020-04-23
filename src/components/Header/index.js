import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Perfil, Linka } from './styles';
import logo from '../../assets/logo.svg';
import { logout } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleButton() {
    dispatch(logout());
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <nav>
        <ul>
          <Linka to="dashboard">encomendas</Linka>
          <Linka to="entregadores">entregadores</Linka>
          <Linka to="destinatarios">destinatários</Linka>
          <Linka to="problemas">problemas</Linka>
        </ul>
      </nav>

      <Perfil>
        <h2>Admin FastFeet</h2>
        <button type="button" onClick={handleButton}>
          sair do sistema
        </button>
      </Perfil>
    </Container>
  );
}
