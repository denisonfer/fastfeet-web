import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px;

  img {
    border-right: 1px solid #eee;
    padding: 0 10px;
  }

  nav {
    margin-left: 10px;
    flex: 1;
  }
`;

export const Linka = styled(Link)`
  color: #999;
  text-transform: uppercase;
  height: 45px;
  font-weight: bold;
  margin-right: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: #7d40e7;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-right: 10px;

  h2 {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }

  button {
    border: 0;
    color: #de3b3b;
  }
`;
