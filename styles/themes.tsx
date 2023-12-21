import { createGlobalStyle } from 'styled-components';

interface DisplayTheme {
  background: string;
  text: string;
  mode: 'light' | 'dark';
}

export const lightTheme = {
    background: 'var(--light)',
    text: 'var(--dark)',
    mode: 'light',
};
  
export const darkTheme = {
    background: 'var(--dark)',
    text: 'var(--light)',
    mode: 'dark',
};

declare module 'styled-components' {
  export interface DefaultTheme extends DisplayTheme {}
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-color: ${(props) => props.theme.text};

    --outline-color: ${(props) => props.theme.mode == 'light' ? 'var(--dark)' : 'var(--light)'};
    --body-color: ${(props) => props.theme.mode == 'light' ? 'var(--light)' : 'var(--dark)'}
  }
`;

export const themes = {
    light: lightTheme,
    dark: darkTheme,
  };