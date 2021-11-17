import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import ThemeConfig from './themes';
import Routes from './routes';
import GlobalStyles from './themes/globalStyles';

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
}

export default App;
