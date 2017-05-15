import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, receiveErrors,
  receiveCurrentUser} from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = {
  session: {
    currentUser: {
      id: 1,
      username: 'breakfast'
    },
    errors: []
  }
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge( {}, { session: {
        currentUser: action.user,
        errors: []
        }
      });
      return newState;
    case RECEIVE_ERRORS:
      newState = merge ( {}, { session:
      { current_user: null,
      errors: action.errors
      }
    });
    return newState;
  }
};

export default SessionReducer;
