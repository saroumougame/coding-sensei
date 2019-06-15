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
        quantityOfIn: 1,
        quantityOfOut: 0,
        selectedOption: []
	    }
	 } 
   
   handleChange(event) {
      this.props.updateFormIn( {...this.props.data.FormDataIn, [event.target.name]: event.target.value} )
   }
   formSubmit() {
      this.props.createExerciceAction();
   }
   addInVariable() {
      this.setState({quantityOfIn: this.state.quantityOfIn + 1 });
   }
   addOutVariable() {
      this.setState({quantityOfOut: this.state.quantityOfOut + 1 });
   }
   getinvars(){
    return [...Array(this.state.quantityOfIn)].map((e, i) => {
        var res = <div></div>
        if (this.props.data.FormDataIn["in_" + i]  == 1 || this.props.data.FormDataIn["in_" + i]  == 2 ){
          res = <span>
              <TextField
              id={"in_name_" + i}
              value={this.props.data.FormDataIn["in_name_"+i]}
              onChange={(e) => {this.handleChange(e)}}
              label="Nom de la variable"
              rows={5}
              rowsMax={20}
              inputProps={{
                name: "in_name_"+i,
              }}
            />
        <TextField
          id={"in_value_" + i}
          value={this.props.data.FormDataIn["in_value_"+i]}
          onChange={(e) => {this.handleChange(e)}}
          label="Valeur de la variable"
          rows={5}
          rowsMax={20}
          inputProps={{
                name: "in_value_"+i,
              }}
            />
          </span>
        }
       return <Grid
              container
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
              className={[scss['grid']]}>
            <Select
            value={ this.props.data.FormDataIn["in_"+i] || 0  }
            onChange={this.handleChange.bind(this)}
            inputProps={{
              name: "in_"+i,
            }}
              className={[scss['select']]}>
 
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Variable</MenuItem>
          {/*<MenuItem value={2}>Constante</MenuItem>*/}
        </Select>
        {res}        
      </Grid>
        }
      
      )
   }
getoutvars(){
    return [...Array(this.state.quantityOfOut)].map((e, i) =>{
      var res = <div></div>
      if (this.props.data.FormDataIn["out_" + i]  == 1){
        res = <TextField
              id={"out_name_" + i}
              value={this.props.data.FormDataIn["out_name_"+i]}
              onChange={(e) => {this.handleChange(e)}}
              label="La commande a executer"
              rows={5}
              rowsMax={20}
              inputProps={{
                name: "out_name_"+i,
              }}
            />
      }
      if (this.props.data.FormDataIn["out_" + i]  == 2){
        res = <span>
                <TextField
              id={"out_name_" + i}
              value={this.props.data.FormDataIn["out_name_"+i]}
              onChange={(e) => {this.handleChange(e)}}
              label="L'expression a executer"
              rows={5}
              rowsMax={20}
              inputProps={{
                name: "out_name_"+i,
              }}
                /> 
      
          <TextField
            id={"out_value_" + i}
            value={this.props.data.FormDataIn["out_value_"+i]}
              onChange={(e) => {this.handleChange(e)}}
              label="Valeur de retour de l'expression"
          rows={5}
          rowsMax={20}
          inputProps={{
                name: "out_value_"+i,
              }}
            />
            </span>
      }
      return <Grid
              container
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
               className={[scss['grid']]}>
        <Select
          value={ this.props.data.FormDataIn["out_" + i] || 0  }
          onChange={this.handleChange.bind(this)}
          inputProps={{
            name: "out_" + i,
          }}
              className={[scss['select']]}>
          <MenuItem value="0" selected>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Expression</MenuItem>
          <MenuItem value={2}>Commande</MenuItem>
        </Select>
        {res}
      </Grid>
    }
      )
   }
  delinvars(){
          this.setState({quantityOfIn: this.state.quantityOfIn - 1 });

  }
  deloutvars(){
          this.setState({quantityOfOut: this.state.quantityOfOut - 1 });

  }
  getDelIn(){
        if (this.state.quantityOfIn == 0){
           return <div>add a Variable</div>;
         }
        return <div></div>;
       // return <Button className={[scss['delete']]} variant="contained"  onClick={() => {this.delinvars()}}>Supprimer</Button>;
  }
  getDelOut(){
        if (this.state.quantityOfOut == 0){
           return <div>Aucune clause de validation</div>;
         }
        return <div></div>;
        //return <Button className={[scss['delete']]}  onClick={() => {this.deloutvars()}}>Supprimer</Button>;
  }
	 render() {
	 	return(
	 		 <div className={scss['ListeExercices']} >  
          <form className={[ scss['form_add_proff_form']]} noValidate autoComplete="off">
            <TextField
              id="titre"
              value={this.props.data.FormDataTitle}
              onChange={(e) => {this.props.updateFormTitle(e.target.value)}}
              label="Titre de l'exercice"
              margin="normal"
            />
            <TextField
              id="Énoncé"
              value={this.props.data.FormDataDesc}
              onChange={(e) => {this.props.updateFormDesc(e.target.value)}}
              label="Description de l'exercice"
              multiline={true}
              variant="outlined"
              rows={5}
              rowsMax={20}
              margin="normal"
            />
            <Button className={[scss['button_add']]} variant="contained"  onClick={() => {this.addInVariable()}}>
              Ajouter un Element en entrée
            </Button>
            <div className={[scss['grid_container']]}>
                        { this.getinvars()}
            { this.getDelIn()}
            </div>


            <Button className={[scss['button_add']]} variant="contained"  onClick={() => {this.addOutVariable()}}>
              Ajouter une clause de validation
            </Button>
            <div className={[scss['grid_container']]}>
                        { this.getoutvars()}
            { this.getDelOut()}
            </div>
<Button className={[scss['vld']]} variant="contained" color="primary"  onClick={() => {this.formSubmit()}}>
              Valider
            </Button>
          </form>

            
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