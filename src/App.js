import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar />
          <Route path="/" component={Landing} exact />
          <Switch>
            <Route path="/register" component={Register} exact />
          </Switch>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
