import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Route path="/" component={Landing} exact />
        <Switch>
          <Route path="/register" component={Register} exact />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
