import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth      from '@material-ui/core/withWidth';
import classNames from 'classnames';
import compose        from 'recompose/compose';
import { connect } from 'react-redux';
import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import UserTasksWidget from '../user-tasks-widget/user-tasks-widget.component';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListeExercice from   '../../../exercice/ListeExerciceProff/ListeExercice.component' ;
import AddExerciceForm from '../../../exercice/addExercice/AddExerciceForm.component';


class NoContacts extends React.Component {
    

constructor(props) {    
  super(props);
      this.state = {
        Exercice: null // null = show | add = add | edit = edit
      }
   }

   getPaperContent() {
      if(this.state.Exercice == null){
        return (
          <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Exercices -  
                    <Button onClick={() => {this.setState({Exercice: 'add'}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          Ajouter un exercice
                   </Button>
                  </Typography>
                  
                  <ListeExercice customClick={() => {this.setState({Exercice: 'edit'}) }} />
          </div>
          );
      }else if(this.state.Exercice == 'add'){
        return (
            <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Ajout d'exercice -
                    <Button onClick={() => {this.setState({Exercice: null}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

                  <AddExerciceForm />
          </div>
          );
      }else if(this.state.Exercice == 'edit') {
          return (
            <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Exercice - PHP
                    <Button onClick={() => {this.setState({Exercice: null}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

          </div>
          );        
      }
   }

  render(){

  return (
    <div className={classNames(scss['portal-contacts-no-contacts'])}>
      {this.getPaperContent()}
         
    </div>
    );
  }
};

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
    }
  };
}
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps))(NoContacts);

