import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import scss from './landing.module.scss';
import styles from './landing.style';

const Landing = (props) => {

  const { classes } = props;

  return (
    <div className={[ scss['portal-pages__header']]}>
     <section className={scss['portal-pages__header']}>
       <div className={scss['portal-pages__container']}>
       {/*
         <Card className={scss['front-paper']}>
           <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               Test de connexions
             </Typography>
             <Typography variant="h5" component="h2">
               Ecole
             </Typography>
             <Typography component="p">
               Racourci de connexion comme une école.
             </Typography>
           </CardContent>
           <CardActions>
           <NavLink to="/ecole">
             <Button variant="contained" size="medium">Se connecter comme une école</Button>
           </NavLink>
           </CardActions>
         </Card>

         <Card className={scss['front-paper']}>
           <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               Test de connexions
             </Typography>
             <Typography variant="h5" component="h2">
               professeur
             </Typography>
             <Typography component="p">
               Racourci de connexion comme un professeur.
             </Typography>
           </CardContent>
           <CardActions>
             <NavLink to="/ecole">
               <Button variant="contained" size="medium">Se connecter comme un professeur</Button>
             </NavLink>
           </CardActions>
         </Card>


         <Card className={scss['front-paper']}>
           <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               Test de connexions
             </Typography>
             <Typography variant="h5" component="h2">
               Eleve
             </Typography>
             <Typography component="p">
               Racourci de connexion comme un eleve.
             </Typography>
           </CardContent>
           <CardActions>
             <NavLink to="/ecole">
               <Button variant="contained" size="medium">Se connecter comme un eleve</Button>
             </NavLink>
           </CardActions>
         </Card>
       */}
       </div>
     </section>
    </div>
  );
};

Landing.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Landing);
//Site en construction
