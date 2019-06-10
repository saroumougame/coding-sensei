import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

import themeStyles from './no-contacts.theme.style';
import scss from './no-contacts.module.scss';
import UserTasksWidget from '../user-tasks-widget/user-tasks-widget.component';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const NoContacts = (props) => {
  const { classes } = props;

  return (
    <div className={classNames(scss['portal-contacts-no-contacts'], classes['portal-contacts-no-contacts'])}>
  {/*
                    <Typography variant="h5"  gutterBottom>
                           Mon cour - Liste des exerces
                        </Typography>

                        <UserTasksWidget />
  */}

   <Paper className={scss['exercice-paper']} elevation={4}>
              <Typography variant="headline" component="h3">
                Mon cour
              </Typography>
          </Paper>
   <Paper className={scss['exercice-paper']} elevation={4}>
              <Typography variant="headline" component="h3">
                Exercices 
              </Typography>
          </Paper>
     
    </div>
  );
};

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(NoContacts);
