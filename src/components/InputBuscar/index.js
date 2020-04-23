import React from 'react';

import { Input, Icon } from './styles';

export default function InputBuscar({ type, placeholder }) {
  return (
    <>
      <Input type={type} placeholder={placeholder}></Input>
      <Icon size={22} color="#999" />
    </>
  );
}
