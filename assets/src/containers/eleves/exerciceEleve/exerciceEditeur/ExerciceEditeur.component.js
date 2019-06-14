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
import scss from './ExerciceEditeur.module.scss';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Loader from 'react-loader-spinner'
import {updateExerciceAction, submitModalAction, submitExerciceAction} from "../../../../actions/exercice.actions";

class ExerciceEditeur extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }


      /*
   */
	 }

   componentDidMount() {
          let monTextArea = document.getElementById('text-area');
        monTextArea.addEventListener('keydown', (e) => {
        console.log(e.key);
        if(e.key == "Tab") {
          e.preventDefault();
          this.props.updateExerciceAction(this.props.data.exerciceTexte+ '  ');
        }
      });
      console.log(monTextArea);
   }

   submitTextAreat() {
    this.props.submitModalAction();
    this.props.submitExerciceAction(this.props.data.exerciceTexte);
   }

   getModalValidation () {
    return (
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.data.exerciceModal}
          //onClose={this.handleClose}
        >
          <div  className={scss['modal-paper']}>
              <Typography variant="h6" id="modal-title">
                 Nous compilons votre code.. veuillez patienter...
              </Typography>

                {this.getLoader()}
                    <Loader 
                   type="Triangle"
                   color="#00BFFF"
                   height="100" 
                   width="100"
                />

          {/*
            <SimpleModalWrapped />
          */}
          </div>
        </Modal>
      );
   }

	 render() {
	 	return(
	 		 <div className={scss['home-eleve-main']} >  
       {this.getModalValidation()}
            <TextField
              id="text-area"
              value={this.props.data.exerciceTexte}
              onChange={(e) => {this.props.updateExerciceAction(e.target.value)}}
              label="description"
              multiline={true}
              variant="outlined"
              rows={15}
              rowsMax={20000}
              margin="normal"
              className={scss['text-area']}
            />
     <Button variant="outlined"  onClick={this.submitTextAreat.bind(this)} color="primary" >
        Tester mes resultats
      </Button>
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      exerciceTexte:                    state.exerciceData.exerciceTexte,
      exerciceModal:                    state.exerciceData.exerciceModal,
      exerciceResultat:                state.exerciceData.exerciceResultat,

    }
  };
}
export default compose(withWidth(), withStyles( { withTheme: true }),
  connect(mapStateToProps,  {updateExerciceAction, submitModalAction, submitExerciceAction}))(ExerciceEditeur);