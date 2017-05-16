import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, receiveErrors,
  receiveCurrentUser} from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = {
    currentUser: {
    },
    errors: []
};

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      newState = merge({}, nullUser, {
        currentUser
      });
      // console.log(newState);
      return newState;

    case RECEIVE_ERRORS:
        const errors = action.errors;
        return merge({}, nullUser, {
          errors
        });
    default:
      // console.log("default");
      return state;
  }
};

export default SessionReducer;
