import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';
import App from './components/app';
import AppComment from './components/comment-page/app-comment';
import 'bootstrap/dist/css/bootstrap.css';

const history =createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    allReducers,
    compose(applyMiddleware(middleware),applyMiddleware(thunkMiddleware)));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/b" component={AppComment}/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
