
import history from '../history';

export 	const API_URL                  = 'http://localhost:8089';
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
  console.log('geteleve');
  //console.log();
  return (dispatch, getState) => { 
    fetch(API_URL + '/api/eleves', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
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

    fetch(API_URL + '/api/users', {
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

    var details = {
        'user': idEleve,
        'classes': idClass,
      }
    var formBody = JSON.stringify(details);

    fetch(API_URL + '/api/eleves', {
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