import React from 'react';
import { connect } from 'react-redux';
import scss from './ListeExercice.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { listeExerciceAction } from '../../../actions/exercice.actions';


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



   getListItem() {
      let count = 0;
      let liste = this.props.data.liste_exerciceData;
      return liste.map((i) => {
        count++;
        if(count > this.state.pagination){  
        return (
            <ListItem key={count}  className={scss['UnExercice']} button onClick={this.props.customClick}>
              <ListItemIcon>
              {/*
                <StarIcon />
              */}
              </ListItemIcon>
              <ListItemText inset primary={i.name}  secondary={i.description} />
            </ListItem>
          );
        }else {
          return (<div></div>);
        }
      });
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