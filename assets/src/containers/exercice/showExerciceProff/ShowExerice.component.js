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
import scss from './ShowExerice.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

import { deleteExercice } from '../../../actions/exercice.actions';

class ShowExerice extends React.Component {

  	constructor(props) {
    	super(props);

  
	 }


	 render() {
    console.log(this.props.data.current_Exercice_proff);
    console.log('ici');
    var exo = this.props.data.current_Exercice_proff; 
	 	return(
	 		 <div className={scss['home-eleve-main']} >  
        
              <Typography variant="headline" component="h5" className={scss['titre-exo']}>
                 {exo.name}
              </Typography>

            <Button  onClick={this.props.deleteExercice} color="secondary" className={scss['portal-contacts-detail-delete-button-contact']} >
                <DeleteIcon/> 
            </Button>
       
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      current_Exercice_proff:           state.exerciceData.current_Exercice_proff,
    }
  };
}
export default connect(mapStateToProps, {deleteExercice})(ShowExerice);