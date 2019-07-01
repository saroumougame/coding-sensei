import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import scss from './ShowExerice.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { deleteExercice } from '../../../actions/exercice.actions';
import Grid from '@material-ui/core/Grid';

import Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.js";
import "../../../prism.css";
class ShowExerice extends React.Component {

  parseDate(uneDate) {
    if(uneDate != null){
      return uneDate.substring(0, 10);
    }
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
    inData = this.getVars(inData);
    if (inData.length <= 0){
      return <div></div>;
    }
    var data = [];
    for (var i = 0; i < inData.length; i++ ){
      data[i] = `$${inData[i][0]} = ${inData[i][1]}`;
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
	 render() {
    var exo = this.props.data.current_Exercice_proff; 
	 	return(
	 		 <div className={scss['home-eleve-main']} >  
        
              <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={scss['exercice-title']}>
           <Paper className={scss['exercice-paper']}>
           <Typography variant="headline">{exo.name}</Typography>
                      <br/>
            <br/>
<b>Description : </b>
          {exo.description}
                        <br/>
{this.getIn(exo.inData)}
                        <br/>
        {this.getOut(exo.outData)}

            <br/>
            <b>Date limite : </b>
          {this.parseDate(exo.dateEnd)}
          </Paper>
        
      </Grid>
            <Button  onClick={this.props.deleteExercice} color="secondary" className={scss['portal-contacts-detail-delete-button-contact']} >
                <DeleteIcon/> 
            </Button>
       
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      current_Exercice_proff:           state.exerciceData.current_Exercice_proff,
    }
  };
}
export default connect(mapStateToProps, {deleteExercice})(ShowExerice);