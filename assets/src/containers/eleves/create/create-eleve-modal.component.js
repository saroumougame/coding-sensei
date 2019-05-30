import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FontAwesome from 'react-fontawesome';
import scss from './create-eleve-modal.module.scss';
import themeStyles from './create-eleve-modal.style.js';
import TextField from '@material-ui/core/TextField';

import Modal2 from '../../../components/modal.component';
import {FormUpdateClassNom, updateClass, deleteClass}     from '../../../actions/classes.actions';
import { AddUserEleveAction }							from '../../../actions/eleve.actions';

class CreateEleveModal extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
	      form_ajout_libre_nom: '',
	      form_ajout_libre_email: '',
	      typeAjout: 1, // 0 = form fermer.  1 = email

	    }
	 }

	 formSubmit() {
	 	let nom   = this.state.form_ajout_libre_nom;
	 	let email = this.state.form_ajout_libre_email;

	 	if(nom == '' 
        || email == '') {
        	alert('Vous devez remplir tout les champs');
        	this.setState({ open: true,  snackMessage: 'Vous devez remplir tout les champs.' });
        return;
      }

        this.props.AddUserEleveAction(nom, email);
	 	return;
	 }

	 getAddEleveForm() {
	 	return(

	 		<div> 
	 	{/*
	 			<Button variant="contained" color="primary" onClick={() => {this.setState({typeAjout: 1})}}>
                    Ajout par email
                </Button>
	 			<Button variant="contained" color="primary"  className={classNames(scss['btn-ajout-libre'])} onClick={() => {this.setState({typeAjout: 1})}}>
                    Ajout libre
                </Button>
	 	*/}
                {this.state.typeAjout == 1 &&
                	<div>	
                	<div>Le mot de passe sera envoyer a l'eleve par email</div>
                		 <form  noValidate autoComplete="off">
				            <TextField
				              id="nom"
				              value={this.state.form_ajout_libre_nom}
				              onChange={(e) => {this.setState({form_ajout_libre_nom: e.target.value});}}
				              label="Nom de l'eleve"
				              //className={classes.textField}
				              margin="normal"
				            />
				           	<TextField
				              id="email"
				              value={this.state.form_ajout_libre_email}
				              onChange={(e) => {this.setState({form_ajout_libre_email: e.target.value});}}
				              label="email de l'eleve"
				              //className={classes.textField}
				              className={classNames(scss['form-text-email-ajout-libre'])}
				              margin="normal"
				            />
				            <div>
				            <Button variant="contained" color="primary" onClick={() => {this.formSubmit()}}>
				              Ajouter l'eleve
				            </Button>
				            </div>
				          </form>
                	</div>
                }
                {this.state.typeAjout == 2 &&
                	<div>	

                		 <form  noValidate autoComplete="off">
				            <TextField
				              id="nom"
				              value={this.state.nom}
				              onChange={(e) => {this.setState({nom: e.target.value});}}
				              label="Nom de l'eleve"
				              //className={classes.textField}
				              margin="normal"
				            />
				           	<TextField
				              id="email"
				              value={this.state.nom}
				              onChange={(e) => {this.setState({nom: e.target.value});}}
				              label="email de l'eleve"
				              //className={classes.textField}
				              margin="normal"
				            />

				            <Button variant="contained" color="primary" onClick={() => {this.formSubmit()}}>
				              Ajouter l'eleve
				            </Button>
				          </form>
                	</div>
                }
             </div>
	 	);
	 }

	 render() {
	 	return(
	 		 <div> 
                 <Modal2 
                      titleButton='Ajouter un eleve'
                      title="Ajouter d'un eleve"
                      text={this.getAddEleveForm()}

                  />
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
    }
  };
}
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {FormUpdateClassNom, updateClass, deleteClass, AddUserEleveAction}))(CreateEleveModal);