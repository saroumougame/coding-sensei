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
import scss from './ExerciceEleve.module.scss';
import TextField from '@material-ui/core/TextField';
import ExerciceEditeur from './exerciceEditeur/ExerciceEditeur.component';


class ExerciceEleve extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }
	 }

   getExerciceTitle() {
    if(this.props.data.current_Exercice_User != null){
      return this.props.data.current_Exercice_User['name'];
    }
    return 'Cliquer sur un exercice pour commencer';
   }

   getExerciceDescription() {
    if(this.props.data.current_Exercice_User != null){
      return this.props.data.current_Exercice_User['description'];
    }
    return ;
   }

   getVariableIn() {
    if(this.props.data.current_Exercice_User != null){
      return (
          <Paper className={scss['paper-enoncer-data']}>
             <Typography variant="headline" component="h5">
                Variables d'entrée
              </Typography>
           {this.props.data.current_Exercice_User['inData']}
          </Paper>
        );
    }
    return ;
   }

   getVariableOut() {
    if(this.props.data.current_Exercice_User != null){
      return (
          <Paper className={scss['paper-enoncer-data']}>
             <Typography variant="headline" component="h5">
                Sortie attendue
              </Typography>
           {this.props.data.current_Exercice_User['outData']}
          </Paper>
        );
    }
    return ;    
   }

   getEditor() {
    if(this.props.data.current_Exercice_User != null){
      return (
          <ExerciceEditeur />
        );
    }
    return ;    
    
   }

	 render() {
	 	return(
	 		 <div  className={scss['exercice-zone']} >  
              <Typography variant="headline" component="h3">
                {this.getExerciceTitle()}
              </Typography>

              <div>
              {this.getExerciceDescription()}
              </div>

              <div className={scss['paper_data_in']}>
                {this.getVariableIn()}
              </div>

              <div className={scss['paper_data_in']}>
                {this.getVariableOut()}
              </div>
              <div>
                 {this.getEditor()}
              </div>
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom, 
      current_Exercice_User:            state.exerciceData.current_Exercice_User ,
      exerciceTexte:                    state.exerciceData.exerciceTexte,
    }
  };
}
export default compose(withWidth(), withStyles({ withTheme: true }),
  connect(mapStateToProps))(ExerciceEleve);