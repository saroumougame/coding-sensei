import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import scss from './mes-exercices.module.scss';
import { allExerciceProff } from '../../../actions/exercice.actions';
import  ListeExercicesProff  from '../ListeMesExercices/contacts.component';
class MesExercices extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }

      
	 }


	 render() {
	 	return(
        <ListeExercicesProff />
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
    }
  };
}
export default 
  connect(mapStateToProps,  {allExerciceProff})(MesExercices);