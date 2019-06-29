import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import scss from './ExerciceEleve.module.scss';
import ExerciceEditeur from './exerciceEditeur/ExerciceEditeur.component';


class ExerciceEleve extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }
	 }

   getVariableInData() {
        //console.log(this.props.data.current_Exercice_User.exercice['inData']);
        //let inData = JSON.parse(this.props.data.current_Exercice_User.exercice['inData']);
        /*
        return this.props.data.current_Exercice_User.exercice['inData'].map((item) => {
          console.log(item);
          return (
            <div>item</div>
            );
        })
        */


   }

   getExerciceTitle() {
    if(this.props.data.current_Exercice_User != null){
      //console.log(this.props.data.current_Exercice_User.exercice);
      return this.props.data.current_Exercice_User.exercice['name'];
    }
    return 'Cliquer sur un exercice pour commencer';
   }

   getExerciceDescription() {
    if(this.props.data.current_Exercice_User != null){
      return this.props.data.current_Exercice_User.exercice['description'];
    }
    return ;
   }

   getVariableIn() {
    if(this.props.data.current_Exercice_User != null){
      return (
          <Paper className={scss['paper-enoncer-data']}>
             <Typography variant="headline" component="h5">Variables d'entrée</Typography>
             {this.getVariableInData()}
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
           {this.props.data.current_Exercice_User.exercice['outData']}
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

              <div className={scss['paper_data_in']}>
                {this.getExerciceDescription()}
              </div>

              <div className={scss['paper_data_in']}>
                {this.getVariableIn()}
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