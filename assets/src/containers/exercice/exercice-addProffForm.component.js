import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './exercice.style';
import scss from './exercice.module.scss';

/*
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {changeSidenavToolbarText} from "../../actions/theme.actions";
*/

import { addProffAction } from '../../actions/exercice.actions';


const API = 'http://localhost:8089/api/';
const DEFAULT_QUERY = 'exercices';

class ExerciceAddProffForm extends Component  {

  constructor() {
    super();
    this.state = {
      expandAddZone: false,
        titre: '',
        description: '',
        fonction:'',
        entree: '',
        sortie: ''

    };
  }
  
  formSubmit() {
   
    let form = {
      "inData": [
        this.state.entree
      ],
      "outData": [
        this.state.sortie
      ],
      "name":  this.state.titre,
      "description":  this.state.description,
      "langagueSpecs":  'php',
      "fonction":  this.state.fonction
    }

    this.addExercices(form);
  }

  addExercices(form){

    console.log(JSON.stringify(form));
 
      fetch(API+ DEFAULT_QUERY, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }).then(function(response) {
        return response.json();
      });


  }

  

  render() {
    let { classes } = this.props;
    return (
        <div className={[ scss['form_add_proff_div']]}>
          Ajouter un exercice
          <form className={[ scss['form_add_proff_form']]} noValidate autoComplete="off">
            <TextField
              id="titre"
              value={this.state.titre}
              onChange={(e) => {this.setState({titre: e.target.value});}}
              label="titre"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="description"
              value={this.state.description}
              onChange={(e) => {this.setState({description: e.target.value});}}
              label="description"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="fonction"
              label="nom de la fonction a declancher"
              type="text"
              value={this.state.fonction}
              onChange={(e) => {this.setState({fonction: e.target.value});}}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="entree"
              label="param d'entré"
              type="text"
              value={this.state.entree}
              onChange={(e) => {this.setState({entree: e.target.value});}}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="sortie"
              label="param de sortie attendue"
              type="text"
              value={this.state.sortie}
              onChange={(e) => {this.setState({sortie: e.target.value});}}
              className={classes.textField}
              margin="normal"
            />

            <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.formSubmit()}}>
              Valider
            </Button>
          </form>
        </div>
    );};
};


function mapStateToProps(state) {
  return ;
}

ExerciceAddProffForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  addProffAction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps(), {addProffAction})
)(ExerciceAddProffForm);
