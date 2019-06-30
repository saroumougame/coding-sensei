import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import scss from './tarifs.module.scss';
import styles from './tarifs.style';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import logoImage from '../../assets/images/portal-logo.png';
 import proff from '../../assets/images/prof1.jpg';
 import proff2 from '../../assets/images/prof2.jpg';
 import proff3 from '../../assets/images/prof3.jpg';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const tarifs = (props) => {

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


  const { classes } = props;

  return (

   
    <div className={scss['inscription-content']}>
    
          <Grid className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="center" spacing={16}>
                
                  <Card className={scss['card_proffesseur']}  style={styles.card}>
                  <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="PROFF"
                            className={styles.media}
                             image={proff}
                            title="Contemplative Reptile"
                          />
                          <CardContent className={scss['card_register_proffesseur_content']} >
                            <Typography variant="Title" component="h1" gutterBottom>
                            Classe Particuliers
                            </Typography>
                            <hr></hr>
                            <Typography  variant="Title" component="h2" gutterBottom>
                            5 personnes maximum
                            </Typography>
                            <hr></hr>
                            <Typography variant="Title" component="h3" gutterBottom>
                            5 euros / mois
                            </Typography>
                            <NavLink to="/inscription/professeur" >
                            <Button color="secondary" variant="contained">Acheter</Button>
                          
                            </NavLink>
                          </CardContent>
                        </CardActionArea>
                  </Card>
            
   
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
                            <Typography variant="Title" component="h1" gutterBottom>
                            Classe Moyennes
                            </Typography>
                            <hr></hr>
                            <Typography  variant="Title" component="h2" gutterBottom>
                            30 personnes maximum
                            </Typography>
                            <hr></hr>
                            <Typography variant="Title" component="h3" gutterBottom>
                            30 euros / mois
                            </Typography>
                            <NavLink to="/inscription/professeur" >
                            <Button color="secondary" variant="contained">Acheter</Button>
                          
                            </NavLink>
                          </CardContent>
                        </CardActionArea>
                  </Card>
    
    
                <Card className={scss['card_proffesseur']}  style={styles.card}>
                <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="PROFF"
                            className={styles.media}
                             image={proff3}
                            title="Contemplative Reptile"
                          />
                          <CardContent className={scss['card_register_proffesseur_content']} >
                            <Typography variant="Title" component="h1" gutterBottom>
                            Classe Nombreuse
                            </Typography>
                            <hr></hr>
                            <Typography  variant="Title" component="h2" gutterBottom>
                             Illimité
                            </Typography>
                            <hr></hr>
                            <Typography variant="Title" component="h3" gutterBottom>
                            50 euros / mois
                            </Typography>
                            <NavLink to="/inscription/professeur" >
                            <Button color="secondary" variant="contained">Acheter</Button>
                          
                            </NavLink>
                          </CardContent>
                        </CardActionArea>
                  </Card>
               
    
              </Grid>
            </Grid>
          </Grid>
   
          </div>
  );
};

tarifs.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(tarifs);