'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
/* import { useTheme } from '@mui/material/styles'; */
import { useThemeMode } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const MotionAppBar = motion(AppBar);

export default function Header() {
/*   const theme = useTheme(); */
  const { mode, toggleMode } = useThemeMode();

  return (
    <MotionAppBar
      position="sticky"
      elevation={2}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Logo or Menu */}
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            MyApp
          </Typography>
        </Box>

        {/* Right: Links + Theme Toggle */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </MotionAppBar>
  );
}
