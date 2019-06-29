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
import { elevesExerciceAction, elevesScoreAction } from '../../../../actions/exercice.actions';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';


class ContactDetails extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        eleve: null,
        composantClicker: null,
      }
      this.props.elevesExerciceAction();
      this.props.elevesScoreAction();
    }
  getExoIcon(success){
    if (success){
      return <DoneIcon/>
    }
    return <ClearIcon/>
  }
  getListeExercices() {
    if(this.props.data.exerciceTexte != null){
      console.log(this.props.data.exerciceTexte);
        return this.props.data.exerciceTexte.map(element=>{ 
              var { name, description, endDate, createdAt } = element.exercice;
              var success = false;
              var reponse = false;
              for (var i = 0; i < element.reponse.length; i++) {
                success = success || element.reponse[i].success;
                if (! reponse){
                  reponse = element.reponse[i];
                  break;
                }
                var old_date = new Date(reponse.createdAt)
                var new_date = new Date(element.reponse[i].createdAt)
                if (reponse.success && element.reponse[i].success){
                  if (old_date < new_date){
                    reponse = element.reponse[i];
                    break;
                  }
                }
                if (old_date < new_date){
                    reponse = element.reponse[i];
                    break;
                }
              }
              if (createdAt){
                createdAt = (new Date(createdAt.date)).toLocaleDateString();
              }
              if (endDate){
                endDate = (new Date(endDate.date)).toLocaleDateString();
              }
              console.log({
                rep: reponse
              });
              return(

                <div>
                <ExpansionPanel className={classNames(scss['portal-contact-content-panel'])}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                   <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="stretch">
                <div><Typography>{name}</Typography></div>
                <div>{this.getExoIcon(success)}</div>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
            
                  <div><b>Nom : </b>{name}</div>
                  <div><b>Description: </b>{description}</div>
                  <div><b>reponse: </b>{reponse.awnserCode}</div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
                </div>
                
              );
            })
    }
      
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
          <div>
              <Grid 
              container
              direction="row"
              justify="flex-end"
              >
              <div>
                  <div>Exercices Reussi : {this.props.data.grade[1] || 0}</div>
                  <div>Exercices Realisé : {this.props.data.grade[2] || 0}</div>
              </div>
              <div className={classNames(scss['portal-contact-details-header-score'] )}>{this.props.data.grade[0] || 0} %</div>
          </Grid>
          </div>
          </Grid>

          <div className={classNames(scss['exo-listing'] )}>
            {this.getListeExercices()}
          </div>

        </Grid>);
  };

};


function mapStateToProps(state) {
  return {
    data: {
      exerciceTexte: state.exerciceData.current_student_data,
      grade: state.exerciceData.grade
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
  connect(mapStateToProps, {elevesExerciceAction, elevesScoreAction}))(ContactDetails);