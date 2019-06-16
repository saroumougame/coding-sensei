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
import { getClass, setClasseAction }      from '../../../actions/classes.actions';
import { setEleveAction } from '../../../actions/eleve.actions';

class ListeClassesProff extends React.Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { selectedContact: null };
    this.props.getClass();
  }

  selectContact = contact => () => {
    console.log({contact:contact});
    this.props.setEleveAction(null);
    this.props.setClasseAction(contact);
    this.setState({ selectedContact: contact });
  }

  render() {
    var contactsList = this.props.data.classList;
    var currentClasse = this.props.data.currentClasse;
    return (
      <div className={scss['contacts-wrapper']}>

        <ClassesList
          selectedContact={currentClasse}
          list={contactsList}
          onSelect={this.selectContact}
        />

        {currentClasse ?
          <ContactDetails
            selectedContact={currentClasse}  onSelect={this.selectContact} /> : <NoContacts />}

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      classList:           state.classData.classes, 
      currentClasse:       state.classData.currentClasse, 
    }
  };
}

ListeClassesProff.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {getClass, setEleveAction, setClasseAction}))(ListeClassesProff);

