import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import scss from './ExerciceEditeur.module.scss';
import Modal from '@material-ui/core/Modal';
import Loader from 'react-loader-spinner';
import MonacoEditor from 'react-monaco-editor';
import {updateExerciceAction, submitModalAction, submitExerciceAction, dismissModal} from "../../../../actions/exercice.actions";

class ExerciceEditeur extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null,
        code: '// type your code...'
	    }

	 }



   getLoader() {

    if(this.props.data.exerciceResultat === null){
      return (
            <Loader 
                   type="Triangle"
                   color="#00BFFF"
                   height="100" 
                   width="100"
                />
        );
    }
   }

   getDismissButton() {
    if(this.props.data.exerciceResultat != null){
      return (
          <Button variant="contained" color="default" onClick={() => {this.props.dismissModal()}}>
              continuer
          </Button>
        );
     }
   }


   submitTextAreat() {
    this.props.submitModalAction();
    this.props.submitExerciceAction(this.props.data.exerciceTexte);
   }

  getModalText () {
     if(this.props.data.exerciceResultat === null){
      return ' Nous compilons votre code.. veuillez patienter...';
     }else if(this.props.data.exerciceResultat === false) {
        return 'Rater... veuillez réessayer';
     }else if(this.props.data.exerciceResultat === true) {
        return 'Bravo, vous avez réussit';
     }
  }

  getModalTextFromReturn() {
    return this.props.data.exerciceResultatText;
  }

   getModalValidation () {
    return (
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.data.exerciceModal}
        >
          <div  className={scss['modal-paper']}>

              <Typography variant="h4" id="modal-title">
                 {this.getModalText()}
              </Typography>


              <Typography variant="h6" color="error" className={scss['modal-text-fail']}>
                 {this.getModalTextFromReturn()}
              </Typography>

                {this.getLoader()}
                {this.getDismissButton()}
          </div>
        </Modal>
      );
   }

  editorDidMount(editor, monaco) {
    editor.focus();
  }
  onChange(newValue, e) {
  }


	 render() {
    const options = {
      selectOnLineNumbers: false,
      colorDecorators: true,
      minimap: {
        enabled: false
      }
    };

	 	return(
	 		 <div className={scss['home-eleve-main']} >  
       {this.getModalValidation()}
       <div className={scss['editor']}>
           <MonacoEditor
            width="100%"
            height="400"
            language="javascript"
            theme="vs-black"
            value={this.props.data.exerciceTexte}
            options={options}
            onChange={(e) => { this.props.updateExerciceAction(e)}}
            editorDidMount={this.editorDidMount}
          />
        </div>
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
      exerciceResultat:                 state.exerciceData.exerciceResultat,
      exerciceResultatText:             state.exerciceData.exerciceResultatText,

    }
  };
}
export default compose(withWidth(), withStyles( { withTheme: true }),
  connect(mapStateToProps,  {updateExerciceAction, submitModalAction, submitExerciceAction, dismissModal}))(ExerciceEditeur);