import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style/custom-antd.css";
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
import Toggle from "./components/shared/theme/Toggler";

import { Container, Wrapper } from "./components/shared/styles/layout";
import Spinner from "./components/shared/spinner/Spinner";

import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Wrapper>
            <ErrorBoundary>
              <Navbar theme={theme} themeToggler={themeToggler} />
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
      </Provider>
    </ThemeProvider>
  );
};

export default App;
