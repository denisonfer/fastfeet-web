import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto 40px;

  h1 {
    color: #444;
    font-size: 24px;
    margin: 40px 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1em;

    th {
      font-size: 16px;
      text-align: left;
      padding: 0 15px;
    }

    td {
      background: #fff;
      color: #999;
      font-size: 16px;
      padding: 15px;
      vertical-align: middle;
      text-align: left;

      &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-of-type {
        text-align: center;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:not(:last-of-type) {
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
      }

      &.deliveryman {
        display: flex;
        align-items: center;
      }

      img {
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }

      button {
        border: 0;
        background: transparent;
      }
    }
  }
`;

export const Status = styled.span.attrs((props) => ({
  status: props.status,
}))`
  ${(props) =>
    props.status === 'entregue'
      ? css`
          & {
            background: #dff0df;
            color: #2ca42b;
          }
          &:before {
            background: #2ca42b;
          }
        `
      : props.status === 'retirada'
      ? css`
          & {
            background: #bad2ff;
            color: #4d85ee;
          }
          &:before {
            background: #4d85ee;
          }
        `
      : props.status === 'cancelado'
      ? css`
          & {
            background: #fab0b0;
            color: #de3b3b;
          }
          &:before {
            background: #de3b3b;
          }
        `
      : css`
          & {
            background: #f0f0df;
            color: #c1bc35;
          }
          &:before {
            background: #c1bc35;
          }
        `};

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0;
  text-transform: uppercase;
  font-size: 14px;

  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
