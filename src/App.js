import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import setAuthToken from "./redux/helper/setAuthToken";
import { loadUser } from "./redux/thunks/auth";
import { Provider } from "react-redux";
import store from "./redux/store";

import Adopt from "./pages/adopt/Adopt";
import Main from "./pages/main/Main";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./pages/profile/Profile";
import AdminRoute from "./components/routing/AdminRoute";
import PrivateRoute from "./components/routing/PrivateRoute";

import { GlobalStyle } from "./components/shared/styles/global";
import { Wrapper } from "./components/shared/styles/layout";
import Spinner from "./components/shared/spinner/Spinner";

const Admin = lazy(() => import("./pages/admin/Admin"));

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
          <Navbar />
          <Suspense fallback={<Spinner />}>
            <Route path="/" component={Main} exact />
            <Switch>
              <Route path="/register" component={Register} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/profile" component={Adopt} exact />
              <PrivateRoute path="/profile/:id" component={Profile} exact />
              <AdminRoute path="/admin" component={Admin} exact />
            </Switch>
          </Suspense>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
