import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import { connect } from 'react-redux';
// Array of contacts to show on the left side.
import history from '../../../history';

import ContactsList from './contacts-list/contacts-list.component';
import ContactDetails from './contact-details/contact-details.component';
import NoContacts from './no-contacts/no-contacts.component';

import themeStyles from './contacts.theme.style';
import scss from './contacts.module.scss';

import { setEleveAction, getEleveByProf } from '../../../actions/eleve.actions';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedContact: null
    };
    this.props.getEleveByProf();
  }

  redirecttoclass = () => {
    history.push('/professeur/classes');
  }

  selectContact = contact => () => {
    //this.setState({ selectedContact: contact });
    this.props.setEleveAction(contact);
  }
  
  render() {
    var contactsList = this.props.data.elevesList;
    return (
      <div className={scss['contacts-wrapper']}>

        <ContactsList
          selectedContact={this.props.data.SelectedEleve}
          list={contactsList}
          onSelect={this.selectContact}
          noAdd
        />

        {this.props.data.SelectedEleve ?
          <ContactDetails
            selectedContact={this.props.data.SelectedEleve} /> :

<Grid className={scss['grid_no_class']} container direction="column" justify="center" alignContent="center">
              <img className={scss['grid_no_class_img']} src="/assets/images/student.svg"/>
              <p className={scss['text_no_class']}>
              Selectionnez un eleve pour commencer ou allez <a onClick={this.redirecttoclass}>ici</a> pour en creer un 
              </p>
              </Grid>


            }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: {
      classList:           state.classData.classes,  
      SelectedEleve:       state.eleveData.SelectedEleve,
      elevesList   :       state.eleveData.eleves
    }
  };
}
Contacts.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, { setEleveAction, getEleveByProf }))(Contacts);
