import {
  LOGIN,LOGIN_FAIL,
  EXPIRED
} from '../actions/auth.actions';
import {
  GET_CONNEXION_INFO, DECONNEXION
} from '../actions/user.actions';

import history from '../history';

const defaultState = {
  logged:               false,
  UserRole:             ['ROLE_USER'],
  User: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
        return {
          ...state,
          logged: 1,
          UserRole: action.payload.roles,
          User: action.payload,
        }
      
    case LOGIN_FAIL: 
        return state;
    
    case DECONNEXION: {
      localStorage.removeItem('token');
      history.push('/');
      return {
          ...state,
          logged: 0
        }
    }
    case EXPIRED: {
      localStorage.removeItem('token');
      return {
          ...state,
          logged: 0
        }
    }
    case GET_CONNEXION_INFO: {
      return {
          ...state,
          logged: 1
        }
    } 
    default:
      return state;
  }
};

export default userReducer;
