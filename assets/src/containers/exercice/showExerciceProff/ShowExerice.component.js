import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import scss from './ShowExerice.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { deleteExercice } from '../../../actions/exercice.actions';

class ShowExerice extends React.Component {

  parseDate(uneDate) {
    if(uneDate != null){
      return uneDate.substring(0, 10);
    }
   }

	 render() {
    var exo = this.props.data.current_Exercice_proff; 
	 	return(
	 		 <div className={scss['home-eleve-main']} >  
        
              <Typography variant="headline" component="h5" className={scss['titre-exo']}>
                 {exo.name}
              </Typography>

               <Paper className={scss['paper-description']}>
           <Typography component="h3">Titre: </Typography>
           {exo.name}
        </Paper>
        <Paper className={scss['paper-description']}>
          <Typography component="h3">Description: </Typography>
          {exo.description}
        </Paper>      
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée en entrée: </Typography>
            {exo.inData}
        </Paper> 
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée attendu en sortie: </Typography>
            {exo.outData}
        </Paper> 
         <Paper className={scss['paper-description']}>
            <Typography component="h3">Date limite: </Typography>
            {this.parseDate(exo.dateEnd)}
        </Paper>        

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