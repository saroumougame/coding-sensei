import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { connect } from 'react-redux';
// Array of contacts to show on the left side.
import contactsList from '../../../assets/data/apps/contacts/contacts.json';

import ContactsList from './contacts-list/contacts-list.component';
import ContactDetails from './contact-details/contact-details.component';
import NoContacts from './no-contacts/no-contacts.component';

import themeStyles from './contacts.theme.style';
import scss from './contacts.module.scss';

import { setEleveAction, getEleve } from '../../../actions/eleve.actions';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedContact: null
    };
    this.props.getEleve();
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
        />

        {this.props.data.SelectedEleve ?
          <ContactDetails
            selectedContact={this.props.data.SelectedEleve} /> : <NoContacts />}
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
  connect(mapStateToProps, { setEleveAction, getEleve }))(Contacts);
