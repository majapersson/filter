import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Article from "./pages/Article";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:id" render={props => <Article {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
