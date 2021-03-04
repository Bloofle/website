import { Route, Switch } from 'react-router-dom';
import { Drawings } from '../pages/drawings';
import { Music } from '../pages/music';
import { Videos } from '../pages/videos';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import React from 'react';

export const Routes = () => (
    <Switch>
        <Route path="/drawings">
            <Drawings />
        </Route>
        <Route path="/videos">
            <Videos />
        </Route>
        <Route path="/music">
            <Music />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);