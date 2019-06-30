import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import Button from '@material-ui/core/Button';
import ListeExercice from   '../../../exercice/ListeExerciceProff/ListeExercice.component' ;
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddExerciceForm from '../../../exercice/addExercice/AddExerciceForm.component';
import ShowExerciceProff from '../../../exercice/showExerciceProff/ShowExerice.component';
import { setCurrentExerciceProff, setExerciceComponentAction } from '../../../../actions/exercice.actions';
import { updateClass,deleteClass } from '../../../../actions/classes.actions';

class NoContacts extends React.Component {
    

constructor(props) {    
  super(props);
      this.state = {
        Exercice: null, // null = show | add = add | edit = edit
        currentClasse: null
      }
   }


   getExerciceTitle() {

      if(this.props.data.current_Exercice_proff == null) {
        return " liste d'exercices ";
      }

deleteClass
   }
  updateClass(){
    this.props.updateClass(this.state.currentClasse, this.props.data.currentClasse.id);
  }
  deleteClass(){
    this.props.deleteClass(this.props.data.currentClasse.id);
  }
  handleNameUpdate(e){
    this.setState({
        currentClasse: e.target.value
      })
  }
   getPaperContent() {
      if(this.props.data.exercice_component === null){
        return (
          <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    {this.getExerciceTitle()}
                    <Button onClick={() => {this.props.setExerciceComponentAction('add'); }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          Ajouter un exercice
                   </Button>
                  </Typography>
                  
                  <ListeExercice customClick={(i) => {this.props.setCurrentExerciceProff(i);this.props.setExerciceComponentAction('edit'); }} />
          </div>
          );
      }else if(this.props.data.exercice_component === 'add'){
        return (
            <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Ajout d'exercice -
                    <Button onClick={() => {this.props.setExerciceComponentAction(null); }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

                  <AddExerciceForm />
          </div>
          );
      }else if(this.props.data.exercice_component === 'edit') {
          return (
            <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    
                    <Button onClick={() => {this.props.setExerciceComponentAction(null); }} variant="outlined" className={scss['btn-ajouter-exo']}>
                          voir les exercices
                   </Button>
                  </Typography>

                  <ShowExerciceProff />

          </div>
          );        
      }
   }
componentWillReceiveProps(nextProps) {
    this.setState({
        currentClasse: nextProps.data.currentClasse.name
      });
  }
  render(){
    console.log(this.props.data.currentClasse);
    return (
    <div className={classNames(scss['portal-contacts-no-contacts'])}>
      
      <Grid
        container
        direction="row"
        spacing={0}
        justify="space-between"
        className={classNames(scss['class-detail-header'])}>
        <div
className={classNames(scss['class-detail-header-in'])}
        >
        <form 
className={classNames(scss['class-detail-header-in-form'])}
                   noValidate autoComplete="off">
            <Grid
        container
        direction="row"
        spacing={0}
        justify="space-between">
        <TextField
              id="nom"
              onChange={this.handleNameUpdate.bind(this)}
              label="Nom de la classe"
              margin="normal"
              value={this.state.currentClasse}
              className={classNames(scss['class-detail-header-in-form-grid'])}
            />
            <Button color="primary" className={scss['portal-contacts-detail-update-contact']} 
            onClick={this.updateClass.bind(this)}
          >
                <EditIcon/>
            </Button>
            </Grid>
            </form>


                    </div>
      
            <Button color="secondary" className={scss['portal-contacts-detail-delete-button-contact']}
            onClick={this.deleteClass.bind(this)} >
                <DeleteIcon/> 
            </Button>
      </Grid>


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
      classList:           state.classData.classes,
      currentClasse:           state.classData.currentClasse,  
      classUpdatedList:    state.classData.UpdatedClasses,
      current_Exercice_proff: state.exerciceData.current_Exercice_proff,
      exercice_component: state.exerciceData.exercice_component
    }
  };
}
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
 connect(mapStateToProps, {setCurrentExerciceProff, setExerciceComponentAction,updateClass,deleteClass}) )(NoContacts);
