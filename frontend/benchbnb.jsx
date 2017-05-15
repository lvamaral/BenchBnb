import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

window.login = login;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    configureStore();
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.store = configureStore();
