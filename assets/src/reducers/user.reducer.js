import {
  LOGIN,
} from '../actions/auth.actions';
import {
  GET_CONNEXION_INFO,
} from '../actions/user.actions';

// trois étapes d'inscription.
// type: 0 null - 1 structure - 2 proff - 3 eleve
const defaultState = {
  logged:               false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:

      if(action.payload == true){
        return {
          ...state,
          logged: 1
        }
      }else{
        return state;
      }
    break; 
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
