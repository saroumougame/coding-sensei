import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import scss from './home-eleve.module.scss';
import themeStyles from './home-eleve.style.js';

class HomeEleve extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null
	    }
	 }


	 render() {
	 	return(
	 		 <div className={scss['home-eleve-main']} >  


        <div>
          <Paper className={scss['home-eleve-paper-profil']} elevation={4}>
              <Typography variant="headline" component="h3">
                Informations personnel
              </Typography>

          </Paper>
        </div>

          <Paper className={scss['paper-profil-main']} elevation={4}>
              <Typography variant="headline" component="h3">
                
              </Typography>

          </Paper>
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
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps))(HomeEleve);