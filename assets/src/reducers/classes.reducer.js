import {
  UPDATE_CLASS_LIST,
  GET_ALL_CLASS__BY_PROFF,
  UPDATE_CLASS_NOM,
  SETCURRENTCLASS,
  SET_CLASS_STATS,
  UPDATE_CLASS_USER
} from '../actions/classes.actions';


const defaultState = {
    currentClasse: null,
    classes: [],
    UpdatedClasses: [],
    CreateClassNom: '',
    CreateClassPromotion: '',
    FormDataUpdateClassNom: '',
    classeUser: null,
    stats: null
};

const classesReducer = (state = defaultState, action) => {

  switch (action.type) {
    case GET_ALL_CLASS__BY_PROFF:
        return {
          ...state,
          classes: action.payload,
          UpdatedClasses: action.payload
        }
    case UPDATE_CLASS_LIST:
      return {
        ...state,
          UpdatedClasses: action.payload
      }
    case UPDATE_CLASS_NOM:
      return {
        ...state,
          FormDataUpdateClassNom: action.payload
      }
    case SETCURRENTCLASS : 
      return {
        ...state,
        currentClasse: action.payload
      }
    case UPDATE_CLASS_USER : 
      return {
        ...state,
        classeUser: action.payload
      }
    case SET_CLASS_STATS:
      return {
          ...state,
          stats: action.payload,
      }
    default:
      return state;
  }
};

export default classesReducer;
