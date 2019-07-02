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


import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';


 import logoImage from '../../assets/images/portal-logo.png';



const Landing = (props) => {

  const { classes } = props;

  return (

    <Grid
    container
    direction="row"
    spacing={0}
    justify="center"
    alignItems="center"
    className={classes.background}
  >

 
    <Grid item sm={10} xs={12}  className={scss.panel}>
   
      <Grid container  justify="space-around"  spacing={0}>
        <Grid
          item
          sm={5}
          xs={12}
        >
          <Card className={classNames(scss.card, classes['primary-card'])}>
            <CardContent className={scss['signup-content']}>
              <img src={logoImage} className={scss['signup-logo']} alt="logo" />
              <Typography variant="headline" component="h2" gutterBottom>
              AIDER VOS ELEVES A DEVENIR DEVOLOPPEUR PHP
              </Typography>
              <Typography className={scss['landing-description-p']}  component="h3">
                Vous voulez aider vos élèves à faire des exercices ?<br/>
                Mare de faire des examens sur papier ?<br/>
                Créez vos exercices de manière simple.<br/>
                Permettez à vos élèves de s'améliorer.<br/>
             </Typography> 
            </CardContent>
            <NavLink to="/inscription">
            <CardActions>
              <Button fullWidth color="primary" variant="raised">Crée un compte</Button>
            </CardActions>
            </NavLink>
          </Card>
          

        </Grid>
       <Grid
          item
          sm={5}
          xs={12}
        >
           <Card className={classNames(scss.card, classes['primary-card'])}>
              <Typography variant="headline" component="h2" gutterBottom>
              CODING SENSEI C'EST AUSSI :
              </Typography>
              <Grid container justify="space-around">
                <div className={classNames( scss['photo'], scss['photo1'])}></div>  
                <div className={classNames( scss['photo'], scss['photo2'])}></div>  
                <div className={classNames( scss['photo'], scss['photo3'])}></div>  
                <div className={classNames( scss['photo'], scss['photo4'])}></div>  
                <div className={classNames( scss['photo'], scss['photo5'])}></div>  
                <div className={classNames( scss['photo'], scss['photo6'])}></div>  
                <div className={classNames( scss['photo'], scss['photo7'])}></div>
                <div className={classNames( scss['photo'], scss['photo8'])}></div>  
                <div className={classNames( scss['photo'], scss['photo9'])}></div>  
                <div className={classNames( scss['photo'], scss['photo10'])}></div> 
                <div className={classNames( scss['photo'], scss['photo11'])}></div>  
                <div className={classNames( scss['photo'], scss['photo12'])}></div>  
              </Grid>
          </Card>
          

        </Grid>
        
      </Grid>
    </Grid>
  </Grid>
    // <div className={[ scss['portal-pages__header']]}>
    //   <section className={scss['portal-pages__header']}> 
    //     <div className={scss['portal-pages__container']}> 

    //         <div className={scss['landing-description']}>

    
            /* <Typography className={scss['landing-description-titre']} variant="Headline" component="h1">
            AIDER VOS ELEVES A DEVENIR DEVOLOPPEUR
             </Typography>
             <Typography className={scss['landing-description-p']} variant="Title" component="h3">
                Vous voulez aider vos eleves a faire des exercies<br />
          
                Mare de faire des exams sur papier<br />
          
                Cree vos exercices de maniere simple.<br />
            
                Permettez a vos eleves de vous ameliorer<br />
             </Typography> */


// </div>
       

         /* <Card className={scss['front-paper']}>
           <CardContent>
             <Typography variant="h5" component="h2">
               Plaforme pour aider les eleves a code en PHP
             </Typography>
             <Typography component="p">
               Racourci de connexion comme une école.
             </Typography>
           </CardContent>
   

         </Card> */

   

    
    //    </div>
    //   </section>
    // </div>
  );
};

Landing.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Landing);