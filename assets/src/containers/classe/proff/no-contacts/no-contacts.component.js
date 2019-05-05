import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import {addClass}      from '../../../../actions/classes.actions';

/*
const NoContacts = (props) => {
  const { classes } = props;
  */
class NoContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',

    }
  }


  formSubmit () {
    console.log(this.state.nom);
    this.props.addClass(this.state.nom);
  }

  render(){
    const { classes } = this.props;
  return (
    <div className={classNames(scss['portal-contacts-no-contacts'], classes['portal-contacts-no-contacts'])}>
      <div className={classNames(
        scss['portal-contacts-no-contacts__icon'],
        classes['portal-contacts-no-contacts__icon']
      )}
      >
        <div className={scss['portal-contacts-no-contacts__paper']} />
      </div>
      <Typography component="h2">Crée ou sélectionner une classe</Typography>

          <form  noValidate autoComplete="off">
            <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Nom de la classe"
              className={classes.textField}
              margin="normal"
            />
            {/*
              <TextField
                id="matiere"
                value={this.props.data.classPromotion}
                onChange={(e) => {this.setState({matiere: e.target.value});}}
                label="promotion"
                className={classes.textField}
                margin="normal"
              />
            */}

            <Button variant="contained" color="primary" className={scss['portal-contacts-no-button-form']} onClick={() => {this.formSubmit()}}>
              Crée la classe
            </Button>
          </form>

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
