/* eslint-disable react/jsx-no-undef */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import React from 'react';
import { PaletteMode } from '@mui/material';

import Footer from './components/Footer';
import AppAppBar from './components/AppAppBar';
import getLPTheme from './getLPTheme';
import Dashboard from './components/Dashboard';
import chinaTax from './config/china.json';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [city, ] = React.useState<string>('shanghai');
  const [showCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Dashboard city={city} chinaTax={chinaTax}/>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
