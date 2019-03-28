import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Route/Home/Home';
import Header from './Header';
import Post from '../Route/Post/Post';
import PostShow from '../Route/Post/PostShow';
import PostEdit from '../Route/Post/PostEdit';
import PostCreate from '../Route/Post/PostCreate';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/posts' exact component={Post} />
            <Route path='/posts/create' exact component={PostCreate} />
            <Route path='/posts/:id' exact component={PostShow} />
            <Route path='/posts/:id/edit' exact component={PostEdit} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
);
