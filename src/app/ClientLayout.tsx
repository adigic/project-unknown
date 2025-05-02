// src/components/InnerLayout.tsx
'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeMode } from '@/context/ThemeContext';
import { getTheme } from '@/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      {children}
      <Footer/>
    </ThemeProvider>
  );
}
