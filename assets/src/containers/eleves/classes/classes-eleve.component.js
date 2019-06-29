import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import scss from './classes-eleve.module.scss';
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
                Ma formation :
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