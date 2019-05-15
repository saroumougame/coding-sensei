import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {NavLink, withRouter, Redirect} from 'react-router-dom';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
//import themeStyles from './login.theme.style';
import scss from './account.module.scss';

import styles from './account.style';

import LineChartWidget from '../../../components/line-chart-widget/line-chart-widget.component';
import ActiveUsersWidget from '../../../components/active-users-widget/active-users-widget.component';
import DailySalesWidget from '../../../components/daily-sales-widget/daily-sales-widget.component';
import TableWidget from '../../../components/table-widget/table-widget.component';
import RegionSalesWidget from '../../../components/region-sales-widget/region-sales-widget.component';

class AccountProff extends React.Component {

  constructor() {
    super();

  }

  

  render() {
    const { classes } = styles;
      return (
        
    <div className={styles.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>

          <Grid key={1} item xs={12} sm={6} md={4} className={styles.portalWidget}>
            <Paper className={styles.portalWidgetContent}>
          {/*
              <LineChartWidget title="Recent Sales" />
          */}
              <Typography variant="h5" gutterBottom>
                   Information proff 
                </Typography>
            </Paper>
          </Grid>
{/*
          <Grid key={2} item xs={12} sm={6} md={4} className={styles.portalWidget}>
            <Paper className={styles.portalWidgetContent}>
              <LineChartWidget title="Nombre d'éleves" />
            </Paper>
          </Grid>

          <Grid key={3} item xs={12} sm={12} md={4} className={styles.portalWidget}>
            <Paper className={styles.portalWidgetContent}>
              <ActiveUsersWidget />
            </Paper>
          </Grid>

          <Grid key={6} item xs={12} sm={12} md={4} className={styles.portalWidget}>
            <Paper className={styles.portalWidgetContent}>
              <RegionSalesWidget />
            </Paper>
          </Grid>
                  <DailySalesWidget />
                  <TableWidget />
*/}
          <Grid item xs={12} sm={12} md={8}>
            <Grid container justify="center" spacing={16}>
              <Grid key={4} item xs={12} className={styles.portalWidget}>
                <Paper className={styles.portalWidgetContent}>
                <Typography variant="h5" gutterBottom>
                   Information Generales
                </Typography>
                </Paper>
              </Grid>

              <Grid key={5} item xs={12} className={styles.portalWidget}>
                <Paper className={styles.portalWidgetContent}>
                </Paper>
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </div>

      );
  }
}


function mapStateToProps(state) {
  return {
    data: {
      auth_login_email:           state.authData.auth_login_email,
      auth_login_password:        state.authData.auth_login_password,
    }
  };
}

/*
LoginForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,

};
*/
export default compose(
  withWidth(),
  connect(mapStateToProps, { }),
)(AccountProff);
