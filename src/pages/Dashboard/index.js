import React, { useEffect, useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import api from '../../services/api';

import { Container, Status } from './styles';
import ButtonCadastrar from '../../components/ButtonCadastrar';
import InputBuscar from '../../components/InputBuscar';

export default function Dashboard() {
  const [encomendas, setEncomendas] = useState([]);

  async function loadOrders() {
    const response = await api.get('encomendas');

    const data = response.data.allOrders;

    setEncomendas(data);
  }

  useEffect(() => {
    loadOrders();
  }, []);

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
          {encomendas.map((item) => (
            <tr key={item.id}>
              <td>#0{item.id}</td>
              <td>{item.recipient.name}</td>
              <td className="deliveryman">
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt="Foto Entregador"
                />
                {item.courier.name}
              </td>
              <td>{item.recipient.city}</td>
              <td>{item.recipient.state}</td>
              <td>
                <Status status="cancelado">Entregue</Status>
              </td>
              <td>
                <button type="button">
                  <MdMoreHoriz size={20} color="#c6c6c6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
