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

import Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.js";
import "../../../../prism.css";



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
  componentDidMount() {
    Prism.highlightAll();
  }
  getExoIcon(success){
    if (success){
      return <DoneIcon/>
    }
    return <ClearIcon/>
  }
  getVars(data){
    if (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      data = JSON.parse(data);
    } else {
      data = {}
    }
    var res = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        res.push([key,data[key]]);
      }
    }
    return res;
  }
  getIn(inData){
    console.log(inData);
    inData = this.getVars(inData);
    if (inData.length <= 0){
      return <div></div>;
    }
    var data = [];
    for (var i = 0; i < inData.length; i++ ){
      data[i] = `${inData[i][0]} = ${inData[i][1]}`;
    }
    var res = Prism.highlight(data.join("\n"), Prism.languages["php"]);
     return <div>
              <div><b>variables en entrée: </b></div>
              <pre className="line-numbers"><code className="language-php" dangerouslySetInnerHTML={{__html: res}}></code></pre>
            </div>;

  }
  getOut(outData){
    outData = this.getVars(outData);
    if (outData.length <= 0){
      return <div></div>;
    }
    var data = [];
    for (var i = 0; i < outData.length; i++ ){
      data[i] = `${outData[i][0]} = ${outData[i][1]}`;
    }
    var res = Prism.highlight(data.join("\n"), Prism.languages["php"]);
     return <div>
              <div><b>Verification: </b></div>
              <pre className="line-numbers"><code className="language-php" dangerouslySetInnerHTML={{__html: res}}></code></pre>
            </div>;

  }
  getReponse(reponse, send){
      if(send){
      return <div>
      <div><b>reponse: </b></div>
                  <pre className="line-numbers"><code className="language-php" dangerouslySetInnerHTML={{__html: reponse}}></code></pre>
      </div>;
      }
      return <div>
      <div><b>reponse: </b></div>
      <div>Il n'y a pas encore de reponse a cet exercice</div>
      </div>; 
  }
  getListeExercices() {
    if(this.props.data.exerciceTexte != null){
        return this.props.data.exerciceTexte.map(element=>{ 
              var { name, description, endDate, createdAt, inData, outData } = element.exercice;
              var success = false;
              var reponse = false;
              for (var i = 0; i < element.reponse.length; i++) {
                success = success || element.reponse[i].success;
                
                if (! reponse){
                  reponse = element.reponse[i];
                  continue;
                }

                var old_date = new Date(reponse.createdAt)
                var new_date = new Date(element.reponse[i].createdAt)
                if (!reponse.success && element.reponse[i].success){
                    reponse = element.reponse[i];
                    continue;
                }
                if (old_date < new_date){
                  reponse = element.reponse[i];
                  continue;
                }
                
                
                
              }
              if (createdAt){
                createdAt = (new Date(createdAt.date)).toLocaleDateString();
              }
              if (endDate){
                endDate = (new Date(endDate.date)).toLocaleDateString();
              }
              var rep = reponse.awnserCode ? Prism.highlight(reponse.awnserCode, Prism.languages["php"]) : "";
           
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
            <Grid 
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch">
                  <div>{description}</div>
                  {this.getIn(inData)}
                  {this.getOut(outData)}
                  {this.getReponse(rep, reponse.awnserCode)}
                  </Grid>
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