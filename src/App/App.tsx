import React from "react";

import GlobalStyle from "./globalStyles";
import AppNavigation from "~/navigation/AppNavigation";
import AppThemeProvider from "~/providers/AppThemeProvider";

const App = (): JSX.Element => (
  <AppThemeProvider>
    <GlobalStyle />
    <AppNavigation />
  </AppThemeProvider>
);

export default App;
