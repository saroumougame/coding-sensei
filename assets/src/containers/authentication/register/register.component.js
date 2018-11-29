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
import themeStyles from './register.theme.style';
import scss from './register.module.scss';
import ecole_image from '../../../assets/images/ecole_chaise.jpg';
import proff_image from '../../../assets/images/proff.jpg';
import eleve_image from '../../../assets/images/eleve.jpg';
import logoImage from '../../../assets/images/imgFrontBackG.jpg';
import { inscriptionEtapeAction } from '../../../actions/auth.actions';
import RegisterForm from './registerForm.component';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Register extends React.Component {
  state = {
    spacing: '16',
  };

  componentWillMount() {

    if(this.props.match.params.formulaire != undefined){
      this.props.inscriptionEtapeAction(2);
    }else {
      this.props.inscriptionEtapeAction(1);
    }

  }

  render() {

    const { classes } = this.props;
    const { spacing } = this.state;

    return (

      <div className={scss['inscription-content']}>
      <Grid className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

              <Grid item>
                <Card >
                  <CardContent>
                    <Typography variant="headline" component="h2" gutterBottom>
                      Vous éte une Ecole / Structure.
                    </Typography>
                    <NavLink strict to="/inscription/structure">
                    <Button  color="default" variant="raised">S'inscrire</Button>
                    <Button >Plus d'informations</Button>
                    </NavLink>
                  </CardContent>
                </Card>
              </Grid>


            <Grid item>
              <Card >
                <CardContent>
                  <Typography variant="headline" component="h2" gutterBottom>
                    Vous éte un Professeur.
                  </Typography>
                  <NavLink to="/inscription/professeur" >
                  <Button color="default" variant="raised">S'inscrire</Button>
                  <Button >Plus d'informations</Button>
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>



            <Grid item>
              <Card >
                <CardContent>
                  <Typography variant="headline" component="h2" gutterBottom>
                    Vous éte un éleve.
                  </Typography>

                  <NavLink to="/inscription/eleve" >
                  <Button color="default" variant="raised">S'inscrire</Button>
                  <Button >Plus d'informations</Button>
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: {
      etape: state.authData.etape_inscription,
    }
  };
}


Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  inscriptionEtapeAction:PropTypes.func.isRequired,

};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {inscriptionEtapeAction})
  )(Register);
/*
                < img src={ecole_image} className={scss['inscription-image']} alt="logo" />
                */
