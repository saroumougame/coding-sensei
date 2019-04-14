import {
  INSCRIPTION_ETAPES,
  AUTH_NOM_PROFF,
  AUTH_NOM_EMAIL,
  AUTH_NOM_PASSWORD,
  AUTH_NOM_PASSWORD_DEUX,
  AUTH_LOGIN_EMAIL,
  AUTH_LOGIN_PASSWORD,
  REGISTER,
  SNACK_REGISTER,
  LOGIN,
  LOGIN_SNACK,
  LOGIN_SNACK_CLOSE,
  LOGIN_SPINNER_START,
  LOGIN_SPINNER_STOP
} from '../actions/auth.actions';
import { createBrowserHistory } from 'history';



const history = createBrowserHistory();
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
  register_snack:       false,
  register_message:     '',
  login_snack:          false, 
  login_message:        '',
  login_spinner:        false,
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
      case REGISTER: 

      if(action.payload == false){
        var newregister_message = "Une erreur c'est produite, votre email est surrement deja utiliser";
      }else {
        var newregister_message = "Félicitation, vous pouvez maintenent vous connecter";
      }

        return {
        ...state,
          register_snack:   true,
          register_message: newregister_message
      };
    break;
    case SNACK_REGISTER:
      return {
        ...state,
          register_snack:   false,
          register_message: ''
      };
      break;
    case LOGIN_SNACK:
          return {
        ...state,
          login_snack:   true,
          login_message: action.payload,
      };
      break;
    case LOGIN_SNACK_CLOSE:
           return {
        ...state,
          login_snack:   false,
          login_message: '',
      };
      break; 
    case LOGIN:
      console.log(action.payload);

      if(action.payload == false){
          return {
          ...state,
            login_snack:   true,
            login_message: 'Les identifiants rentrés sont incorrect.',
            login_spinner:   false,
        };
      }

       return {
          ...state,
            login_snack:   true,
            login_message: 'Bravo, tu es désormais connecté.',
            login_spinner:   false,
        };
      // auth 
      // redirection || ==

    break;  
    case LOGIN_SPINNER_START:
              return {
          ...state,
            login_spinner:   true,
        };
      break;
    case LOGIN_SPINNER_STOP:
              return {
          ...state,
            login_spinner:   false,
        };
      break;
    default:
      return state;
  }
};

export default authReducer;
