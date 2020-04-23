import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import api from '../../services/api';

import { Container, Status } from './styles';
import ButtonCadastrar from '../../components/ButtonCadastrar';
import InputBuscar from '../../components/InputBuscar';

export default function Dashboard() {
  api.get('encomendas');
  return (
    <Container>
      <h1>Gerenciador de Encomendas</h1>

      <div>
        <InputBuscar type="text" placeholder="Buscar por encomendas" />

        <ButtonCadastrar type="button">cadastrar</ButtonCadastrar>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig Van Beethoven</td>
            <td className="deliveryman">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Foto Entregador"
              />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={'entregue'}>Entregue</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={20} color="#c6c6c6" />
              </button>
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Edward Mãos de Tesoura</td>
            <td className="deliveryman">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Foto Entregador"
              />
              Zé pequeno
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={'retirada'}>retirada</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={20} color="#c6c6c6" />
              </button>
            </td>
          </tr>

          <tr>
            <td>#02</td>
            <td>Ricardo de Paula Tejano</td>
            <td className="deliveryman">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="Foto Entregador"
              />
              Zé da Moita
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={'cancelado'}>Cancelado</Status>
            </td>
            <td>
              <button type="button">
                <MdMoreHoriz size={20} color="#c6c6c6" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
