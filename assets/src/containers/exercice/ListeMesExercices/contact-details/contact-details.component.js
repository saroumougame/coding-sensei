import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import themeStyles from './contact-details.theme.style';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {FormUpdateClassNom, updateClass, deleteClass}      from '../../../../actions/classes.actions';


import Eleve   from '../../../eleves/eleve/contacts.component';

class ContactDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',
    }
  }

  render(){
  const {
    classes,
    selectedContact
  } = this.props;
 
  console.log(selectedContact);

  return (
    <div className={classNames(scss['portal-contact-details'])}>
      <div className={scss['exercice-title']}>
        <Paper className={scss['paper-description']}>
           <Typography component="h3">Titre: {selectedContact.name}</Typography>
        </Paper>
        <Paper className={scss['paper-description']}>
          <Typography component="h3">Description: {selectedContact.description}</Typography>
        </Paper>      
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée en entrée: {selectedContact.inData}</Typography>
        </Paper> 
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée attendu en sortie: {selectedContact.outData}</Typography>
        </Paper> 
         <Paper className={scss['paper-description']}>
            <Typography component="h3">Date limite: {selectedContact.dateEnd}</Typography>
        </Paper>        
        
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

