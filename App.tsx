import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/pages/home';

import { ThemeProvider } from 'styled-components'
import light from './src/styles/theme/light';

const App: React.FC = () => {
  
  return (
    <ThemeProvider theme={light}>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  )
}

export default App
