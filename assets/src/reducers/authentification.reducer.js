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
  register_snack:       false,
  register_message:     '',
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
    default:
      return state;
  }
};

export default authReducer;
