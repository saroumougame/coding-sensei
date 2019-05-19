
export const GET_ALL_ELEVE__BY_CLASS = "GET_ALL_ELEVE__BY_CLASS";
export const UPDATE_ELEVE_LIST = "UPDATE_ELEVE_LIST";


const defaultState = {
    eleves: [],
    UpdatedEleves: [],
};

const classesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_ELEVE__BY_CLASS:
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
    default:
      return state;
  }
};

export default classesReducer;