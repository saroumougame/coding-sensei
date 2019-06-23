import React from 'react';
import PropTypes from 'prop-types';

import {NavLink, withRouter, Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
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
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Modal2 from '../../../../components/modal.component';
import Grid from '@material-ui/core/Grid';


/*
const NoContacts = (props) => {
  const { classes } = props;
          
              <LineChartWidget title="Recent Sales" />
                 
              <TextField
                id="matiere"
                value={this.props.data.classPromotion}
                onChange={(e) => {this.setState({matiere: e.target.value});}}
                label="promotion"
                className={classes.textField}
                margin="normal"
           />
  */
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});
class NoContacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',
       open: false,

    }
  }

 handleOpenModal = () => {
    this.setState({ open: true });
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };


  formSubmit () {
    this.props.addClass(this.state.nom);
  }

  getAddClassForm() {
    const { classes } = this.props;
    return (
          <form  noValidate autoComplete="off">
            <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Nom de la classe"
              className={classes.textField}
              margin="normal"
            />
            <Button variant="contained" color="primary" className={scss['portal-contacts-no-button-form']} onClick={() => {this.formSubmit()}}>
              Crée la classe
            </Button>
          </form>
      );
  }

  render(){
    const { classes } = this.props;
  return (
    <div className={classNames(scss['portal-contacts-no-contacts'], classes['portal-contacts-no-contacts'])}>

              <Grid className={scss['grid_no_class']} container justify="center" alignContent="center">
              <p className={scss['text_no_class']}
              >Vous pouvez des à present creer une classe en cliquant <Modal2
                      colorBtn='default'
                      titleButton='ici'
                      title="Ajouter une classe"
                      text={this.getAddClassForm()}
                  />
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





