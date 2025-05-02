// src/components/InnerLayout.tsx
'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeMode } from '@/context/ThemeContext';
import { getTheme } from '@/theme';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
