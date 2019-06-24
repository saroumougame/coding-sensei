import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import themeStyles from './login.theme.style';
import scss from './login.module.scss';
import logoImage from '../../../assets/images/portal-logo.png';
import LoginForm from  './loginForm.component';
import Snackbar from '@material-ui/core/Snackbar';


class PositionedSnackbar extends React.Component {
  state = {
    open: true,
    vertical: 'top',
    horizontal: 'right',
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Vous n'avez pas access a cette page.</span>}
        />
    );
  }
}

const getSnack = (myParam) => {
  if(myParam === 'access') {
    return (<PositionedSnackbar />);
  }
}
const Login = (props) => {
  const {
    classes,
    width
  } = props;
  // Flip container to column on mobile screens.
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('error');
const panelDirection = width === 'xs' ? 'column' : 'row';

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.background}
    >
    {getSnack(myParam)}
   
      <Grid item sm={10} xs={12}  className={scss.panel}>
        <Grid direction={panelDirection} container justify="space-around"  spacing={0}>
          <Grid
            item
            sm={5}
            xs={12}
          >
            <Card className={classNames(scss.card, classes['primary-card'])}>
              <CardContent className={scss['signup-content']}>
                <img src={logoImage} className={scss['signup-logo']} alt="logo" />
                <Typography variant="headline" component="h2" gutterBottom>
                  Portail de Connexion 
                </Typography>
                <Typography component="p" gutterBottom>
                  Bienvenu sur conding-sensei. Connecte toi pour commencer à apprendre.
                </Typography>
                <Typography component="p" gutterBottom>
                  Une fois connecté tu pourra t'entrainer, suivre des exercices et apprendre à coder.
                </Typography>
                <Typography component="p" gutterBottom>
                  Si tu n'a pas de compte, nous t'invitons à en crée un via le bouton si dessous et rejoindre l'aventure au plus vite !
                </Typography>
              </CardContent>
              <NavLink to="/inscription">
              <CardActions>
                <Button fullWidth color="default" variant="contained">Crée un compte</Button>
              </CardActions>
              </NavLink>
            </Card>
          </Grid>
          <Grid
            item
            sm={5}
            xs={12}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Login);
