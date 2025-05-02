// src/theme/palette.ts
import { PaletteOptions } from '@mui/material/styles';

const palette = (mode: 'light' | 'dark'): PaletteOptions => ({
  primary: {
    main: mode === 'light' ? '#1976d2' : '#90caf9',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
  },
  background: {
    default: mode === 'light' ? '#f4f6f8' : '#121212',
    paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
  },
  text: {
    primary: mode === 'light' ? '#212121' : '#ffffff',
    secondary: mode === 'light' ? '#666666' : '#bbbbbb',
  },
});

export default palette;
