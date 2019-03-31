export  const INSCRIPTION_ETAPES = "changer_étapes";

export const AUTH_NOM_PROFF  			    = "FORM NOM PROFF";
export const AUTH_NOM_EMAIL  			    = "FORM EMAIL PROFF";
export const AUTH_NOM_PASSWORD  		  = "FORM PASSWORD PROFF";
export const AUTH_NOM_PASSWORD_DEUX 	= "FORM PASSWORD DOUBLE PROFF";
export const AUTH_LOGIN_EMAIL         = "FORM LOGIN EMAIL";
export const AUTH_LOGIN_PASSWORD      = "FORM LOGIN PASSWORD";
export const LOGIN                    = "LOGIN";


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


export const register = (nom, email, password) => {
  const API_URL = 'http://localhost:8089';
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
      console.log(json);
      if(json.status == 1){

      }
      

    })
    .catch((e) => dispatch());
  }
};
/*
http://localhost:8089/register/

fos_user_registration_form[email]
fos_user_registration_form[username]
fos_user_registration_form[plainPassword][first]
fos_user_registration_form[plainPassword][second]
*/