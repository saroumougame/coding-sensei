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
             { this.props.data.exerciceTexte.map(element=>{ 
              //console.log(element);
              var { name, description, endDate, createdAt } = element.exercice;
              if (createdAt){
                createdAt = (new Date(createdAt.date)).toLocaleDateString();
                console.log(createdAt);
              }
              if (endDate){
                endDate = (new Date(endDate.date)).toLocaleDateString();
                console.log(endDate);
              }
              return(
                <Paper className={classNames(scss['portal-contact-content-paper'])}>
                  <div><b>Nom : </b>{name}</div>
                  <div><b>Description: </b>{description}</div>
                  <div><b>fin: </b>{endDate}</div>
                  <div><b>creation: </b>{createdAt}</div>
                </Paper>
              );
            })}
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