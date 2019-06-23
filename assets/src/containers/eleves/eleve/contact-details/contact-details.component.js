import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import { connect } from 'react-redux';
import { elevesExerciceAction } from '../../../../actions/exercice.actions';
import Paper from '@material-ui/core/Paper';

class ContactDetails extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        eleve: null,
        composantClicker: null,
      }
      this.props.elevesExerciceAction();

    }

    

  render() {
      console.log(this);
      return (<Grid className={classNames(scss['portal-contact-details'] )}>
          <Grid 
          container
        direction="row"
                justify="space-between"

          className={classNames(scss['portal-contact-details-header'] )}>
          <div>
            <Typography variant="headline">{this.props.selectedContact.firstName.toUpperCase()} {this.props.selectedContact.lastName.toUpperCase()}</Typography>
            <Typography variant="subtitle1"><b>email : </b>{this.props.selectedContact.email}</Typography>
          </div>

          <div className={classNames(scss['portal-contact-details-header-score'] )}>97 %</div>
          </Grid>

          <div>
             { this.props.data.exerciceTexte.map(element=>(<Paper className={classNames(scss['portal-contact-content-paper'])}>aaa</Paper>))}
          </div>

        </Grid>);
  };

};


function mapStateToProps(state) {
  return {
    data: {
      exerciceTexte: state.exerciceData.current_student_data,
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
  connect(mapStateToProps, {elevesExerciceAction}))(ContactDetails);