

import {
  INSCRIPTION_ETAPES,
  AUTH_NOM_PROFF,
  AUTH_NOM_EMAIL,
  AUTH_NOM_PASSWORD,
  AUTH_NOM_PASSWORD_DEUX,
  AUTH_LOGIN_EMAIL,
  AUTH_LOGIN_PASSWORD,
} from '../actions/auth.actions';


// trois étapes d'inscription.
// type: 0 null - 1 structure - 2 proff - 3 eleve
const defaultState = {
  etape_inscription:    0,
  inscriptionType:      0,
  auth_email:           '',
  auth_nom :            '',
  auth_password:        '',
  auth_password_double: '',
  auth_login_email:     '',
  auth_login_password:  '',
  logged:               false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case INSCRIPTION_ETAPES:
      return {
        ...state,
          etape_inscription: action.payload,
      };
      break;
    case AUTH_NOM_PROFF:
      return {
        ...state,
          auth_nom: action.payload,
      };
      break;
    case AUTH_NOM_EMAIL:
      return {
        ...state,
          auth_email: action.payload,
      };
      break;
    case AUTH_NOM_PASSWORD:
      return {
        ...state,
          auth_password: action.payload,
      };
      break;
    case AUTH_NOM_PASSWORD_DEUX:
      return {
        ...state,
          auth_password_double: action.payload,
      };
      break;
    case AUTH_LOGIN_EMAIL:
      return {
        ...state,
          auth_login_email: action.payload,
      };
      break;
     case AUTH_LOGIN_PASSWORD:
      return {
        ...state,
          auth_login_password: action.payload,
      };
      break;     
    default:
      return state;
  }
};

export default authReducer;
