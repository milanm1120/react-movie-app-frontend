import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "./Login";
import SignUpContainer from "../containers/SignUpContainer";
import Home from "./Home";
import MoviePage from "./MoviePage";


export default function Pages() {
  return (
    <Switch>
        <Route exact path='/' component={routerProps => <Login routerProps={routerProps} />} />
        <Route exact path='/login' component={routerProps => <Login routerProps={routerProps} />} />
        <Route exact path='/signup' component={routerProps => <SignUpContainer routerProps={routerProps} />} />
        <Route exact path='/home' component={routerProps => <Home routerProps={routerProps} />} />
        <Route exact path='/movie/:id/view' component={routerProps => <MoviePage routerProps={routerProps} />} />
    </Switch>
  )
}
