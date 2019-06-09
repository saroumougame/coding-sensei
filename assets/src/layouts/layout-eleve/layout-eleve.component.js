import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Sidenav from '../components/sidenav/sidenav.component';
import NotificationSidenav from '../components/notification-sidenav/notification-sidenav.component';
import ContentToolbar from '../components/content-toolbar/content-toolbar.component';
import ContentFooter from '../components/content-footer/content-footer.component';
import MenuSidenav from '../components/menu-sidenav/menu-sidenav.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// Actions
import { toggleSidenav, setSidenavOpen, toggleSidenavVariant } from '../../actions/layout.actions';

import scss from './layout-eleve.module.scss';
import styles from './layout-eleve.style';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import history from '../../history';


class EleveLayout extends React.Component {
  // Set the initial layout state when the layout is initialised
  constructor(props) {
    super(props);
    const variant = isWidthDown('sm', props.width) ? 'temporary' : 'persistent';
    props.toggleSidenavVariant(variant);
    props.setSidenavOpen(variant === 'persistent');

       this.state = {
        valueBottom: null
       }
  }

  // Update the layout state when a going from mobile to desktop and vice versa
  componentWillReceiveProps(nextProps) {
   
  }

  render() {
    const { children, classes } = this.props;


    return (
      <div className={classNames(scss['layout-classic-wrapper'], classes.wrapper)}>
        <main className={scss['layout-classic-main']}>
            <div className={scss['layout-eleve-coontainer']}>

               <BottomNavigation
                value={this.state.valueBottom}
                onChange={(event, newValue) => {

                  if(newValue == 0) {
                    history.push('/classes');
                  }else if(newValue == 1){
                    history.push('/favoris');
                  }else if(newValue == 2){
                    history.push('/home');
                  }

                  this.setState({ valueBottom : newValue });
                }}
                showLabels
                className={scss['layout-eleve-Menu']}
              >
                <BottomNavigationAction label="Mes classes"       icon={<RestoreIcon className={scss['layout-eleve-Menu-icon']} />} />
                <BottomNavigationAction label="Favoris"         icon={<FavoriteIcon  className={scss['layout-eleve-Menu-icon']}/>} />
                <BottomNavigationAction label="Profil & settings" icon={<LocationOnIcon className={scss['layout-eleve-Menu-icon']} />} />
              </BottomNavigation>
               {children}
            </div>

      
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}

EleveLayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  toggleSidenavVariant: PropTypes.func.isRequired,
  setSidenavOpen: PropTypes.func.isRequired
};

export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    toggleSidenav,
    toggleSidenavVariant,
    setSidenavOpen
  })
)(EleveLayout);


/*

<CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
               <Toolbar>
              <Typography variant="h6" noWrap>
                Clipped drawer
              </Typography>
              </Toolbar>
            </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
         anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>*/