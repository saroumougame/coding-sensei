import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
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
import { inscriptionEtapeAction } from '../../../actions/auth.actions';
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
    };
  }

  componentWillMount() {
  }

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
    console.log(e);
  };

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
            margin="normal"
          />
          <TextField
            id="matiere"
            label="Matiere"
            className={classes.textField}
            margin="normal"
          />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple">Option d'inscription</InputLabel>
            <Select
              value={this.state.select}
              onChange={this.handleChangeSelectProff}
              input={<Input id="select-multiple" />}
              MenuProps={MenuProps}
            >
              {names.map(name => (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
    console.log(this.props.data.type);

    return (

      <div className={scss['inscription-content']}>
        <Card>
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
            <form  noValidate autoComplete="off">



            </form>

          </CardContent>
          <NavLink to="/inscription">
            <CardActions>
              <Button fullWidth href="/inscription" color="default" variant="raised">Crée un compte</Button>
            </CardActions>
          </NavLink>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      etape: state.authData.etape_inscription,
      type: state.authData.inscriptionType
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
  connect(mapStateToProps, {inscriptionEtapeAction})
)(RegisterForm);
