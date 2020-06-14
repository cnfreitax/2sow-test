import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  display: flex;

  background: #c53030;

  & + div {
    margin-top: 4px;
  }

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    strong {
      font-size: 20px;
      line-height: 28px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 15px;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
