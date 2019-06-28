import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import compose from 'recompose/compose';
import themeStyles from './contact-details.theme.style';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import scss from './contact-details.module.scss';
import FontAwesome from 'react-fontawesome';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';

class ContactDetails extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        eleve: null,
        composantClicker: null,
      }
    }


//  getExoByEleve(){

//       var token = localStorage.getItem('token');
    
//       return (dispatch, getState) => { 
//         fetch(API_URL + '/currentuser', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization' : 'Bearer '+token
//           }
//         })
//         .then(response => response.json())
//         .then(json => {
    
//             if(json.roles.includes('ROLE_TEACHER')) {
//               history.push('/account');
//             }else if(json.roles.includes('ROLE_STUDENT')) {
//               history.push('/home');
//             }
//           dispatch(loginAction(json));
//         })
//         .catch((e) => dispatch());
//       }
//     }

    getListeExoOuExo() {

      if(this.state.composantClicker == null){

        return (
          <div onClick={() => { this.setState({composantClicker: 36})}}>
          exo
          </div>
          );
      }
      else {
        return (
            <div onClick={() => { this.setState({composantClicker: null})}}>
            exercice {this.state.composantClicker};
            </div>

          );
      }
    }

  render() {
    var ElevesInfo = this.props.data.SelectedEleve;
    console.log(ElevesInfo);
          return (
            <div className={classNames(scss['portal-contact-details'] )}>
              <div
              >

                  <div className={scss['containerdiv']}>
                   <Typography className={scss['exercice-paper-title']} variant="headline" component="h3">
                    Eleve -   {ElevesInfo.firstName} ,  {ElevesInfo.lastName} <br />
                    {ElevesInfo.email}
                  </Typography>        
          </div>
 
              {this.getListeExoOuExo()}


              </div>
            </div>
          );
};

};


function mapStateToProps(state) {
  return {
    data: {
      exerciceTexte:                    state.exerciceData.liste_exercice,
      SelectedEleve:       state.eleveData.SelectedEleve
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
  connect(mapStateToProps))(ContactDetails);