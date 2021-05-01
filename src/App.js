import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import setAuthToken from "./redux/helper/setAuthToken";
import { loadUser } from "./redux/thunks/auth";
import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Adopt from "./pages/adopt/Adopt";
import AdminRoute from "./components/routing/AdminRoute";

import { GlobalStyle } from "./components/shared/styles/global";
import { Wrapper } from "./components/shared/styles/layout";

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
					{/* Todo: Create a beautiful loader for it */}
					<Suspense fallback={<div>Loading...</div>}>
						<Route path="/" component={Landing} exact />
						<Switch>
							<Route path="/register" component={Register} exact />
							<Route path="/login" component={Login} exact />
							<Route path="/adopt" component={Adopt} exact />
							<AdminRoute path="/admin" component={Admin} exact />
						</Switch>
					</Suspense>
				</Wrapper>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
