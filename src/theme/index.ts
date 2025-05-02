// src/theme/index.ts
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...palette(mode),
    },
    typography,
  });
