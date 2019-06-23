import { UPDATE_FORM_TITLE, UPDATE_FORM_DESC, UPDATE_FORM_PARAM_IN, UPDATE_FORM_PARAM_OUT, 
  GET_LISTE_EXERCICES, GET_LISTE_EXERCICES_USER, SET_CURRENT_EXO_USER, UPDATE_TEXT_EXERCICE,
SUBMIT_MODAL, MODAL_FAIL, DISMISS_MODAL, MODAL_SUCESS, SET_CURRENT_EXO_PROFF, SETEXERCICECOMPONENT} from '../actions/exercice.actions';

export const UPDATE_ELEVE_LIST      = "UPDATE_ELEVE_LIST";


const defaultState = {
        'add_form_titre'        : '',
        'add_form_description'  : '',
        'add_form_param_in'     : '',
        'add_form_param_out'    : '',
        'liste_exercice'        : [],
        'liste_exercice_user'   : [],
        'current_Exercice_User' : null,
        'current_Exercice_proff': null,
        'exerciceTexte'         : '\n',
        'exerciceModal'         : false,
        'exerciceResultat'      : null,
        'exerciceResultatText'  : '',
        'exercice_component'    : null,
};

const exerciceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case  UPDATE_FORM_TITLE:
        return {
          ...state,
          add_form_titre: action.payload,
        }
    break; 
    case  UPDATE_FORM_DESC:
        return {
          ...state,
          add_form_description: action.payload,
        }
    break; 
    case SETEXERCICECOMPONENT: 
    return {
          ...state,
          exercice_component: action.payload,
        }
    break;
    case  UPDATE_FORM_PARAM_IN:
        return {
          ...state,
          add_form_param_in: action.payload,
        }
    break; 
    case  UPDATE_FORM_PARAM_OUT:
        return {
          ...state,
          add_form_param_out: action.payload,
        }
    break; 
    case GET_LISTE_EXERCICES: 
      return {
          ...state,
          liste_exercice: action.payload,
        }
     break; 
    case GET_LISTE_EXERCICES_USER:
    return {
          ...state,
          liste_exercice_user: action.payload,
        }

     break; 
     case SET_CURRENT_EXO_USER:
         return {
          ...state,
          current_Exercice_User: action.payload,
        }
     break;
     case SET_CURRENT_EXO_PROFF:
         return {
          ...state,
          current_Exercice_proff: action.payload,
        }
     break;
     
     case UPDATE_TEXT_EXERCICE:
         return {
          ...state,
          exerciceTexte: action.payload,
        }
     break;
     case SUBMIT_MODAL:
     return {
          ...state,
          exerciceModal: true,
        }
    break;
    case MODAL_FAIL: 
         return {
          ...state,
          'exerciceResultat': false,
          'exerciceResultatText': action.payload
        }
        break;
      case MODAL_SUCESS: 
               return {
          ...state,
          'exerciceResultat': true,
          'exerciceResultatText': action.payload
        }
        break;
      case DISMISS_MODAL:
         return {
          ...state,
          'exerciceModal': false,
          'exerciceResultat': null,
          'exerciceResultatText': ''
        }
        break;
      break;
    default:
      return state;
  }
};

export default exerciceReducer;