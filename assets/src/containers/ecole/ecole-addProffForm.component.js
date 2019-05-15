import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './ecole.style';
import scss from './ecole.module.scss';
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

import { addProffAction } from '../../actions/ecole.actions';

class EcoleAddProffForm extends Component  {

  constructor() {
    super();
    this.state = {
      expandAddZone: false,
        nom: '',
        autre: 0,
        eleves: 0,
        classe: 0,
        matiere: ''

    };
  }

  formSubmit() {
    let form = {
      nom: this.state.nom,
      autre: this.state.autre,
      eleves: this.state.eleves,
      classe: this.state.classe,
      matiere: this.state.matiere
    }
    this.props.addProffAction(form);
  }

  render() {
    let { classes } = this.props;
    return (
        <div className={[ scss['form_add_proff_div']]}>
          Ajouter un professeur
          <form className={[ scss['form_add_proff_form']]} noValidate autoComplete="off">
            <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Nom et prenom"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="matiere"
              value={this.state.matiere}
              onChange={(e) => {this.setState({matiere: e.target.value});}}
              label="matiere"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="autre"
              label="autre"
              type="number"
              value={this.state.autre}
              onChange={(e) => {this.setState({autre: e.target.value});}}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="eleves"
              label="eleves"
              type="number"
              className={classes.textField}
              onChange={(e) => {this.setState({eleves: e.target.value});}}
              value={this.state.eleves}
              margin="normal"
            />

            <TextField
              id="classe"
              label="classes"
              type="number"
              className={classes.textField}
              value={this.state.classe}
              onChange={(e) => {this.setState({classe: e.target.value});}}
              margin="normal"
            />

            <Button variant="contained" color="primary" className={classes.button} onClick={() => {this.formSubmit()}}>
              Crée le professeur
            </Button>
          </form>
        </div>
    );};
};


function mapStateToProps(state) {
  return ;
}

EcoleAddProffForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  addProffAction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps(), {addProffAction})
)(EcoleAddProffForm);
