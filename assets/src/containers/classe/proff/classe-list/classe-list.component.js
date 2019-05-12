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
import Person from '@material-ui/icons/Person';
import location_city from '@material-ui/icons/LocationCity';
import Group from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import themeStyles from './classe-list.theme.style';
import scss from './classe-list.module.scss';
import {UpdateClass}      from '../../../../actions/classes.actions';


// migration de la liste de contact du local vers le state redux. 
class ClassesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      initialContacts: this.props.data.classList,
      contacts: [],
      updatedList: false,
      classeToCreate: 999
    }
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
    if(e.target.value != ""){
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

    return (
      <ListItem
        title={contact.name}
        key={contact.phone}
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
          secondary={'2019'}
          classes={{
            primary: contact === selectedContact ? classes['portal-contacts-list__item__text--active'] : '',
            secondary: classNames(
              scss['portal-contacts-list__item__text'],
              contact === selectedContact ? classes['portal-contacts-list__item__text--active'] : ''
            )
          }}
        />
        <ListItemIcon
          className={classNames(
            contact === selectedContact ? classes.portalContactsListItemIconActive : '',
            classes.portalContactsListItemIcon)
          }
        >
          <Group />
        </ListItemIcon>
      </ListItem>
    );
  };

  createMobileListItem = (contact) => {
    const {
      classes,
      selectedContact,
      onSelect
    } = this.props;

    return (
      <ListItem
        title={contact.name}
        key={contact.phone}
        className={classNames(
          scss['portal-contacts-list__item'],
          contact === selectedContact ? classes['portal-contacts-list__item--active'] : ''
        )}
        onClick={onSelect(contact)}
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
      onSelect
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
      {/*
      */}
        <Button variant="contained" className={classes.button} onClick={onSelect(null)}>
          Ajouter une classe
        </Button>
        </div>
       
      </div>
    );
  }

  getCustomClassList() {
    if(this.state.updatedList == true){
      return this.props.data.classUpdatedList;
    }
    return this.props.data.classList;
  }

  render () {
    const {
      classes,
      width,
    } = this.props;
    return (
      <div className={classNames(classes.list, 'portal-hide-scrollbars')}>
        {isWidthUp('sm', width) ? this.createSearchTextField() : ''}
        <List component="nav" className={classes.listWrapper}>
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

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }), connect(mapStateToProps, {UpdateClass}) )(ClassesList);
