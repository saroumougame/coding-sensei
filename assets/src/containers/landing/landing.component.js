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

            <div className={scss['landing-description']}>
            <Typography className={scss['landing-description-titre']} variant="Headline" component="h1">
            AIDER VOS ELEVES A DEVENIR DEVOLOPPEUR
             </Typography>
             <Typography className={scss['landing-description-p']} variant="Title" component="h3">
                Vous voulez aider vos eleves a faire des exercies<br />
          
                Mare de faire des exams sur papier<br />
          
                Cree vos exercices de maniere simple.<br />
            
                Permettez a vos eleves de vous ameliorer<br />
             </Typography>


</div>
       

         {/* <Card className={scss['front-paper']}>
           <CardContent>
             <Typography variant="h5" component="h2">
               Plaforme pour aider les eleves a code en PHP
             </Typography>
             <Typography component="p">
               Racourci de connexion comme une école.
             </Typography>
           </CardContent>
   

         </Card> */}

   

    
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
