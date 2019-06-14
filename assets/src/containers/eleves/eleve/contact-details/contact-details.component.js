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

const ContactDetails = (props) => {
  const {
    selectedContact,
    classes
  } = props;

  return (
    <div className={classNames(scss['portal-contact-details'] )}>
      <div
        className={classNames(
          scss['portal-contact-details__header'],
          classes.portalContactDetailsHeader
        )}
      >
      test
      </div>
      <div
        className={classNames(
          scss['portal-contact-details__content'],
          classes.portalContactDetailsContent
        )}
      >
      </div>
    </div>
  );
};

ContactDetails.defaultProps = {
  selectedContact: null
};

ContactDetails.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({})
};
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(ContactDetails);
