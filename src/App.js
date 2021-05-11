import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import setAuthToken from "./redux/helper/setAuthToken";
import { loadUser } from "./redux/thunks/auth";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Routes from "./components/routing/Routes"
import { GlobalStyle } from "./components/shared/styles/global";
import { Wrapper } from "./components/shared/styles/layout";
import Spinner from "./components/shared/spinner/Spinner";

import  ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary"

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <ErrorBoundary>
            <Navbar />
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
  );
};

export default App;
