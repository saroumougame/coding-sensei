import history from '../history';
import { API_URL } from '../api';
export  const INSCRIPTION_ETAPES = "changer_étapes";

export const AUTH_NOM_PROFF           = "FORM NOM PROFF";
export const AUTH_NOM_EMAIL           = "FORM EMAIL PROFF";
export const AUTH_NOM_PASSWORD        = "FORM PASSWORD PROFF";
export const AUTH_NOM_PASSWORD_DEUX   = "FORM PASSWORD DOUBLE PROFF";
export const AUTH_LOGIN_EMAIL         = "FORM LOGIN EMAIL";
export const AUTH_LOGIN_PASSWORD      = "FORM LOGIN PASSWORD";
export const LOGIN                    = "LOGIN";
export const REGISTER                 = "REGISTER";
export const REGISTER_FAIL            = "REGISTER_FAIL";
export const SNACK_REGISTER           = "SNACK_REGISTER";
export const LOGIN_SNACK              = "LOGIN_SNACK";
export const LOGIN_SNACK_CLOSE        = "LOGIN_SNACK_CLOSE";
export const LOGIN_SPINNER_START      = "LOGIN_SPINNER_START";
export const LOGIN_SPINNER_STOP       = "LOGIN_SPINNER_STOP";
export const LOGIN_FAIL               = "LOGIN_FAIL";
export const EXPIRED                  = "EXPIRED";
export const GET_USER                 = "GET_USER";


export const inscriptionEtapeAction = etape => ({
  type: INSCRIPTION_ETAPES,
  payload: etape
});

export const inscriptionNomProff = nom => ({
  type: AUTH_NOM_PROFF,
  payload: nom
});

export const inscriptionEmailProff = email => ({
  type: AUTH_NOM_EMAIL,
  payload: email
});


export const inscriptionPasswordProff = password => ({
  type: AUTH_NOM_PASSWORD,
  payload: password
});


export const inscriptionPasswordDoubleProff = passwordDouble => ({
  type: AUTH_NOM_PASSWORD_DEUX,
  payload: passwordDouble
});

export const loginonEmail = email => ({
  type: AUTH_LOGIN_EMAIL,
  payload: email
});

export const loginonPassword = password => ({
  type: AUTH_LOGIN_PASSWORD,
  payload: password
});

export const registerAction = jsonUser => ({
  type: REGISTER,
  payload: jsonUser
});

export const registerFailAction = message => ({
  type: REGISTER_FAIL,
  payload: message
});
export const snackDelete = () => ({
  type: SNACK_REGISTER,
})


export const register = (nom, email, password) => {
  
  var data = {
    'email': email,
    'firstName': nom,
    'lastName': nom,
    'password': password
    // 'fos_user_registration_form[plainPassword][second]': password
  }

  var dataJson = JSON.stringify(data);

  return dispatch => { 
    fetch(API_URL + '/teacher/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
      },
      body: dataJson
    })
    .then(response => response.json())
    .then(json => {
      if(typeof(json.email) === 'undefined'){
        dispatch(registerFailAction(json.detail));
      }else {
        dispatch(registerAction(json));
      }

    })
    .catch((e) => dispatch());
  }
};

export const login = (email, password) => {
    var data = {
    'username': email,
    'password': password,
  }

    var dataJson = JSON.stringify(data);

  return dispatch => { 
    fetch(API_URL + '/login_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          'accept': 'application/json'

      },
      body: dataJson
    })
    .then(response => response.json() )
    .then(json => {

      if(typeof(json.token) !== 'undefined'){
        localStorage.setItem('token', json.token);
        dispatch(getUserByToken());
        
      }else {
        history.push('/login?error=access');
        dispatch(loginFailAction());
      }

      return dispatch(login_spinner_stop());
    })
    .catch((e) => dispatch(loginAction(false)));
  }
}


export const getUserByToken = () => {

  var token = localStorage.getItem('token');
  return (dispatch, getState) => { 
    fetch(API_URL + '/currentuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+token
      }
    })
    .then(response => response.json())
    .then(json => {

      if(json.code === 401){
      history.push('/login?session_expired');
       dispatch(expiredAction());
      }else {
        if(json.roles.includes('ROLE_STUDENT')){
          console.log(history.location.pathname.split("/")[1]);
          if (
            history.location.pathname.split("/")[1] !== "home" &&
            history.location.pathname.split("/")[1] !== "classes"
          ) {
          history.push('/classes');
          }
        }else{
          if (
            history.location.pathname.split("/")[1] !== "professeur" &&
            history.location.pathname.split("/")[1] !== "account"
            ) {
            history.push('/account');
          }
        }
        dispatch(getCurrentUser(json));
      }
    })
    .catch((e) => dispatch());
  }
};


export const expiredAction = () => ({
  type: EXPIRED
});



export const getUser = () => {

  var token = localStorage.getItem('token');
  
  return (dispatch, getState) => { 
    fetch(API_URL + '/currentuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+token
      }
    })
    .then(response => response.json())
    .then(json => {

        if(json.roles.includes('ROLE_TEACHER')) {
          history.push('/account');
        }else if(json.roles.includes('ROLE_STUDENT')) {
          history.push('/home');
        }
      dispatch(loginAction(json));
    })
    .catch((e) => dispatch());
  }
};


export const getCurrentUser = (jsonUser) => ({
  type: GET_USER,
  payload: jsonUser
});
export const loginAction = (jsonUser) => ({
  type: LOGIN,
  payload: jsonUser
});

export const loginFailAction = () => ({
  type: LOGIN_FAIL
});

export const login_snack = (text) => ({
  type: LOGIN_SNACK,
  payload: text
})

export const login_snack_close = () => ({
  type: LOGIN_SNACK_CLOSE,
})


export const login_spinner_start = () => ({
  type: LOGIN_SPINNER_START,
})

export const login_spinner_stop = () => ({
  type: LOGIN_SPINNER_STOP,
})