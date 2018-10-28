import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


/*
import LineChartWidget from './components/line-chart-widget/line-chart-widget.component';
import ActiveUsersWidget from './components/active-users-widget/active-users-widget.component';
import DailySalesWidget from './components/daily-sales-widget/daily-sales-widget.component';
import TableWidget from './components/table-widget/table-widget.component';
import RegionSalesWidget from './components/region-sales-widget/region-sales-widget.component';
*/
import scss from './landing.module.scss';
import styles from './landing.style';

const Ecommerce = (props) => {
  const { classes } = props;

  return (
    <div className={[ scss['portal-pages__header']]}>
     <section className={scss['portal-pages__header']}>
     <div className={scss['portal-pages__container']}>
	        <svg
	          className={scss['portal-pages__header-icon']}
	          xmlns="http://www.w3.org/2000/svg"
	          x="0"
	          y="0"
	          width="64"
	          height="64"
	          viewBox="0 0 64 64"
	        >
	          <g>
	            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M7 1h48v17H7z" />
	            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M2 9h5" />
	            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M55 9h6v15H32v17" />
	            <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M28 42h8v21h-8z" />
	          </g>
	        </svg>
	        Site en construction
   </div>
   </section>
    </div>
  );
};

Ecommerce.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Ecommerce);