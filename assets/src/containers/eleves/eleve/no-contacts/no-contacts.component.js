import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import UserTasksWidget from '../user-tasks-widget/user-tasks-widget.component';


const NoContacts = (props) => {
  const { classes } = props;

  return (
    <div className={classNames(scss['portal-contacts-no-contacts'], classes['portal-contacts-no-contacts'])}>
     		            <Typography variant="h5"  gutterBottom>
                           Mon cour - Liste des exerces
                        </Typography>

                        <UserTasksWidget />
     
    </div>
  );
};

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(NoContacts);
