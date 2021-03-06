import React, { useEffect, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import setAuthToken from "./redux/helper/setAuthToken";
import { loadUser } from "./redux/thunks/auth";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routing/Routes";
import { GlobalStyle } from "./components/shared/styles/global";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/shared/styles/theme/Theme";
import { useDarkMode } from "./components/shared/theme/useDarkMode";
import { Container, Wrapper } from "./components/shared/styles/layout";
import Spinner from "./components/shared/spinner/Spinner";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
import { I18nProvider, LOCALES } from "./assets/i18n/index";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nProvider locale={locale}>
      <Provider store={store}>
        <ThemeProvider theme={themeMode}>
          <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
              <ErrorBoundary>
                <Navbar
                  theme={theme}
                  themeToggler={themeToggler}
                  setLocale={setLocale}
                />
                <Container></Container>
                <Suspense fallback={<Spinner />}>
                  <Switch>
                    <Route path="/" component={Main} exact />
                    <Route component={Routes} />
                  </Switch>
                </Suspense>
              </ErrorBoundary>
            </Wrapper>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </I18nProvider>
  );
};

export default App;
