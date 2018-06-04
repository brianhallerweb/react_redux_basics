import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import TodosApp from "../components/TodosApp";
import CounterApp from "../components/CounterApp";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/todos" component={TodosApp} />
          <Route path="/counter" component={CounterApp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
