import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Route/Home/Home';
import Header from './Header';
import Post from '../Route/Post/Post';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Post} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);
