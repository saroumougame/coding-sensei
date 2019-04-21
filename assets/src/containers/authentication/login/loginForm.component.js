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
import Loader from 'react-loader-spinner'

import Snackbar from '@material-ui/core/Snackbar';

import { loginonEmail, loginonPassword, login, login_snack, login_snack_close, login_spinner_start } from '../../../actions/auth.actions';


class LoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      changePassword: false,
      open: false,
      vertical: 'top',
      horizontal: 'right',
      textSnack: ''
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  changePassword = () => {
    if(this.state.changePassord) {
      this.setState({changePassord: false});
    }else {
      this.setState({changePassord: true});
    }
  };

  handleEmailChange = (e) => {
    this.props.loginonEmail(e.target.value);
  }

  handlePasswordChange = (e) => {
    this.props.loginonPassword(e.target.value);
  }

  submitFormLogin = (e)=> {
    if(this.props.data.auth_login_email == '' || this.props.data.auth_login_password == ''){
      this.props.login_snack( 'Vous devez remplir tout les champs');
      return;
    }
    // tester l'email
    this.props.login_spinner_start();
    this.props.login(this.props.data.auth_login_email, this.props.data.auth_login_password);
  }

  getSpinner = () => {
    if(this.props.data.login_spinner){ 
    return (
      <Loader 
       type="Triangle"
       color="#00BFFF"
       height="100" 
       width="100"
    />   
      );
    }
    return;
  }

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open, textSnack } = this.state;
    if(!this.state.changePassord){
      return (
        
                <Card className={scss.card}>
               <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={this.props.data.login_snack}
                        onClose={this.props.login_snack_close}
                        ContentProps={{
                          'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.props.data.login_message}</span>}
                      />
                  <CardContent>
                {this.getSpinner()}
                    <TextField
                      label="Email Address"
                      value={this.props.data.auth_login_email}
                      fullWidth
                      type="email"
                      onChange={this.handleEmailChange}
                    />
                    <TextField
                      label="Password"
                      fullWidth
                      value={this.props.data.auth_login_password}
                      margin="normal"
                      type="password"
                      onChange={this.handlePasswordChange}
                    />
                  </CardContent>

                  <CardActions className={scss['login-actions']}>
                    <Button onClick={this.submitFormLogin} color="default" variant="raised">Login</Button>
                    <Button> Forgot Password</Button>
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


function mapStateToProps(state) {
  return {
    data: {
      auth_login_email:           state.authData.auth_login_email,
      auth_login_password:        state.authData.auth_login_password,
      login_snack:                state.authData.login_snack,
      login_message:              state.authData.login_message,
      login_spinner:              state.authData.login_spinner,
    }
  };
}

LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,

};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {loginonEmail, loginonPassword, login, login_snack, login_snack_close, login_spinner_start }),
)(LoginForm);
