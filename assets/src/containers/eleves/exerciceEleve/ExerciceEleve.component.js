import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import scss from './ExerciceEleve.module.scss';
import ExerciceEditeur from './exerciceEditeur/ExerciceEditeur.component';
import Prism from "prismjs";

import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.js";
import "../../../prism.css";

class ExerciceEleve extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }
	 }

  getVars(data){
    
    if (typeof data == "undefined"){
        return [];
    }
if (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
 data = JSON.parse(data);
    } else {
      data = {}
    }    var res = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        res.push([key,data[key]]);
      }
    }
    return res;
  }
  getVariableInData(inData){
    inData = this.getVars(inData);
     if (inData.length <= 0){
      return <div></div>;
    }
    var data = [];
    for (var i = 0; i < inData.length; i++ ){
      data[i] = `$${inData[i][0]} = ${inData[i][1]}`;
    }
    var res = Prism.highlight(data.join("\n"), Prism.languages["php"]);
     return <div>
              <div><b>variables en entrée: </b></div>
              <pre className="line-numbers"><code className="language-php" dangerouslySetInnerHTML={{__html: res}}></code></pre>
            </div>;

  }
   


   getExerciceTitle() {
    if(this.props.data.current_Exercice_User != null){
      return <Typography variant="headline" component="h3">{this.props.data.current_Exercice_User.exercice['name']}</Typography>
    }
    return <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={scss['no-exercice']}>
                <div>
                  Cliquer sur un exercice pour commencer
                </div>
              </Grid>
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
          <div>
             {this.getVariableInData(this.props.data.current_Exercice_User.exercice.inData)}
          </div>
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
                {this.getExerciceTitle()}

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