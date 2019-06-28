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
     this.props.setCurrentExoUser(i);

   }

   getDateLimit(exo) {
    if(exo.dateEnd == null) {
      return 'Pas de date limite';
    }
   }

   getListeExercices() {
       return this.props.data.liste_exercice_user.map((i) => {
          console.log(i.reponse);


          return (
            <div className={scss['un-cour']} onClick={() => this.showExercice(i)} >
                <div>
                {i.exercice.name}
                </div>
               <div>
               {this.getDateLimit(i.exercice)}
               {/*
              <Typography variant="headline" component="h5">
                
              </Typography>
               {i.exercice.description}
                */}
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