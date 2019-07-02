import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
// Actions
import { toggleSidenav, setSidenavOpen, toggleSidenavVariant } from '../../actions/layout.actions';
import { deconnexionAction } from '../../actions/user.actions';

import scss from './layout-eleve.module.scss';
import styles from './layout-eleve.style';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import Grid from '@material-ui/core/Grid';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Https from '@material-ui/icons/Https';
import Snackbar from '@material-ui/core/Snackbar';
import { login_snack, login_snack_close } from '../../actions/auth.actions';

import history from '../../history';


class EleveLayout extends React.Component {
  // Set the initial layout state when the layout is initialised
  constructor(props) {
    super(props);
    const variant = isWidthDown('sm', props.width) ? 'temporary' : 'persistent';
    props.toggleSidenavVariant(variant);
    props.setSidenavOpen(variant === 'persistent');

       this.state = {
        valueBottom: null,
        login_snack: false
       }
  }

  // Update the layout state when a going from mobile to desktop and vice versa
  componentWillReceiveProps(nextProps) {
      this.setState({
        login_snack: nextProps.layout.login_snack,
        login_message: nextProps.layout.login_message 
      })
  }

  render() {
    const { children, classes } = this.props;

    var vertical = 'top';
    var horizontal = 'right';
    
    return (
      <div className={classNames(scss['layout-classic-wrapper'], classes.wrapper)}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={ this.state.login_snack}
          onClose={this.props.login_snack_close}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.login_message}</span>}
        />
         <main className={scss['layout-classic-main']}>
            <div className={scss['layout-eleve-coontainer']}>
              <Grid 
              container
              direction="row"
              justify="space-between"
              className={scss['layout-eleve-coontainer-grid']}
              >
              <div className={scss['logo-title']} ><h1>Coding Sensei</h1></div>
               <BottomNavigation
                value={this.state.valueBottom}
                onChange={(event, newValue) => {

                  if(newValue === 0) {
                    history.push('/classes');
                  }else if(newValue === 1){
                    history.push('/home');
                  }else if(newValue === 2){
                    this.props.deconnexionAction();
                  }

                  this.setState({ valueBottom : newValue });
                }}
                showLabels
                className={scss['layout-eleve-Menu']}
              >
                <BottomNavigationAction className={scss['layout-eleve-Menu-elem']} label="Mes exercices"       icon={<RestoreIcon className={scss['layout-eleve-Menu-icon']} />} />
              {/*
                <BottomNavigationAction label="Favoris"         icon={<FavoriteIcon  className={scss['layout-eleve-Menu-icon']}/>} />
              */}
                <BottomNavigationAction className={scss['layout-eleve-Menu-elem']} label="Profil & settings" icon={<LocationOnIcon className={scss['layout-eleve-Menu-icon']} />} />
                <BottomNavigationAction className={scss['layout-eleve-Menu-right']} label="Déconnexion" icon={<Https className={scss['layout-eleve-Menu-icon']} />} />

              </BottomNavigation>
              </Grid>
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
      sidenavOpen: state.layout.sidenavOpen,
      login_snack:                state.authData.login_snack,
      login_message:              state.authData.login_message,
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
    setSidenavOpen,
    deconnexionAction,
    login_snack,
    login_snack_close
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