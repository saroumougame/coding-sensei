import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './exercice.style';
import scss from './exercice.module.scss';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
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




const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

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
        sortie: '',
        isLoading: true,
        exoClas: [],
        name: [],
        champClas: []

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
      "fonction":  this.state.fonction,
      "classe": this.state.champClas
    }
console.log(form);
   // this.addExercices(form);
  }

  addExercices(form){

  
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

  handleChange = event => {
    this.setState({ champClas: event.target.value }
      );
    
  };


  componentWillMount(){
  
    this.setState({ isLoading: true });
    fetch(API + 'classes')
      .then(response => response.json())
      .then(data => 
        this.setState({ exoClas : data },
          this.iniExoClass
         
          )
      );


}


iniExoClass(){

  this.state.exoClas["hydra:member"].map(exoClass => {
      
    this.state.name.push(exoClass.id)
    console.log(this.state.name)
  },
  this.setState({ isLoading : false })

  );


}


  render() {
    let { classes } = this.props;
    const { isLoading } = this.state;
    const exoClass = this.state.exoClas["hydra:member"];
   if(isLoading){
    return <p>Loading ...</p>;
   }
   console.log(this.state.name);

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


<FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
          <Select
            multiple
            value={this.state.champClas}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {this.state.name.map(name => (
              <MenuItem key={name} value={name} >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
