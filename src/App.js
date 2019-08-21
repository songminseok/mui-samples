import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SpacingGrid from './Layout/Grid/SpacingGrid';
import theme from './theme';
import CenteredGrid from './Layout/Grid/CenteredGrid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Material UI Samples
          </Typography>
        </Toolbar>
      </AppBar>
      <Box m={1} clone>
        <Typography variant='h6' align='left'>
          SpacingGrid
        </Typography>
      </Box>
      <SpacingGrid />
      <Box m={1} clone>
        <Typography variant='h6' align='left'>
          Basic Grid
        </Typography>
      </Box>
      <CenteredGrid />
    </ThemeProvider>
  );
}

export default App;
