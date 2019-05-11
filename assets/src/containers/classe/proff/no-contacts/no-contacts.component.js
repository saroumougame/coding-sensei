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
              <Card className={scss['card_proff_class']} >
                    <CardActionArea>
                    
                      <CardContent className={scss['card_register_proffesseur_content']} >
                        <Typography variant="h5"  gutterBottom>
                           Vous avez avez 10 Crédit. Un crédit correspond a 5 élèves.Chaque élèves ne peut appartenir qu'a une classe. 
                        </Typography>
                        <NavLink to="/inscription/professeur" >
                        <Button color="default" variant="raised">Ajouter une classe</Button>
                        </NavLink>
                        <Button className={scss['car_addclass_boutique']}>Aller a la boutique</Button>
                      </CardContent>
                    </CardActionArea>
              </Card>

      <div className={classNames(
        scss['portal-contacts-no-contacts__icon'],
        classes['portal-contacts-no-contacts__icon']
      )}
      >
        <div className={scss['portal-contacts-no-contacts__paper']} />
      </div>
    {/*
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
    

            <Button variant="contained" color="primary" className={scss['portal-contacts-no-button-form']} onClick={() => {this.formSubmit()}}>
              Crée la classe
            </Button>
          </form>
    */}

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
