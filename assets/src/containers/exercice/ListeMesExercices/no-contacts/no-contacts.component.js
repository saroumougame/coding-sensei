import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import {addClass}      from '../../../../actions/classes.actions';
import Modal2 from '../../../../components/modal.component';
import Grid from '@material-ui/core/Grid';


class NoContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',
       open: false,

    }
  }



  render(){
    const { classes } = this.props;
  return (
    <div className={classNames(scss['portal-contacts-no-contacts'], classes['portal-contacts-no-contacts'])}>
      <Grid className={scss['grid_no_class']} container direction="column" justify="center" alignContent="center">
              <img alt='' className={scss['grid_no_class_img']} src="/assets/images/exo.svg"/>
              <p className={scss['text_no_class']}>
              Selectionnez un exercice pour commencer ou allez <a onClick={this.redirecttoclass}>ici</a> pour en creer un 
              </p>
              </Grid>

     

          
    </div>
  );
}
};

function mapStateToProps(state) {
  return {
    data: {
      classNom:           state.classData.CreateClassNom,  
      classPromotion:     state.classData.CreateClassPromotion, 
    }
  };
}

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withStyles(themeStyles, { withTheme: true }), connect(mapStateToProps, {addClass})) (NoContacts);





