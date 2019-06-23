import history from '../history';
export const ADD_PROFF_ACTION       = 'ajoute un proff';
export const DELETE_PROFF_ACTION    = 'supprile les proff selectionnée';
export const SHOW_FORM_ACTION       = 'montre le form ';
export const ADD_SELECTED_ACTION    = 'Ajoute  à la selection';
export const DELETE_SELECTED_ACTION = 'retire à la selection';


export 	const API_URL                  = 'http://51.38.38.246:8080';
export  const UPDATE_FORM_TITLE        = 'UPDATE_FORM_TITLE';
export  const UPDATE_FORM_DESC         = 'UPDATE_FORM_DESC';
export  const UPDATE_FORM_PARAM_IN     = 'UPDATE_FORM_PARAM_IN';
export  const UPDATE_FORM_PARAM_OUT    = 'UPDATE_FORM_PARAM_OUT';
export  const GET_LISTE_EXERCICES      = 'GET_LISTE_EXERCICES'; 
export  const GET_LISTE_EXERCICES_USER = 'GET_LISTE_EXERCICES_USER';
export  const SET_CURRENT_EXO_USER     = 'SET_CURRENT_EXO_USER';
export  const SET_CURRENT_EXO_PROFF    = 'SET_CURRENT_EXO_PROFF';
export  const SETEXERCICECOMPONENT     = 'SETEXERCICECOMPONENT'; 

export  const UPDATE_TEXT_EXERCICE      = 'UPDATE_TEXT_EXERCICE';
export  const SUBMIT_MODAL              = "SUBMIT_MODAL"; 
export  const MODAL_FAIL                = "MODAL_FAIL";
export  const MODAL_SUCESS              = "MODAL_SUCESS";
export  const DISMISS_MODAL                = "DISMISS_MODAL";




export const setExerciceComponentAction = state => ({
  type: SETEXERCICECOMPONENT,
  payload: state
}); 

export const setCurrentExerciceProff = exercice => ({
  type: SET_CURRENT_EXO_PROFF,
  payload: exercice
});

export const addProffAction = form => ({
  type: ADD_PROFF_ACTION,
  payload: form
});

export const dismissModal = () => ({
  type: DISMISS_MODAL,
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


export const updateFormTitle = title => ({
	type: UPDATE_FORM_TITLE,
	payload: title
});

export const updateFormDesc = desc => ({
	type: UPDATE_FORM_DESC,
	payload: desc
});

export const updateFormIn = inForm => ({
	type: UPDATE_FORM_PARAM_IN,
	payload: inForm
});

export const updateFormOut = inOut => ({
	type: UPDATE_FORM_PARAM_OUT,
	payload: inOut
});

export const listeExercice = jsonExercices => ({
  type: GET_LISTE_EXERCICES,
  payload: jsonExercices
});


export const setCurrentExoUser = exercice => ({
  type: SET_CURRENT_EXO_USER,
  payload: exercice
});

export const updateExerciceAction = exerciceText => ({
  type: UPDATE_TEXT_EXERCICE,
  payload: exerciceText
});


export const submitModalAction = () => ({
  type: SUBMIT_MODAL
});
export const modalFailExercice = exerciceFailText => ({
  type: MODAL_FAIL,
  payload: exerciceFailText
});

export const modalSuccessExercice = () => ({
  type: MODAL_SUCESS
});


export const deleteExercice = () => {

  return (dispatch, getState) => { 

    const state = getState();
    let idExercice =  state.exerciceData.current_Exercice_proff["@id"];
    console.log(idExercice);
/*
  */
    idExercice = idExercice.split('/')[2];

    //var formBody = JSON.stringify(details);
    fetch(API_URL + '/exercices/'+idExercice, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
          dispatch(setExerciceComponentAction(null));
          dispatch(getExercicesEleve())
          //dispatch(listeExercice(json["hydra:member"]));
    })
    .catch((e) => dispatch());
    /*
*/
  }
}



export const submitExerciceAction = (ExerciceContent) => {
  return (dispatch, getState) => { 

    const state = getState();

    let current_Exercice_User = state.exerciceData.current_Exercice_User.exercice['@id'];

    
    var details =  {
      "awnserCode": ExerciceContent,
      "exercice": current_Exercice_User
    }
    var formBody = JSON.stringify(details);

    fetch(API_URL + '/reponses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if(json['@type'] == "hydra:Error"){
        dispatch(modalFailExercice(json['hydra:description']));
      }else if(json['@type'] == "Reponse" && json['success'] == false) {
        dispatch(modalFailExercice("Votre code est bon, mais le resultat attendu ne l'est pas.. veuillez réessayer"));
      }else {
        dispatch(modalSuccessExercice());
         //dispatch(listeExercice(json["hydra:member"]));
      }
    })
    .catch((e) => dispatch());
  }
}


export const listeExerciceAction = () => {

  return (dispatch, getState) => { 

    const state = getState();
    let idClass =  state.classData.currentClasse['@id'];
/*
  */
    idClass = idClass.split('/')[2];
    

    //var formBody = JSON.stringify(details);
    fetch(API_URL + '/classe/'+idClass+'/exercices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
          dispatch(listeExercice(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
    /*
  */
}

export const getExercicesEleve = () => {

  return (dispatch, getState) => { 

    const state = getState();
    let idClass =  state.classData.classeUser['@id'];
/*
  */
    idClass = idClass.split('/')[2];
    

    //var formBody = JSON.stringify(details);
    fetch(API_URL + '/exercices/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
          console.log(json);
          dispatch(getExercicesEleveAction(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
    
    /*
    fetch(API_URL + '/classe/'+idClass+'/exercices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
          dispatch(getExercicesEleveAction(json["hydra:member"]));
    })
    .catch((e) => dispatch());
  }
  */
}

export const getExercicesEleveAction = exercices => ({
  type: GET_LISTE_EXERCICES_USER,
  payload: exercices
});


export const createExerciceAction = () => {

  return (dispatch, getState) => { 

    const state = getState();
    const idClass =  state.classData.currentClasse['@id'];
/*
  */

    var ini = 0;
    var in_res = '{';
    while (state.exerciceData.add_form_param_in["in_" + ini] != null){
      if (state.exerciceData.add_form_param_in["in_" + ini] == 1){
        in_res += `${state.exerciceData.add_form_param_in["in_name_" + ini]} : ${state.exerciceData.add_form_param_in["in_value_" + ini]}`
      }
//      if (state.exerciceData.add_form_param_in["in_" + ini] == 2){}
      ini++;
    }
    in_res += '}';
    ini = 0;
    var out_res = '{';
    while (state.exerciceData.add_form_param_in["out_" + ini] != null){
      if (state.exerciceData.add_form_param_in["out_" + ini] == 2){
        out_res += `${state.exerciceData.add_form_param_in["out_name_" + ini]} : ${state.exerciceData.add_form_param_in["out_value_" + ini]}`
      }
      if (state.exerciceData.add_form_param_in["out_" + ini] == 1){
        out_res += `${state.exerciceData.add_form_param_in["out_name_" + ini]} : ""`

      }


      ini++;
    }
    out_res += '}'
    var details = {
    'name': 		 state.exerciceData.add_form_titre,
    'description':   state.exerciceData.add_form_description,
    'in':        	in_res,
    'out':     	 	out_res,
    'classe':        idClass,
    'langagueSpecs' : "php"
  }
  var formBody = JSON.stringify(details);

    fetch(API_URL + '/exercices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
         // dispatch(getEleve());
    })
    .catch((e) => dispatch());
  }
}