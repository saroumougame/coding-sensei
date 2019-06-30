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


  parseDate(uneDate) {
    if(uneDate != null){
      return uneDate.substring(0, 10);
    }
   }


  render(){
  const {
    classes,
    selectedContact
  } = this.props;

  return (
    <div className={classNames(scss['portal-contact-details'])}>
      <div className={scss['exercice-title']}>
        <Paper className={scss['paper-description']}>
           <Typography component="h3">Titre: </Typography>
           {selectedContact.name}
        </Paper>
        <Paper className={scss['paper-description']}>
          <Typography component="h3">Description: </Typography>
          {selectedContact.description}
        </Paper>      
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée en entrée: </Typography>
            {selectedContact.inData}
        </Paper> 
        <Paper className={scss['paper-description']}>
            <Typography component="h3">Donnée attendu en sortie: </Typography>
            {selectedContact.outData}
        </Paper> 
         <Paper className={scss['paper-description']}>
            <Typography component="h3">Date limite: </Typography>
            {this.parseDate(selectedContact.dateEnd)}
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

