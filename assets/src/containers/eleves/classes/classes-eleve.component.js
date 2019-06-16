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
import scss from './classes-eleve.module.scss';
import TextField from '@material-ui/core/TextField';
import ListeExercices from '../listeCours/ListeCours.component.js';
import { getClassUser } from '../../../actions/classes.actions';
import ExerciceEleve from '../exerciceEleve/ExerciceEleve.component';
class classesEleve extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }

      this.props.getClassUser();
	 }

   componentDidMount() {

   }

   getClassName () {

    if(this.props.data.classeUser != null){
      return this.props.data.classeUser['name'];
    }
    return;
   }
	 render() {
	 	return(
	 		 <div className={scss['main-class-list']}> 
          <div className={scss['class-list']}>
              <Typography  className={scss['mes-formations']} variant="headline" component="h2">
                Mes formations 
              </Typography>
              <Typography  className={scss['mes-formations']} variant="headline" component="h3">
                {this.getClassName()}
              </Typography>

              <ListeExercices />
          </div>
        <ExerciceEleve />
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      classeUser:                       state.classData.classeUser,
    }
  };
}
export default 
  connect(mapStateToProps, {getClassUser})(classesEleve);