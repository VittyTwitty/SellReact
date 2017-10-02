import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from "./containers/App";
import configureStore from "./store/configureStore";
import './styles/template.scss';
import {BrowserRouter, HashRouter, Route, Router, Switch} from "react-router-dom";
import UserDetails from "./containers/UserDetails";

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/detail/:number' component={UserDetails}/>
                    <Route path='/detail' component={UserDetails}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('v-root')
);
