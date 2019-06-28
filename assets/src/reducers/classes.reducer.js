import {
  ADD_CLASS_BY_PROFF,
  EDIT_CLASS_BY_PROFF,
  SUPPRIMER_CLASS_BY_PROFF,
  UPDATE_CLASS_LIST,
  GET_ALL_CLASS__BY_PROFF,
  UPDATE_CLASS_NOM,
  SETCURRENTCLASS,
  UPDATE_CLASS_USER
} from '../actions/classes.actions';


const defaultState = {
    currentClasse: null,
    classes: [],
    UpdatedClasses: [],
    CreateClassNom: '',
    CreateClassPromotion: '',
    FormDataUpdateClassNom: '',
    classeUser: null
};

const classesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_CLASS__BY_PROFF:
        return {
          ...state,
          classes: action.payload,
          UpdatedClasses: action.payload
        }

    break; 
    case UPDATE_CLASS_LIST:
      return {
        ...state,
          UpdatedClasses: action.payload
      }
    break;
    case UPDATE_CLASS_NOM:
      return {
        ...state,
          FormDataUpdateClassNom: action.payload
      }
    break;
    case SETCURRENTCLASS : 
      return {
        ...state,
        currentClasse: action.payload
      }
    break;
    case UPDATE_CLASS_USER : 
    console.log(action.payload);
      return {
        ...state,
        classeUser: action.payload
      }
    break;
    default:
      return state;
  }
};

export default classesReducer;
