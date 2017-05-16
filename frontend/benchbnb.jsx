import React from 'react';
import ReactDOM from 'react-dom';
import {login} from './actions/session_actions.js';
import configureStore from './store/store';
import Root from './components/root';

window.login = login;
window.user = {username: "lucas", password: "password"};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
});
