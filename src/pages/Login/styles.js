import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #7d40e7;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;
    max-width: 360px;
    padding: 20px;
    border-radius: 4px;

    > h1 {
      font-size: 33px;
      color: #7d40e7;
      text-align: center;
      font-weight: bold;
      letter-spacing: 1.1;
      margin: 40px 0 30px;
    }

    form {
      label {
        display: block;
        font-weight: bold;
        color: #444;
        margin-top: 10px;
      }

      input {
        height: 45px;
        width: 100%;
        padding: 12px 15px;
        border-radius: 4px;
        border: 1px solid #ddd;
        margin: 10px 0;

        &::placeholder {
          color: #999;
          font-size: 16px;
        }
      }

      span {
        color: #d7385e;
        align-self: stretch;
        font-style: italic;
      }

      button {
        background: #7d40e7;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        padding: 12px 15px;
        width: 100%;
        border: 0;
        border-radius: 4px;
        margin: 10px 0 40px;

        &:hover {
          background: ${darken(0.03, '#7d40e7')};
        }
      }
    }
  }
`;
