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
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
          containedPrimary: {
            backgroundColor: mode === 'light' ? '#1976d2' : '#90caf9',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#115293' : '#5f9fe5',
            },
          },
        },
        defaultProps: {
          variant: 'contained',
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
            color: mode === 'light' ? '#000000' : '#ffffff',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBottom: '1rem',
          },
        },
      },
    },
  });
