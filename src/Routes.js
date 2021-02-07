import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/react-youtube" component={Main} />
    </Switch>
  );
};

export default Routes;
