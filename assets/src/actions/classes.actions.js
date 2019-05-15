import history from '../history';
export const ADD_CLASS_BY_PROFF       = 'add class by professeur';
export const EDIT_CLASS_BY_PROFF      = 'supprile les proff selectionnée';
export const SUPPRIMER_CLASS_BY_ID    = 'supprime une class ';
export const GET_ALL_CLASS__BY_PROFF  = 'montre le form ';
export const UPDATE_CLASS_LIST        = 'modifier l\'ordre de la liste';
export const UPDATE_CLASS_NOM         = 'modifier le nom de la classe';
       const API_URL                  = 'http://localhost:8089';
       const ID_PROFF                 = '/api/users/23';
//export const ADD_CLASS_BY_PROFF = 'Ajoute  à la selection';

// On ajoute une class pour un Nom avec L'id d'un proff ( en dur pour l'instant )
export const addClass = (nom) => {

  var details = {
    'name': nom,
    'teacher': ID_PROFF
  }
  var formBody = JSON.stringify(details);

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

// On modifie le nom d'une classe par son id
export const updateClass = (nom, id) => {

  var details = {
    'name': nom
  }
  var formBody = JSON.stringify(details);

  return (dispatch, getState) => { 
    fetch(API_URL + '/api/classes/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      // Une fois fini, on va récupérer les classe a nouveau.. 
      dispatch(getClass());
    })
    .catch((e) => dispatch());
  }
};

// Supprime une classe 
export const deleteClass = (id) => {

  return (dispatch, getState) => { 
    fetch(API_URL + '/api/classes/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response)
    .then(json => {
      // Une fois fini, on va récupérer les classe a nouveau.. 
      history.push('/professeur/classes');
      dispatch(getClass());
    })
    .catch((e) => dispatch());
  }
};

// Get all classes
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
   // Une fois fini, on affiche toute les classes
      dispatch(getClassAction(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
};

// Le nom est modifier dans le TextField
export const FormUpdateClassNom = (nom) => ({
  type: UPDATE_CLASS_NOM,
  payload: nom
});

// Affiche toute les classes
export const getClassAction = arrayClass => ({
  type: GET_ALL_CLASS__BY_PROFF,
  payload: arrayClass
});

// Ce n'est pas un update de la classe, c'est l'update de la liste dans la search bar.
export const UpdateClass = updatedList => ({
  type: UPDATE_CLASS_LIST,
  payload: updatedList
});


