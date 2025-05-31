// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    overflow: hidden;
  }
  h1, h2, h3, p, button {
    color: ${({ theme }) => theme.text};
  }
`;