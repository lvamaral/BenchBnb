import React from 'react';
import ReactDOM from 'react-dom';
// import {signup, login, logout} from './util/session_api_util';
import {login} from './actions/session_actions.js';
import configureStore from './store/store';
import Root from './components/root';

window.login = login;
window.user = {username: "lucas", password: "password"};
// window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
});
