import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import Sidenav from '../components/sidenav/sidenav.component';
import MenuSidenav from '../components/menu-sidenav/menu-sidenav.component';
import Snackbar from '@material-ui/core/Snackbar';
import { login_snack, login_snack_close } from '../../actions/auth.actions';

// Actions
import { toggleSidenav, setSidenavOpen, toggleSidenavVariant } from '../../actions/layout.actions';

import scss from './layout-classic.module.scss';
import styles from './layout-classic.style';

class ClassicLayout extends React.Component {
  // Set the initial layout state when the layout is initialised
  constructor(props) {
    super(props);
    const variant = isWidthDown('sm', props.width) ? 'temporary' : 'persistent';
    props.toggleSidenavVariant(variant);
    props.setSidenavOpen(variant === 'persistent');
    this.state = {
      login_snack: false
    }
  }

  // Update the layout state when a going from mobile to desktop and vice versa
  componentWillReceiveProps(nextProps) {
    if ((isWidthDown('sm', this.props.width) && isWidthUp('md', nextProps.width))) {
      this.props.toggleSidenavVariant('persistent');
      this.props.setSidenavOpen(true);
    } else if ((isWidthDown('sm', nextProps.width) && isWidthUp('md', this.props.width))) {
      this.props.toggleSidenavVariant('temporary');
      this.props.setSidenavOpen(false);
    }
    this.setState({
        login_snack: nextProps.layout.login_snack,
        login_message: nextProps.layout.login_message 
      });
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
        <Sidenav >
          <MenuSidenav/>
        </Sidenav>
        <main className={scss['layout-classic-main']}>
{/*
          <AppBar color="default" position="static" className={scss['layout-classic-appBar']}>
            <ContentToolbar />
          </AppBar>
*/}
          <div className={scss['layout-classic-content-wrapper']}>
            <div className={scss['layout-classic-content']}>
              {children}
            </div>
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

ClassicLayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  toggleSidenavVariant: PropTypes.func.isRequired,
  setSidenavOpen: PropTypes.func.isRequired,

};

export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    toggleSidenav,
    toggleSidenavVariant,
    setSidenavOpen,
    login_snack,
    login_snack_close
  })
)(ClassicLayout);
