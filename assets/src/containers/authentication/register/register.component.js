import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import themeStyles from './register.theme.style';
import scss from './register.module.scss';
import { inscriptionEtapeAction } from '../../../actions/auth.actions';
import proff from '../../../assets/images/proff.jpg';
import proff2 from '../../../assets/images/bonneval-sebastien-1389597-unsplash.jpg';

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
  card: {
    backgroundImage: `url(${proff})`
  },
  media: {
    objectFit: 'cover',
  },
});

class Register extends React.Component {
  state = {
    spacing: '16',
  };

  componentWillMount() {

    if(this.props.match.params.formulaire !== undefined){
      this.props.inscriptionEtapeAction(2);
    }else {
      this.props.inscriptionEtapeAction(1);
    }

  }

  render() {


    return (

      <div className={scss['inscription-content']}>
{/* 
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
                    <Button  color="default" variant="contained">S'inscrire</Button>
                    <Button >Plus d'informations</Button>
                    </NavLink>
                  </CardContent>
                </Card>
              </Grid>

            <Grid item>
*/}
              <Card className={scss['card_proffesseur']}  style={styles.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="PROFF"
                        className={styles.media}
                        image={proff2}
                        title="Contemplative Reptile"
                      />
                      <CardContent className={scss['card_register_proffesseur_content']} >
                        <Typography variant="headline" component="h2" gutterBottom>
                          Vous éte un Professeur.
                        </Typography>
                        <NavLink to="/inscription/professeur" >
                        <Button id="proffeseur" color="default" variant="contained">S'inscrire</Button>
                        <Button >Plus d'informations</Button>
                        </NavLink>
                      </CardContent>
                    </CardActionArea>
              </Card>

{/*
            </Grid>

            <Grid item>
              <Card >
                <CardContent>
                  <Typography variant="headline" component="h2" gutterBottom>
                    Vous éte un éleve.
                  </Typography>

                  <NavLink to="/inscription/eleve" >
                  <Button color="default" variant="contained">S'inscrire</Button>
                  <Button >Plus d'informations</Button>
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
*/}
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
