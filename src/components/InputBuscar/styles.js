import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Input = styled.input`
  height: 35px;
  width: 240px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;

  &::placeholder {
    color: #999;
    text-align: center;
  }
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  margin: 0 10px;
`;
