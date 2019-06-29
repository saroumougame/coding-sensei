import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { NavLink, withRouter } from 'react-router-dom';
// Material components
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { toggleSidenav } from '../../../actions/layout.actions';
import { deconnexionAction} from '../../../actions/user.actions';

// Styles
import scss from './sidenav.module.scss';

const Sidenav = (props) => {
  const {
    theme,
    layout
  } = props;

  const sidenavTheme = createMuiTheme(theme.sidenavTheme);
  const dockedClass = layout.sidenavOpen ? scss[`portal-sidenav-${layout.currentLayout}`] : '';

  return (
    <MuiThemeProvider theme={sidenavTheme}>
      <Drawer
        variant={layout.sidenavVariant}
        open={layout.sidenavOpen}
        onClose={props.toggleSidenav}
        classes={{
          docked: dockedClass,
          paper: scss[`yaaa`],
        }}
      >
        {/* top toolbar with logo */}
        <AppBar
          color="default"
          position="relative"
          
        >
          <Toolbar > 
   
            {layout.currentLayout !== 'compact' && layout.currentLayout !== 'funky' &&
             <NavLink to="/professeur/compte">
              <Typography variant="title" color="default"  noWrap>
                Espace pro
              </Typography>
            </NavLink>
            }
          </Toolbar>
        </AppBar>
        {/* main menu */}
        {props.children}
        {/* sidenav footer */}
        <AppBar
          color="default"
          position="relative"
        >
          <Toolbar disableGutters>
            <span className="portal-flex" />
            <IconButton onClick={props.deconnexionAction}>
            {/* <ChevronLeftIcon/> */}
                <Typography variant="h5" color="inherit" noWrap>
                Déconnexion
              </Typography>
           
            </IconButton>
          </Toolbar>
        </AppBar>
      </Drawer>
    </MuiThemeProvider>
  );
};

function mapStateToProps(state) {
  return {
    theme: state.theme,
    layout: {
      currentLayout: state.layout.currentLayout,
      sidenavOpen: state.layout.sidenavOpen,
      sidenavVariant: state.layout.sidenavVariant
    }
  };
}

Sidenav.propTypes = {
  toggleSidenav: PropTypes.func.isRequired,
  layout: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    toggleSidenav, deconnexionAction
  })
)(Sidenav);