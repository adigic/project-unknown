'use client';
import { Button } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

export default function ToggleThemeButton() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Button variant="outlined" onClick={toggleMode}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
