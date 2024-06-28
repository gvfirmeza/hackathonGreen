import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const NavBar = () => {
  const { toggleTheme, mode } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <SvgIcon
          component={EnergySavingsLeafIcon}
          sx={{
            color: mode === 'light' ? '#ffffff' : '#4caf50',
            fontSize: 32,
            marginRight: 1,
          }}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EnergySavior
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ fontWeight: 600 }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dashboard" style={{ fontWeight: 600 }}>
          Dashboard
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;