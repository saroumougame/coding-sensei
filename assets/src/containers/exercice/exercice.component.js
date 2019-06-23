import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Remove  } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import scss from './exercice.module.scss';
import styles from './exercice.style';

import ExerciceAddProffForm from './exercice-addProffForm.component';
import { showformaction, deleteProffAction } from '../../actions/exercice.actions';

class Exercice extends Component  {
  addClick = () => {
    if(!this.props.data.expanded) {
      return this.props.showformaction()
    }
    return this.props.showformaction()
  };

  SelectPaperContent = () => {
    if(!this.props.data.expanded) {
      //return (<TableauExercice />);
    }
    return (<ExerciceAddProffForm  />);
  };

  fabButtonIcon = () => {
  if(!this.props.data.expanded) {
    return (<AddIcon/>);
  }
  return (<Remove/>);
  };

  getCountSelected = () => {

    let count = this.props.data.tabSelected.length;
    return count;
  };

  clickDelete = () => {
    return this.props.deleteProffAction();
  };

  render() {

  return (
    <div className={[ scss['portal-pages__header']]}>
      <section className={scss['portal-pages__header']}>
        <div className={scss['portal-pages__container']}>

          <Paper className={scss['exercice-paper']}>
            <div className={scss['exercice-paper-title']}>
              <h2>Gestion des exerice</h2>
            </div>
            <div className={scss['exercice-tableHeader']}>
            <Button variant="fab" color="primary" className={scss['btn_fab']} onClick={() => {this.addClick();}}>
              {this.fabButtonIcon()}
            </Button>
              <div>
              </div>
            </div>
            {this.SelectPaperContent()}
          </Paper>

        </div>
      </section>
    </div>
  );};
};


function mapStateToProps(state) {
  return {
    data: {
      expanded: state.customData.expanded,
      proffs: state.customData.users,
      tabSelected: state.customData.tabSelected,
    }
  };
}

Exercice.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showformaction: PropTypes.func.isRequired,
  deleteProffAction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {showformaction, deleteProffAction})
)(Exercice);





