import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {NavLink, withRouter, Redirect} from 'react-router-dom';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
//import themeStyles from './login.theme.style';
import scss from './account.module.scss';



class AccountProff extends React.Component {

  constructor() {
    super();

  }

  

  render() {
    const { classes } = this.props;
      return (
        

                <div className={scss.card}>
                  coucou
                </div>
      );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      auth_login_email:           state.authData.auth_login_email,
      auth_login_password:        state.authData.auth_login_password,
    }
  };
}

/*
LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,

};
*/
export default compose(
  withWidth(),
  connect(mapStateToProps, { }),
)(AccountProff);
