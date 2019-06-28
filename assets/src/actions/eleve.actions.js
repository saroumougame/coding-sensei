
import history from '../history';

export 	const API_URL         = 'http://api.coding-sensei.fr';
export  const SETELEVECONTACT = "SET ELEVE CONTACT";
export  const GETELEVEBYCLASS = "GET ELEVE BYCLASS";


export const setEleveAction = contact => ({
  type: SETELEVECONTACT,
  payload: contact
});

// Affiche toute les classes
export const getEleveAction = arrayEleve => ({
  type: GETELEVEBYCLASS,
  payload: arrayEleve
});

// Get all classes
export const getEleve = () => {

  return (dispatch, getState) => { 

    const state = getState();
    const idClass =  state.classData.currentClasse['@id'];
    console.log(idClass);


    fetch(API_URL + idClass+'/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
     // Une fois fini, on affiche toute les classes
      dispatch(getEleveAction(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
};


export const AddUserEleveAction = (nom, email) => {

  return (dispatch, getState) => { 

    const state = getState();
    const idClass =  state.classData.currentClasse['@id'];

    var details = {
    'firstName':  nom,
    'lastName':   nom,
    'email':      email,
    'classe':     idClass
  }

  var formBody = JSON.stringify(details);

    fetch(API_URL + '/eleves/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
          dispatch(getEleve());
    })
    .catch((e) => dispatch());
  }
}


/*
// crée user - dispatch crée eleve
export const AddUserEleveAction = (nom, email) => {

    var details = {
    'email': email,
    'username': nom,
    'plainPassword': nom+nom,
    'enabled': true
  }

  var formBody = JSON.stringify(details);

  return (dispatch, getState) => { 

    fetch(API_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      if(typeof (json['@id'] != 'undefined')){
          dispatch(AddEleveAction(json['@id']));
      }
    })
    .catch((e) => dispatch());

  }
}

export const AddEleveAction = (idEleve) => {

  return (dispatch, getState) => { 

    const state = getState();
    const idClass =  state.classData.currentClasse['@id'];

    if(typeof(idEleve) == 'undefined' || typeof(idClass) == 'undefined') {
      return dispatch(getEleve());
    }
    var details = {
        'user': idEleve,
        'classe': idClass,
      }
    var formBody = JSON.stringify(details);

    fetch(API_URL + '/eleves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getEleve());
    })
    .catch((e) => dispatch());
  }
}
*/