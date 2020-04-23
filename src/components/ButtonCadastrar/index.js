import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Button } from './styles';

export default function ButtonCadastrar() {
  return (
    <Button>
      <MdAdd size={22} color="#fff" />
      cadastrar
    </Button>
  );
}
