
import { ADD_PROFF_ACTION, SHOW_FORM_ACTION,} from '../actions/ecole.actions';

const defaultState = {
  expanded: false,
  users: [
    { nom: 'Kevin Raynol', matiere: 'php', classe: 6, eleves :24, autre: 4.0 },
    { nom: 'Bob Skryptizck', matiere: 'javascript', classe: 9, eleves :18, autre: 4.0 },
    { nom: 'Nicolas Dupont', matiere: 'php', classe: 3, eleves :67, autre: 4.0 },
    { nom: 'Véronique Sons', matiere: 'java', classe: 0, eleves :82, autre: 4.0 },
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
    default:
      return state;
  }
};

export default layoutReducer;
