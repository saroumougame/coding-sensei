import {
  LOGIN,
} from '../actions/auth.actions';
import {
  GET_CONNEXION_INFO, DECONNEXION
} from '../actions/user.actions';

import history from '../history';

const defaultState = {
  logged:               false,
  UserRole:             'ROLE_USER'
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:

      if(action.payload == true){

        //history.push('/account');

        return {
          ...state,
          logged: 1
        }
      }else{
        return state;
      }
    break; 
    case DECONNEXION: {
      localStorage.removeItem('token');
      history.push('/');
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
