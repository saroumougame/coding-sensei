import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import compose from 'recompose/compose';
import themeStyles from './contact-details.theme.style';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import FontAwesome from 'react-fontawesome';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';

class ContactDetails extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        eleve: null,
        composantClicker: null,
      }
    }

    getListeExoOuExo() {

      if(this.state.composantClicker == null){

        return (
          <div onClick={() => { this.setState({composantClicker: 36})}}>
          exo
          </div>
          );
      }
      else {
        return (
            <div onClick={() => { this.setState({composantClicker: null})}}>
              exercice {this.state.composantClicker};
            </div>

          );
      }
    }

  render() {
    console.log(this.props.data.exerciceTexte);
          return (
            <div className={classNames(scss['portal-contact-details'] )}>
              <div
          
              >
              test

              {this.getListeExoOuExo()}


              </div>
            </div>
          );
};

};


function mapStateToProps(state) {
  return {
    data: {
      exerciceTexte:                    state.exerciceData.liste_exercice,
    }
  };
}

ContactDetails.defaultProps = {
  selectedContact: null
};

ContactDetails.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({})
};

export default compose(withWidth(), withStyles( { withTheme: true }),
  connect(mapStateToProps))(ContactDetails);