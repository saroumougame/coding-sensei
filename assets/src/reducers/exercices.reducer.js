import { UPDATE_FORM_TITLE, UPDATE_FORM_DESC, UPDATE_FORM_PARAM_IN, UPDATE_FORM_PARAM_OUT, 
  GET_LISTE_EXERCICES, GET_LISTE_EXERCICES_USER} from '../actions/exercice.actions';

export const UPDATE_ELEVE_LIST      = "UPDATE_ELEVE_LIST";


const defaultState = {
        'add_form_titre'        : '',
        'add_form_description'  : '',
        'add_form_param_in'     : '',
        'add_form_param_out'    : '',
        'liste_exercice'        : [],
        'liste_exercice_user'   : [],
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
    default:
      return state;
  }
};

export default exerciceReducer;