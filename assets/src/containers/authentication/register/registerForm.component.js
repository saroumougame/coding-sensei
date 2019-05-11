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
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import themeStyles from './register.theme.style';
import scss from './register.module.scss';
import ecole_image from '../../../assets/images/ecole_chaise.jpg';
import proff_image from '../../../assets/images/proff.jpg';
import NavigationIcon from '@material-ui/icons/Navigation';
import logoImage from '../../../assets/images/imgFrontBackG.jpg';
import { inscriptionEtapeAction, inscriptionNomProff, inscriptionEmailProff, inscriptionPasswordProff, inscriptionPasswordDoubleProff, register, snackDelete } from '../../../actions/auth.actions';
import { Remove } from '@material-ui/icons';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const option1 = "J'ai un code professeur";
const option2 = "Je suis indépendant";

const names = [
  option1,
  option2,
];


class RegisterForm extends React.Component {

  constructor() {
    super();

   this.state = {
      conditionutilisation: true,
      select: '',
      open: false,
      vertical: 'top',
      horizontal: 'right',
      snackMessage: 'Une erreur est survenue'
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseRegister = () => {
    this.props.snackDelete();
  };


  getType = () => {
    if(this.props.match.params.formulaire == "structure"){
      return 'structure';
    }else if(this.props.match.params.formulaire == "professeur"){
      return 'profeseur';
    }else if(this.props.match.params.formulaire == "eleve"){
      return 'eleve';
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeSelectProff = (e) => {

    this.setState({select: e.target.value});
    if(e.target.value == option1){

    }else if (e.target.value == option2){

    }
  };

  getRedirectConnect = () => {
    if(this.props.data.register_snack == true) {
       return <Redirect to='/' />;
    }
  }

  submitFormProfesseur = (e) => {
      e.preventDefault();

      if(this.props.data.auth_password == '' 
        || this.props.data.auth_email == '' 
        ||  this.props.data.auth_nom == '' 
        || this.props.data.auth_password_double == '') {
        this.setState({ open: true,  snackMessage: 'Vous devez remplir tout les champs.' });
        return;
      }
      if(this.props.data.auth_password != this.props.data.auth_password_double) {
        this.setState({ open: true,  snackMessage: 'Les deux mots de passe ne correspondent pas.' });
        return;
      }
       this.props.register(this.props.data.auth_nom, this.props.data.auth_email, this.props.data.auth_password);
  }


  handleNomChange = (e) => {
    this.props.inscriptionNomProff(e.target.value);
  }

  handleEmailChange = (e) => {
    this.props.inscriptionEmailProff(e.target.value);
  }

  handlePasswordChange = (e) => {
    this.props.inscriptionPasswordProff(e.target.value);
  }

  handlePasswordDoubleChange = (e) => {
    this.props.inscriptionPasswordDoubleProff(e.target.value);
  }

  getForm = () => {
    let { classes } = this.props;

    if(this.props.match.params.formulaire == "structure"){
      return (
        <div className={[ scss['form_inscription']]}>
          <TextField
            id="nom"
            label="Nom de la structure"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="matiere"
            label="Nom du responsable"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="matiere"
            label="Email"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="matiere"
            label="Numero de telephone"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="matiere"
            label="adresse"
            className={classes.textField}
            margin="normal"
          />
          <FormControlLabel
            control={
          <Switch
            checked={this.state.conditionutilisation}
            onChange={this.handleChange('conditionutilisation')}
            value="conditionutilisation"
            color="primary"
          />
            }
            label="Je valide les conditions d'utilisation."
          />
        </div>
      );
    }else if(this.props.match.params.formulaire == "professeur"){
      return (
        <div className={[ scss['form_inscription']]}>
          <TextField
            id="nom"
            label="Nom"
            className={classes.textField}
            value={this.props.data.auth_nom}
            onChange={this.handleNomChange}
            margin="normal"
          />
          <TextField
            id="email"
            label="email"
            className={classes.textField}
            value={this.props.data.auth_email}
            onChange={this.handleEmailChange}
            margin="normal"
          />
          <TextField
            id="mot de passe"
            label="mot de passe"
            className={classes.textField}
            type="password"
            value={this.props.data.auth_password}
            onChange={this.handlePasswordChange}
            margin="normal"
          />
          <TextField
            id="mot de passe²"
            label="mot de passe²"
            className={classes.textField}
            type="password"
            value={this.props.data.auth_password_double}
            onChange={this.handlePasswordDoubleChange}
            margin="normal"
          />

            <CardActions onClick={this.submitFormProfesseur} >
              <Button fullWidth  color="default" variant="raised">Crée un compte</Button>
            </CardActions>
        </div>
      );
    }else if(this.props.match.params.formulaire == "eleve"){
      return (
        <div className={[ scss['form_inscription']]}>
          <TextField
            id="nom"
            label="Adresse email"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="matiere"
            label="code étudiant"
            className={classes.textField}
            margin="normal"
          />
        </div>
      );
    }
  };


  render() {
    {this.getRedirectConnect()}
    const { vertical, horizontal, open } = this.state;
    return (

      <div className={scss['inscription-content']}>
      
      <Snackbar
          variant="error"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackMessage}</span>}
        />

      <Snackbar
          variant="error"
          anchorOrigin={{ vertical, horizontal }}
          open={this.props.data.register_snack}
          onClose={this.handleCloseRegister}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.data.register_message}</span>}
        />

        <Card className={scss['register-form-cart']}>
          <NavLink strict to="/inscription">
          <Button variant="fab" color="primary" className={scss['inscription-back-button']}>
            <Remove/>
          </Button>
          </NavLink>
          <CardContent className={scss['signup-content']}>
            <img src={logoImage} className={scss['signup-logo']} alt="logo" />
            <Typography variant="headline" component="h2" gutterBottom>
              Portail d'inscription : {this.getType()}
            </Typography>
            <Typography component="p" gutterBottom>
              Bienvenu sur conding-sensei. Inscrit toi pour commencer à apprendre.
            </Typography>
            <Typography component="p" gutterBottom>
              Une fois inscrit tu pourra t'entrainer, suivre des exercices et apprendre à coder.
            </Typography>
            {this.getForm()}
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      etape:                state.authData.etape_inscription,
      type:                 state.authData.inscriptionType,
      auth_email:           state.authData.auth_email,
      auth_nom :            state.authData.auth_nom,
      auth_password:        state.authData.auth_password,
      auth_password_double: state.authData.auth_password_double,
      register_snack      : state.authData.register_snack,
      register_message    : state.authData.register_message,
    }
  };
}

RegisterForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  inscriptionEtapeAction:PropTypes.func.isRequired,
};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {inscriptionEtapeAction, inscriptionNomProff, inscriptionEmailProff, inscriptionPasswordProff, inscriptionPasswordDoubleProff, register, snackDelete})
)(RegisterForm);
