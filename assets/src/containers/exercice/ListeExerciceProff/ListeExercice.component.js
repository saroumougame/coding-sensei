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
import scss from './ListeExercice.module.scss';
//import themeStyles from './home-eleve.style.js';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';

import { listeExerciceAction } from '../../../actions/exercice.actions';


const ListExo = ['Exercice 1 - constante PHP', 'Exercice 2 - variables PHP'];

class listeEcercice extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null,
        pagination: 0,
	    }
      //coucou
      this.props.listeExerciceAction();
	 }


   getDateRealisation(exercice) {
      if(exercice.dateEnd == null) {
        return 'Date limite: infinie';
      }
      return 'Date limite: '+ exercice.dateEnd;
   }

   getListItem() {
      let count = 0;
      let liste = this.props.data.liste_exerciceData;
      if(typeof(liste) != 'undefined' && typeof(liste) != undefined) { 
        return liste.map((i) => {
          count++;
          if(count > this.state.pagination){  
          return (
              <ListItem key={count}  className={scss['UnExercice']} button onClick={() => {this.props.customClick(i)}}>
                <ListItemIcon>
                {/*
                  <StarIcon />
                */}
                </ListItemIcon>
                <ListItemText inset primary={i.name}  secondary={i.description} />

                <div>
                {this.getDateRealisation(i)} 
                </div>
              </ListItem>
            );
          }else {
            return;
          }
        });
      }
   }    

	 render() {

    console.log(this.props.data.liste_exerciceData);
	 	return(
	 		 <div className={scss['ListeExercices']} >  
         <List component="nav">
              {this.getListItem()}
          </List>
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      liste_exerciceData:               state.exerciceData.liste_exercice
    }
  };
}
export default 
  connect(mapStateToProps, {listeExerciceAction})(listeEcercice);