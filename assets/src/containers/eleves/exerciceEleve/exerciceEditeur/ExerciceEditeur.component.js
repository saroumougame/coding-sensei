import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FontAwesome from 'react-fontawesome';
import scss from './ExerciceEditeur.module.scss';
import TextField from '@material-ui/core/TextField';

class ExerciceEditeur extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }


      /*
   */
	 }

   componentDidMount() {
          let monTextArea = document.getElementById('text-area');
        monTextArea.addEventListener('keydown', (e) => {
        console.log(e.key);
        if(e.key == "Tab") {
          e.preventDefault();
          monTextArea.innerHtml += "  a  ";
        }
      });
      console.log(monTextArea);
   }


	 render() {
	 	return(
	 		 <div className={scss['home-eleve-main']} >  
      
            <TextField
              id="text-area"
              //value={this.props.data.FormDataDesc}
              //onChange={(e) => {this.props.updateFormDesc(e.target.value)}}
              label="description"
              multiline={true}
              variant="outlined"
              rows={15}
              rowsMax={20000}
              margin="normal"
              className={scss['text-area']}
            />
     <Button variant="outlined" color="primary">
        Tester mes resultats
      </Button>
	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
    }
  };
}
export default compose(withWidth(), withStyles( { withTheme: true }),
  connect(mapStateToProps))(ExerciceEditeur);