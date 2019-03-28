export  const INSCRIPTION_ETAPES = "changer_étapes";

export const AUTH_NOM_PROFF  			= "FORM NOM PROFF";
export const AUTH_NOM_EMAIL  			= "FORM EMAIL PROFF";
export const AUTH_NOM_PASSWORD  		= "FORM PASSWORD PROFF";
export const AUTH_NOM_PASSWORD_DEUX 	= "FORM PASSWORD DOUBLE PROFF";


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


