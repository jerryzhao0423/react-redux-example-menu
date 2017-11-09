import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import App from './components/app';
import AppComment from './components/comment-page/app-comment';
import AppIntro from "./components/intro-page/app-intro";
import 'bootstrap/dist/css/bootstrap.css';


const history =createHistory();
const store = createStore(
    allReducers,
    applyMiddleware(routerMiddleware(history)));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/comments" component={AppComment}/>
                <Route path="/intro" component={AppIntro}/>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));