import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
//import themeStyles from './login.theme.style';
import scss from './editprof.module.scss';
import styles from './editprof.style';
import { getUserByToken } from '../../../actions/auth.actions.js';
import { getClassStats } from '../../../actions/classes.actions.js';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


import history from '../../../history';
import { Typography, Input } from '@material-ui/core';

import {API_URL} from '../../../api';

class EditProf extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data.user['@id'],
      nom: this.props.data.user.firstName,
      prenom: this.props.data.user.lastName,
      email: this.props.data.user.email,
  
    }
  }
  
  formSubmit() {
    let form = {
      'firstName':  this.state.nom,
      'lastName':   this.state.prenom
     // 'email':      this.props.data.user.email,

    }
  
    var formBody = JSON.stringify(form);

    fetch(API_URL + this.state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization'  : 'Bearer ' + localStorage.getItem('token')
      },
      body: formBody
    })
    .then(response => response.json())
    .then(json => {
       
    })
    // .catch((e) => dispatch());
 
  

  }

  
  retour(){
    history.push('/account');
}

  render() {
    console.log(this.props.data.user['@id']);
      return (
        
    <div className={styles.portalDashboardPageWrapper}>
      <section className="portal-pages__header">
      <div  className={scss['header']}>
      </div>
    </section>
    <Grid container spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Paper className="portal-pages__content-inner">
       <Typography variant="Title" component="h1" >Editer mon Profile :</Typography>
       <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Prénom"
              // className={classes.textField}
              margin="normal"
            /><br></br>
       <TextField
              id="nom"
              value={this.state.prenom}
              onChange={(e) => {this.setState({prenom: e.target.value});}}
              label="Nom"
              // className={classes.textField}
              margin="normal"
            />
            <br></br>
       <TextField
              id="nom"
              value={this.state.email}
              onChange={(e) => {this.setState({email: e.target.value});}}
              label="Nom et prenom"
              // className={classes.textField}
              margin="normal"
            />
            <br></br>
            <Button color="primary" className={scss['button']} onClick={() => {this.retour()}}>
            Retour
           </Button>
            <Button variant="contained" color="primary"  onClick={() => {this.formSubmit()}}>
  Modifier
</Button>
        </Paper>

      </Grid>
      <Grid item xs={1} />
    </Grid>


    </div>




      );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      user:  state.authData.user,
      stats: state.classData.stats,
    }
  };
}



/*
LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,

};
*/
export default compose(
  withWidth(),
  connect(mapStateToProps, { getUserByToken, getClassStats}),
)(EditProf);


