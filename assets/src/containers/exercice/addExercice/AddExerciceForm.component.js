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
import scss from './AddExerciceForm.module.scss';
//import themeStyles from './home-eleve.style.js';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

import { updateFormTitle, updateFormDesc, updateFormIn, updateFormOut, createExerciceAction } from '../../../actions/exercice.actions';

const ListExo = ['Exercice 1 - constante PHP', 'Exercice 2 - variables PHP'];


const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250
    }
  }
};

class AddExerciceForm extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null,
        pagination: 0,
	    }
	 } 

   formSubmit() {
    this.props.createExerciceAction();
   }

	 render() {

	 	return(
	 		 <div className={scss['ListeExercices']} >  
          <form className={[ scss['form_add_proff_form']]} noValidate autoComplete="off">
          <div  className={[ scss['form_header']]}>
            <TextField
              id="titre"
              value={this.props.data.FormDataTitle}
              onChange={(e) => {this.props.updateFormTitle(e.target.value)}}
              label="titre"
              margin="normal"
            />
            <TextField
              id="Énoncé"
              value={this.props.data.FormDataDesc}
              onChange={(e) => {this.props.updateFormDesc(e.target.value)}}
              label="description"
              multiline={true}
              variant="outlined"
              rows={5}
              rowsMax={20}
              margin="normal"
            />
          </div>
{/*
            <TextField
              id="fonction"
              label="nom de la fonction a declancher"
              type="text"
              value={this.state.fonction}
              onChange={(e) => {this.setState({fonction: e.target.value});}}
             
              margin="normal"
            />
*/}
          <div className={[ scss['form_header']]}>
            <TextField
              id="entree"
              label="param d'entré"
              type="text"
              value={this.props.data.FormDataIn}
              onChange={(e) => {this.props.updateFormIn(e.target.value)}}
              margin="normal"
            />

            <TextField
              id="sortie"
              label="param de sortie attendue"
              type="text"
              value={this.props.data.FormDataOut}
              onChange={(e) => {this.props.updateFormOut(e.target.value)}}
              margin="normal"
            />
          </div>
          </form>

            <Button className={[scss['vld']]} variant="contained" color="primary"  onClick={() => {this.formSubmit()}}>
              Valider
            </Button>
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      FormDataTitle:                    state.exerciceData.add_form_titre,  
      FormDataDesc:                     state.exerciceData.add_form_description,
      FormDataIn:                       state.exerciceData.add_form_param_in,
      FormDataOut:                      state.exerciceData.add_form_param_out,
    }
  };
}
export default 
  connect(mapStateToProps,  {updateFormTitle, updateFormDesc, updateFormIn, updateFormOut, createExerciceAction})(AddExerciceForm);