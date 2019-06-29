import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import scss from './AddExerciceForm.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { updateFormTitle, updateDate, updateFormDesc, updateFormIn, updateFormOut, createExerciceAction, importAction, importExo } from '../../../actions/exercice.actions';

class AddExerciceForm extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null,
        pagination: 0,
        quantityOfIn: 0,
        quantityOfOut: 1,
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
        if (this.props.data.FormDataIn["in_" + i]  === 1 || this.props.data.FormDataIn["in_" + i]  === 2 ){
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
      if (this.props.data.FormDataIn["out_" + i]  === 1){
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
      if (this.props.data.FormDataIn["out_" + i]  === 2){
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
        if (this.state.quantityOfIn === 0){
           return <div>add a Variable</div>;
         }
        return <div></div>;
       // return <Button className={[scss['delete']]} variant="contained"  onClick={() => {this.delinvars()}}>Supprimer</Button>;
  }
  import(e){
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      
      var files = document.getElementById("raised-button-file").files; // FileList object

      // files is a FileList of File objects. List some properties.
      var res = [];
      for (var i = 0, f; f = files[i]; i++) {
        if (f) {
            var that = this;
            var reader = new FileReader();
            reader.readAsText(f, "UTF-8");
            reader.onload = function (evt) {
                that.props.importExo(evt.target.result);
                that.props.importAction();
            }.bind(that);
            reader.onerror = function (evt) {
              alert("error reading file");
            }
        }

      }
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
  getDelOut(){
        if (this.state.quantityOfOut === 0){
           return <div>Aucune clause de validation</div>;
         }
        return <div></div>;
        //return <Button className={[scss['delete']]}  onClick={() => {this.deloutvars()}}>Supprimer</Button>;
  }

	render() {
	 	return(
	 		 <div className={scss['ListeExercices']} >
          <div>
            <input
              accept="*.coding-sensei"
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span">
                Choose file
              </Button>   
            </label> 
            <Button variant="raised" component="span" onClick={(e) => {this.import(e)}}
>
                Import
            </Button> 
          </div>  
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
             <div className={[scss['grid-container-date']]}>
                   <TextField
                    id="date"
                    label="date limite"
                    type="date"
                    //defaultValue="2017-01-01"
                    value={this.props.data.formDate}
                    onChange={(e) => {this.props.updateDate(e.target.value)}}
                    //className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />

            </div>
            <Button className={[scss['button_add']]} variant="contained"  onClick={() => {this.props.updateDate('0000-00-00')}}>
             definir la date limit comme illimitée
            </Button>
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
      formDate:                         state.exerciceData.formDate,
    }
  };
}
export default 
  connect(mapStateToProps,  {updateDate, updateFormTitle, updateFormDesc, updateFormIn, updateFormOut, createExerciceAction, importAction, importExo})(AddExerciceForm);
  connect(mapStateToProps,  {updateFormTitle, updateFormDesc, updateFormIn, updateFormOut, createExerciceAction, importAction, importExo})(AddExerciceForm);