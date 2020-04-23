import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: #7d40e7;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 15px;

  &:hover {
    background: ${darken(0.03, '#7d40e7')};
  }
`;
