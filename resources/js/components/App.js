import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './GlobalStyles';

export default class App extends Component {
    render() {
        return (
            <>
                <Router />
                <GlobalStyle />
            </>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
