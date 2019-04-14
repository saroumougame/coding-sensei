export  const INSCRIPTION_ETAPES = "changer_étapes";

export const AUTH_NOM_PROFF  			    = "FORM NOM PROFF";
export const AUTH_NOM_EMAIL  			    = "FORM EMAIL PROFF";
export const AUTH_NOM_PASSWORD  		  = "FORM PASSWORD PROFF";
export const AUTH_NOM_PASSWORD_DEUX 	= "FORM PASSWORD DOUBLE PROFF";
export const AUTH_LOGIN_EMAIL         = "FORM LOGIN EMAIL";
export const AUTH_LOGIN_PASSWORD      = "FORM LOGIN PASSWORD";
export const LOGIN                    = "LOGIN";
export const REGISTER                 = "REGISTER";
export const SNACK_REGISTER           = "SNACK_REGISTER";
export const LOGIN_SNACK              = "LOGIN_SNACK";
export const LOGIN_SNACK_CLOSE        = "LOGIN_SNACK_CLOSE";
export const LOGIN_SPINNER_START      = "LOGIN_SPINNER_START";
export const LOGIN_SPINNER_STOP       = "LOGIN_SPINNER_STOP";

       const API_URL                  = 'http://localhost:8089';

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

export const registerAction = success => ({
  type: REGISTER,
  payload: success
});

export const snackDelete = () => ({
  type: SNACK_REGISTER,
})


export const register = (nom, email, password) => {
  
  var details = {
    'fos_user_registration_form[email]': email,
    'fos_user_registration_form[username]': nom,
    'fos_user_registration_form[plainPassword][first]': password,
    'fos_user_registration_form[plainPassword][second]': password
  }

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return dispatch => { 
    fetch(API_URL + '/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response)
    .then(json => {
      console.log(json.status);
      if(json.status == 200){
        dispatch(registerAction(false))
      }else if(json.status == 401){
        dispatch(registerAction(true))
      }

    })
    .catch((e) => dispatch());
  }
};

export const login = (email, password) => {
  console.log(email);
    var success = {
    '_username': email,
    '_password': password,
  }

  var formBody = [];
  for (var property in success) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(success[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return dispatch => { 
    fetch(API_URL + '/login_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then(response => response)
    .then(json => {

      console.log(json);

      if(json.status == 200){
        console.log('iciiiciici');
        dispatch(loginAction(true));
      }else if(json.status == 401){
         console.log('iciiiciici');
        dispatch(loginAction(false));
      }
      return dispatch(login_spinner_stop());


    })
    .catch((e) => dispatch(loginAction(false)));
  }
}
export const loginAction = (success) => ({
  type: LOGIN,
  payload: success
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