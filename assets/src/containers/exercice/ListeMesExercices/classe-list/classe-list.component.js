import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Group from '@material-ui/icons/Group';
import Button from '@material-ui/core/Button';
import themeStyles from './classe-list.theme.style';
import scss from './classe-list.module.scss';
import {UpdateClass}      from '../../../../actions/classes.actions';
import Modal2 from '../../../../components/list.modal.component';
import {addClass}      from '../../../../actions/classes.actions';


// migration de la liste de contact du local vers le state redux. 
class ClassesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      initialContacts: this.props.data.classList,
      contacts: [],
      updatedList: false,
      classeToCreate: 999,
      nom: ""
    }
  }
  getAddClassForm() {
    const { classes } = this.props;
    return (
          <form  noValidate autoComplete="off">
            <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Nom de la classe"
              className={classes.textField}
              margin="normal"
            />
            <Button variant="contained" color="primary" className={scss['portal-contacts-no-button-form']} onClick={() => {this.formSubmit()}}>
              Crée la classe
            </Button>
          </form>
      );
  }
  // Handles the filtering of contacts based on the input of search field.
  onChangeHandler(e){
    var updatedList = this.props.data.classList;
    updatedList = updatedList.filter((item) =>
      (item.name)
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1
    );

    this.props.UpdateClass(updatedList);
    if(e.target.value !== ""){
      this.setState({updatedList: true});
    }else{
       this.setState({updatedList: false});
    }
  }

  componentWillMount() {
    this.setState({contacts: this.props.data.classList})
  }

    
  createDesktopListItem = (contact) => {
    const {
      classes,
      selectedContact,
      onSelect
    } = this.props;

     if(contact.dateEnd != null) {
      var dateFinExo = 'Date de début : '+contact.dateEnd.substring(0, 10);
     }

     console.log(contact.archived);

    return (
      <ListItem
        title={contact.name}
        key={contact.name}
        className={classNames(
          scss['portal-contacts-list__item'],
          contact === selectedContact ? classes['portal-contacts-list__item--active'] : ''
        )}
        onClick={onSelect(contact)}
        divider
        button
      >

        {/*
            <Avatar alt={contact.name} src={`${process.env.PUBLIC_URL}/${contact.photo}`} />
        */}
        <ListItemText
          primary={contact.name}
          secondary={dateFinExo}
          classes={{
            primary: contact === selectedContact ? classes['portal-contacts-list__item__text--active'] : '',
            secondary: classNames(
              scss['portal-contacts-list__item__text'],
              contact === selectedContact ? classes['portal-contacts-list__item__text--active'] : ''
            )
          }}
        />

      </ListItem>
    );
  };
  formSubmit () {
    this.props.addClass(this.state.nom);
  }
  createMobileListItem = (contact) => {
    const {
      classes,
      selectedContact
    } = this.props;

    return (
      <ListItem
        title={contact.name}
        key={contact.phone}
        className={classNames(
          scss['portal-contacts-list__item'],
          contact === selectedContact ? classes['portal-contacts-list__item--active'] : ''
        )}
        onClick={this.onClickClassElement(contact).bind(this)}
        divider
        button
      >
        <Avatar alt={contact.name} src={`${process.env.PUBLIC_URL}/${contact.photo}`} />
      </ListItem>
    );
  }

  AddClass () {
    const {
      onSelect
    } = this.props;

    onSelect(null)
  }

  createSearchTextField = () => {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.searchContainer}>
        <TextField
          label="Search"
          id="search"
          type="search"
          fullWidth
          onChange={this.onChangeHandler.bind(this)}
          className={scss['portal-search-field']}
          InputProps={{
            endAdornment: <InputAdornment position="end"><Search /></InputAdornment>,
          }}
        />


        <div>
        </div>
       
      </div>
    );
  }

  getCustomClassList() {

    return this.props.data.liste_exercice_complete;
/*
    if(this.state.updatedList === true){
      if (this.props.data.classUpdatedList  !== undefined){
        return this.props.data.classUpdatedList;
      }else{
        return [];
      }
    }
    if (this.props.data.classList  !== undefined){

        return this.props.data.classList;
    }else{

      return [];
    }
*/
  }

  render () {
    const {
      classes,
      width,
    } = this.props;
    return (
      <div className={classNames(classes.list, 'portal-hide-scrollbars', 'list-white', 'z-up')}>
        {isWidthUp('sm', width) ? this.createSearchTextField() : ''}
          <List component="nav" className={classNames(classes.listWrapper)}>
              {this.getCustomClassList().map((contact) => {
                  return isWidthUp('sm', width) ?
                      this.createDesktopListItem(contact) :
                      this.createMobileListItem(contact);
              })}
          </List>
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    data: {
      classList:           state.classData.classes,  
      classUpdatedList:    state.classData.UpdatedClasses,
      liste_exercice_complete: state.exerciceData.liste_exercice_complete

    }
  };
}


ClassesList.defaultProps = {
  selectedContact: null
};

ClassesList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
 connect(mapStateToProps, {UpdateClass, addClass}) )(ClassesList);
