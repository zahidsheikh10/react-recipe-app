import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Recipe from "./Recipe";

const BrowserRouter = () => (
	<Router>
		<Switch>
			<Route path="/" component={App} exact/>
	 		<Route path="/recipe/:id" component={Recipe}/>
	 	</Switch>
	</Router>
)
export default BrowserRouter;