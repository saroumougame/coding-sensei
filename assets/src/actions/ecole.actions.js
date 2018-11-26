export const ADD_PROFF_ACTION = 'ajoute un proff';
export const DELETE_PROFF_ACTION = 'supprile les proff selectionnée';
export const SHOW_FORM_ACTION = 'montre le form ';
export const ADD_SELECTED_ACTION = 'Ajoute  à la selection';
export const DELETE_SELECTED_ACTION = 'retire à la selection';

export const addProffAction = form => ({
  type: ADD_PROFF_ACTION,
  payload: form
});

export const showformaction = () => ({
  type: SHOW_FORM_ACTION,
});

export const addSelectaction = id => ({
  type: ADD_SELECTED_ACTION,
  payload: id
});

export const removeSelectaction = id => ({
  type: DELETE_SELECTED_ACTION,
  payload: id
});

export const deleteProffAction = () => ({
  type: DELETE_PROFF_ACTION,
});
