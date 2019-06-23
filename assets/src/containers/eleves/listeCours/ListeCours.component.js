import React from 'react';
import { connect } from 'react-redux';
import scss from './ListeCours.module.scss';

import { getExercicesEleve, setCurrentExoUser } from '../../../actions/exercice.actions';


class ListeCours extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }


	 }

   showExercice(i) {
     //console.log(i);
     this.props.setCurrentExoUser(i);

   }

   getListeExercices() {
      //if(this.props.data.classeUser != null) {
      //}
        //this.props.getExercicesEleve();
       return this.props.data.liste_exercice_user.map((i) => {
          console.log(i);
          return (
            <div className={scss['un-cour']} onClick={() => this.showExercice(i)} >
               {i.exercice.name}
               <div>
               {i.exercice.description}
               </div>
            </div>
            );
        });
   }

	 render() {
	 	return(
      <div>
	 		 <div className={scss['liste-exercice']}> 
        {this.getListeExercices()}
	 		 </div>
      </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      classeUser:                       state.classData.classeUser,
      liste_exercice_user:              state.exerciceData.liste_exercice_user,
    }
  };
}
export default 
  connect(mapStateToProps, {getExercicesEleve, setCurrentExoUser})(ListeCours);