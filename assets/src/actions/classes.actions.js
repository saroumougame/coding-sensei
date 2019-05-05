export const ADD_CLASS_BY_PROFF = 'add class by professeur';
export const EDIT_CLASS_BY_PROFF = 'supprile les proff selectionnée';
export const SUPPRIMER_CLASS_BY_PROFF = 'montre le form ';
export const GET_ALL_CLASS__BY_PROFF = 'montre le form ';
export const UPDATE_CLASS_LIST = 'modifier l\'ordre de la liste';
       const API_URL                  = 'http://localhost:8089';
       const ID_PROFF                 = '/api/users/23';
//export const ADD_CLASS_BY_PROFF = 'Ajoute  à la selection';



export const addClass = (nom) => {

  var details = {
    'name': nom,
    'teacher': ID_PROFF
  }
  var formBody = JSON.stringify(details);
  /*
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  */
  return (dispatch, getState) => { 
    fetch(API_URL + '/api/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getClass());
    })
    .catch((e) => dispatch());
  }
};


export const UpdateClass = updatedList => ({
  type: UPDATE_CLASS_LIST,
  payload: updatedList
});

export const getClassAction = arrayClass => ({
  type: GET_ALL_CLASS__BY_PROFF,
  payload: arrayClass
});


export const getClass = () => {
  return (dispatch, getState) => { 
    fetch(API_URL + '/api/classes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getClassAction(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
};
/*
export function someAction() {
  return (dispatch, getState) => {
    const {items} = getState().otherReducer;

    dispatch(anotherAction(items));
 
  }
}
*/
