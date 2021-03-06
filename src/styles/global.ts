import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input, button {
  font: 16px 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}
`;
