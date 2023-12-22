import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from 'styled-components';
import AppLayout from "@/common/components/elements/layout/layout";
import { themes, GlobalStyles } from "../styles/themes";

export type Theme = 'light' | 'dark';

export interface ThemeProps {
  theme: Theme;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const onThemeChange = (isDark: boolean) => {
    isDark ? setTheme('dark') : setTheme('light')
  }
  

  return (
    <ThemeProvider theme={themes[theme] as DefaultTheme}>
      <GlobalStyles />
      <AppLayout onThemeChange={onThemeChange}>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
export default MyApp;