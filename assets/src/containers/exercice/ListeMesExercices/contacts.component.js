import React          from 'react';
import PropTypes      from 'prop-types';
import compose        from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import withWidth      from '@material-ui/core/withWidth';
// Array of contacts to show on the left side.
import ClassesList    from './classe-list/classe-list.component';
import ContactDetails from './contact-details/contact-details.component';
import NoContacts     from './no-contacts/no-contacts.component';
import themeStyles    from './contacts.theme.style';
import scss           from './contacts.module.scss';
import { getClass, setClasseAction }                        from '../../../actions/classes.actions';
import { setEleveAction, getEleve }                         from '../../../actions/eleve.actions';
import  { listeExerciceAction, allExerciceProff, getAllExercices }           from '../../../actions/exercice.actions';

class ListeClassesProff extends React.Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { selectedContact: null };
    //this.props.getClass();
    this.props.getAllExercices();
  }

  selectContact = contact => () => {
    
    this.setState({ selectedContact: contact });
  }

  render() {
    var contactsList = this.props.data.liste_exercice_complete;
    var currentClasse = this.state.selectedContact;

    console.log(contactsList);
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
      classList:               state.classData.classes, 
      currentClasse:           state.classData.currentClasse, 
      liste_exercice_complete: state.exerciceData.liste_exercice_complete
    }
  };
}

ListeClassesProff.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {getClass, getAllExercices, allExerciceProff, getEleve, setEleveAction, setClasseAction, listeExerciceAction}))(ListeClassesProff);

