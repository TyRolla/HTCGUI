import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import App from "./App";
import NotFound from "./NotFound";
import MultiSearch from "./MultiSearch";
import history from "./../history";
import Option from "./Option";

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Option" component={Option} />
          <Route path="/Singlesearch" component={App} />
          <Route path="/Multisearch" component={MultiSearch} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
