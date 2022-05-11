import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
	background: ${p => p.theme.darkSoft};
	color: ${p => p.theme.lightSoft};
    font-family: 'Space Mono', monospace;
  }
`;

export default GlobalStyle;
