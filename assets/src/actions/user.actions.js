export const GET_CONNEXION_INFO    = "si le token existe alors on passe ici pour logger le user";
export const DECONNEXION           = "Deconnexion";

export const logginWithTokenAction = () => ({
  type: GET_CONNEXION_INFO,
});


export const deconnexionAction = () => ({
  type: DECONNEXION
});
