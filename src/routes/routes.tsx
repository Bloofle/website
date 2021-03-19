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
import { Minecraft } from '../pages/Minecraft/minecraft';
import { Fortnite } from '../pages/Fortnite/fortnite';
import { ModernSuite } from '../pages/RecRoom/modernsuite';
import { Secret } from '../pages/Secret/secret';

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
        <Route exact={true} path="/vr/modernsuite">
            <ModernSuite />
        </Route>
        <Route path="/secret">
            <Secret />
        </Route>
        <Route path="/minecraft">
            <Minecraft />
        </Route>
        <Route path="/fortnite">
            <Fortnite />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);