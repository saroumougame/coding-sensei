import React          from 'react';
import PropTypes      from 'prop-types';
import compose        from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth      from '@material-ui/core/withWidth';
import { connect } from 'react-redux';
// Array of contacts to show on the left side.
import contactsListJson from '../../../assets/data/apps/contacts/contacts.json';
import ClassesList    from './classe-list/classe-list.component';
import ContactsList   from './contacts-list/contacts-list.component';
import ContactDetails from './contact-details/contact-details.component';
import NoContacts     from './no-contacts/no-contacts.component';
import themeStyles    from './contacts.theme.style';
import scss           from './contacts.module.scss';
import {getClass}      from '../../../actions/classes.actions';


class ListeClassesProff extends React.Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { selectedContact: null };
    this.props.getClass();
  }

  selectContact = contact => () => {
    this.setState({ selectedContact: contact });
  }

  render() {
    var contactsList = this.props.data.classList;

    return (
      <div className={scss['contacts-wrapper']}>

        <ClassesList
          selectedContact={this.state.selectedContact}
          list={contactsList}
          onSelect={this.selectContact}
        />

        {this.state.selectedContact ?
          <ContactDetails
            selectedContact={this.state.selectedContact} /> : <NoContacts />}

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      classList:           state.classData.classes,  
    }
  };
}

ListeClassesProff.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {getClass}))(ListeClassesProff);

