
export const ADD_PROFF_ACTION = 'ajoute un proff';
export const SHOW_FORM_ACTION = 'montre le form ';

export const addProffAction = form => ({
  type: ADD_PROFF_ACTION,
  payload: form
});

export const showformaction = () => ({
  type: SHOW_FORM_ACTION,
});
