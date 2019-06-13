import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

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
          <span>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Exercices -  
                    <Button onClick={() => {this.setState({Exercice: 'add'}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          Ajouter un exercice
                   </Button>
                  </Typography>
                  
                  <ListeExercice customClick={() => {this.setState({Exercice: 'edit'}) }} />
          </span>
          );
      }else if(this.state.Exercice == 'add'){
        return (
            <span>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Ajout d'exercice -
                    <Button onClick={() => {this.setState({Exercice: null}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

                  <AddExerciceForm />
          </span>
          );
      }else if(this.state.Exercice == 'edit') {
          return (
            <span>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Exercice - PHP
                    <Button onClick={() => {this.setState({Exercice: null}) }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

          </span>
          );        
      }
   }

  render(){

  return (
    <div className={classNames(scss['portal-contacts-no-contacts'])}>
       <Paper className={scss['exercice-paper']} elevation={4}>
       {this.getPaperContent()}
       </Paper>
         
        </div>
    );
  }
};

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(NoContacts);
