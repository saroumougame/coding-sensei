import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import themeStyles from './contact-details.theme.style';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {FormUpdateClassNom, updateClass, deleteClass}      from '../../../../actions/classes.actions';

import Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.js";
import "../../../../prism.css";
import Eleve   from '../../../eleves/eleve/contacts.component';

class ContactDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: '',
    }
  }
getVars(data){
            console.log(data);

   data = JSON.parse(data);
        console.log(data);

    var res = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        res.push([key,data[key]]);
      }
    }
    return res;
  }
  getIn(inData){
    inData = this.getVars(inData);
    console.log(inData);
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

  parseDate(uneDate) {
    if(uneDate != null){
      return uneDate.substring(0, 10);
    }
   }


  render(){
  const {
    classes,
    selectedContact
  } = this.props;

  return (
    <div className={classNames(scss['portal-contact-details'])}>
       <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={scss['exercice-title']}>
           <Paper className={scss['exercice-paper']}>
           <Typography variant="headline">{selectedContact.name}</Typography>
                      <br/>
            <br/>
<b>Description : </b>
          {selectedContact.description}
                        <br/>
{this.getIn(selectedContact.inData)}
                        <br/>
        {this.getOut(selectedContact.outData)}

            <br/>
            <b>Date limite : </b>
          {this.parseDate(selectedContact.dateEnd)}
          </Paper>
        
      </Grid>
      
    </div>
  );
}
};



function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
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

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {FormUpdateClassNom, updateClass, deleteClass}))(ContactDetails);

