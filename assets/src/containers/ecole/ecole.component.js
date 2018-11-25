import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Remove  } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import scss from './ecole.module.scss';
import styles from './ecole.style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import TableauEcole from './ecole-table.component';
import EcoleAddProffForm from './ecole-addProffForm.component';
import { showformaction } from '../../actions/ecole.actions';

class Ecole extends Component  {

  constructor() {
    super();
  }

  addClick = () => {
    if(!this.props.data.expanded) {
      return this.props.showformaction()
    }
    return this.props.showformaction()
  };

  SelectPaperContent = () => {
    if(!this.props.data.expanded) {
      return (<TableauEcole />);
    }
    return (<EcoleAddProffForm  />);
  };

  fabButtonIcon = () => {
  if(!this.props.data.expanded) {
    return (<AddIcon/>);
  }
  return (<Remove/>);
}

  render() {
    let { classes } = this.props;

  return (
    <div className={[ scss['portal-pages__header']]}>
      <section className={scss['portal-pages__header']}>
        <div className={scss['portal-pages__container']}>
          <h2>Gestion des professeurs</h2>
          <Paper className={classes.root}>
            <Button variant="fab" color="primary" className={scss['btn_fab']} onClick={() => {this.addClick();}}>
              {this.fabButtonIcon()}
            </Button>
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
    }
  };
}

Ecole.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  showformaction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {showformaction})
)(Ecole);





