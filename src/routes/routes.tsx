import { Route, Switch } from 'react-router-dom';
import { Drawings } from '../pages/drawings';
import { Music } from '../pages/music';
import { Videos } from '../pages/videos';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { VR } from '../pages/vr';
import React from 'react';
import { MountFuji } from '../pages/RecRoom/mountfuji';
import { GateToAtlantis } from '../pages/RecRoom/atlantis';
import { AJR } from '../pages/RecRoom/ajr';
import { CliffSideSerenity } from '../pages/RecRoom/cliffside';

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
        <Route exact={true} path="/vr">
            <VR />
        </Route>
        <Route exact={true} path="/vr/mountfuji">
            <MountFuji />
        </Route>
        <Route exact={true} path="/vr/atlantis">
            <GateToAtlantis />
        </Route>
        <Route exact={true} path="/vr/wires">
            <AJR />
        </Route>
        <Route exact={true} path="/vr/serenity">
            <CliffSideSerenity />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);