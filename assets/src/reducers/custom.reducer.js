
import { ADD_PROFF_ACTION, SHOW_FORM_ACTION, ADD_SELECTED_ACTION, DELETE_SELECTED_ACTION, DELETE_PROFF_ACTION} from '../actions/ecole.actions';

const defaultState = {
  expanded: false,
  tabSelected : [],
  users: [
    { id: 1, nom: 'Kevin Raynol', matiere: 'php', classe: 6, eleves :24, autre: 4.0 },
    { id: 2, nom: 'Bob Skryptizck', matiere: 'javascript', classe: 9, eleves :18, autre: 4.0 },
    { id: 3, nom: 'Nicolas Dupont', matiere: 'php', classe: 3, eleves :67, autre: 4.0 },
    { id: 4, nom: 'Véronique Sons', matiere: 'java', classe: 0, eleves :82, autre: 4.0 },
  ]
};

const layoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROFF_ACTION:
      let userTab = state.users;
      userTab.push(action.payload);

      return {
        ...state,
        users: userTab,
        expanded: false,
      };
      break;
    case SHOW_FORM_ACTION:

      let newepand = true;
      if(state.expanded) {
        newepand = false;
      }
      return {
        ...state,
        expanded: newepand,
      };
      break;

    case ADD_SELECTED_ACTION:
      let newTab = state.tabSelected;
      newTab.push(action.payload);
      return {...state,
        tabSelected: newTab
      };
      break;
    case DELETE_SELECTED_ACTION:
      let newTabdeux = state.tabSelected;
      newTabdeux.splice(newTabdeux.indexOf(action.payload),1);
      return {...state,
        tabSelected: newTabdeux
      };
      break;
    case DELETE_PROFF_ACTION:
      return state;
      break;
    default:
      return state;
  }
};

export default layoutReducer;
