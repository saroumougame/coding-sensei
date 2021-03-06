import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import themeStyles from './contact-details.theme.style';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import {FormUpdateClassNom, updateClass, deleteClass}      from '../../../../actions/classes.actions';


import Eleve   from '../../../eleves/eleve/contacts.component';


class ContactDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',

    }
  }

  handleNameUpdate = (e) => {
    this.props.FormUpdateClassNom(e.target.value);
  }

  formSubmit() {
      if(this.props.data.FormDataUpdateClassNom !== ''){
        this.props.onSelect(null);
        this.props.updateClass(this.props.data.FormDataUpdateClassNom, this.props.selectedContact.id);    
      }
      return;
  }

  render(){
  const {
    classes
  } = this.props;

  return (
    <div className={classNames(scss['portal-contact-details'] )}>
      {/*<div
        className={classNames(
          scss['portal-contact-details__header'],

        )}
      >
      <div className={classNames(scss['class-detail-header'])}>
        <Paper className={scss['class-name-paper']} elevation={4}>
          <Typography variant="headline" component="h3">
            {selectedContact.name}
          </Typography>
        </Paper>
        <Paper className={scss['class-name-paper-central']} elevation={4}>
          <Typography variant="headline" component="h3">
            Information
                              </Typography>

               <form  noValidate autoComplete="off">
                  <TextField
                    id="nom"
                    value={this.props.data.FormDataUpdateClassNom}
                    onChange={this.handleNameUpdate}
                    label="Nom de la classe"
                    className={classes.textField}
                    margin="normal"
                  />
                <Button variant="contained" color="primary" className={scss['portal-contacts-detail-update-contact']} onClick={() => {this.formSubmit()}}>
                    Modifier la classe
                  </Button>
                </form>      
</Paper>
                              <Button variant="contained" color="primary" className={scss['portal-contacts-detail-delete-button-contact']} onClick={() => {this.props.deleteClass(selectedContact.id)}}>

                    Supprimer la classe
                </Button>
      </div>


      </div>*/}
      <div
        className={classNames(
          scss['portal-contact-details__content'],
          classes.portalContactDetailsContent
        )}
      >
      <Eleve />
    {/*

<Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={32}>
          
              <Grid  item>
                <Paper className={classNames(scss['portal-contact-paper-grid'] )}>
                Liste des exercices
                </Paper>
              </Grid>
              <Grid  item>
               <Paper className={classNames(scss['portal-contact-paper-grid'] )}>
                Liste des Eleves
              
                </Paper>
              </Grid>
              <Grid  item>
                <Paper className={classNames(scss['portal-contact-paper-grid'] )}>
                  Mes notes
                </Paper>
              </Grid>
              <Grid  item>
                <Paper className={classNames(scss['portal-contact-paper-grid'] )}>
                  Gestion
                </Paper>
              </Grid>         
          </Grid>
        </Grid>
 </Grid>
 */}
      {/*
        <Grid container spacing={0}>

          <Grid item xs={12} sm={6} md={3}>
            <div
              className={classNames(
                scss['portal-contact-details__avatar-container']
              )}
            > 


              <div
                className={classNames(
                  scss['portal-contact-details__avatar'],
                  classes.portalContactDetailsAvatar
                )}
              >
                <img
                  className={classNames(
                    classes.portalContactDetailsAvatarImg
                  )}
                  src={`${process.env.PUBLIC_URL}/${selectedContact.photo}`}
                  alt={`${process.env.PUBLIC_URL}/${selectedContact.name}`}
                />
              </div>
              <div
                className={classNames(
                  scss['portal-contact-details__extra'],
                  classes.portalContactDetailsExtra
                )}
              >
                <p>{selectedContact.region}</p>
                <p>{selectedContact.phone}</p>
                <p>{selectedContact.email}</p>
                <br />

  
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <div
              className={classNames(
                scss['portal-contact-details__main']
              )}
            >

              <Typography component="div" dangerouslySetInnerHTML={{ __html: selectedContact.bio }} />
            </div>
          </Grid>
        </Grid>
            */}
      </div>
    </div>
  );
}
};



function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
    }
  };
}

ContactDetails.defaultProps = {
  selectedContact: null
};

ContactDetails.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({})
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {FormUpdateClassNom, updateClass, deleteClass}))(ContactDetails);

