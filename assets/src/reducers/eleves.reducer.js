import { SETELEVECONTACT, GETELEVEBYCLASS } from '../actions/eleve.actions';

export const UPDATE_ELEVE_LIST      = "UPDATE_ELEVE_LIST";


const defaultState = {
    eleves: [],
    UpdatedEleves: [],
    SelectedEleve: null,
};

const classesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETELEVEBYCLASS:
        return {
          ...state,
          eleves: action.payload,
          UpdatedEleves: action.payload
        }

    break; 
    case UPDATE_ELEVE_LIST:
      return {
        ...state,
          UpdatedEleves: action.payload
      }
    break;
    case SETELEVECONTACT : 
      return {
        ...state,
        SelectedEleve: action.payload
      }
    break;
    default:
      return state;
  }
};

export default classesReducer;