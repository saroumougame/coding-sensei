import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
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
import { connect } from 'react-redux';
import themeStyles from './contacts-list.theme.style';
import scss from './contacts-list.module.scss';
import CreateEleveModal from '../../../eleves/create/create-eleve-modal.component';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialContacts: props.list,
      contacts: [],
      updatedList: false,
    }
  }
  // Handles the filtering of contacts based on the input of search field.
  onChangeHandler(e){
    var updatedList = this.state.initialContacts;
    updatedList = updatedList.filter((item) =>
      (item.name + ' ' + item.surname)
        .toLowerCase()
        .search(e.target.value.toLowerCase()) !== -1
    );

    this.setState({
      contacts: updatedList
    })
  }

  componentWillMount() {
    this.setState({contacts: this.state.initialContacts});

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
          primary={contact['email']}
          secondary={contact['lastName']}
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
          <Person />
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

  createSearchTextField = () => {
    const {
      classes
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
      </div>
    );
  }


  getCustomClassList() {

    if(this.state.updatedList === true){

      return this.props.data.classUpdatedList;
    }
    return this.props.data.elevesList;
  }

  render () {
    const {
      classes,
      width,
      noAdd
    } = this.props;

    return (
      <div className={classNames(classes.list, 'portal-hide-scrollbars', 'list-white')}>
      
        {isWidthUp('sm', width) ? this.createSearchTextField() : ''}
        <List component="nav" className={classes.listWrapper}>
          {this.getCustomClassList().map((contact) => {
            return isWidthUp('sm', width) ?
              this.createDesktopListItem(contact) :
              this.createMobileListItem(contact);
          })}
          {noAdd?<span></span>:<CreateEleveModal />}
        
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
      elevesList   :       state.eleveData.eleves
    }
  };
}

ContactsList.defaultProps = {
  selectedContact: null
};

ContactsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps))(ContactsList);
