import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  border: 0;
  color: #fff;
  border-radius: 5px 0 0 5px;
  border: 1px solid #fd5e81;
  box-shadow: 0 0 1px rgba(0, 0, 0, 2);
  background: transparent;
  padding: 8px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 5px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.color};
    &::placeholder {
      ${(props) => props.theme.colors.color};
    }
  }

  svg {
    margin-right: 15px;
    color: ${(props) => props.theme.colors.color};
  }
`;
