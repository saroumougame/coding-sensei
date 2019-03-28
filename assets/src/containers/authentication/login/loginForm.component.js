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
import themeStyles from './login.theme.style';
import scss from './login.module.scss';
import logoImage from '../../../assets/images/portal-logo.png';




class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      changePassword: false,

    };
  }

  changePassword = () => {
    if(this.state.changePassord) {
      this.setState({changePassord: false});
    }else {
      this.setState({changePassord: true});
    }
  };

  render() {
    const { classes } = this.props;
    if(!this.state.changePassord){
      return (

                <Card className={scss.card}>
                  <CardContent>
                    <TextField
                      label="Email Address"
                      fullWidth
                    />
                    <TextField
                      label="Password"
                      fullWidth
                      margin="normal"
                      type="password"
                    />
                  </CardContent>
                  <CardActions className={scss['login-actions']}>
                    <Button href="/login" color="default" variant="raised">Login</Button>
                    <Button onClick={() => {this.changePassword();}} > Forgot Password</Button>
                  </CardActions>
                </Card>
      );
    } else {
      return (

        <Card className={scss.card}>
          <CardContent>
            <TextField
              label="Email Address"
              fullWidth
            />
          </CardContent>
          <CardActions className={scss['login-actions']}>
            <NavLink to="/login">
            <Button color="default" variant="raised">Envoyer un email de recuperation de mot de passe</Button>
            </NavLink>
            <Button onClick={() => {this.changePassword();}} >login </Button>
          </CardActions>
        </Card>
      );
    }
  }
}



LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,

};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
)(LoginForm);
