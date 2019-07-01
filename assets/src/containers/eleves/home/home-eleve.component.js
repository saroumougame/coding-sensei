import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import scss from './home-eleve.module.scss';
import themeStyles from './home-eleve.style.js';
import { getClassUser } from '../../../actions/classes.actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Modal from '@material-ui/core/Modal';
import { getUser, getUserByToken, editProfile } from '../../../actions/auth.actions.js';
import PropTypes from 'prop-types';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  div: {
    width: '30%'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class HomeEleve extends React.Component {

  	constructor(props) {
    	super(props);
    	
      this.props.getUserByToken();
      this.props.getClassUser();
      this.state = {
        eleve: null,
        page: 0,
        rowsPerPage: 5,
        rows: [],
        open: false,
        nom: "",
        prenom: "",
        mdp: "" 
      }

      
    } 
    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
  

    handleChangePage = (event, page) => {
      this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
      this.setState({ page: 0, rowsPerPage: event.target.value });
    };
    submitdata = () => {
      
        this.props.editProfile(this.props.data.user['@id'], this.state.nom, this.state.prenom, this.state.mdp);
      this.setState({ open: false });

    };
    componentWillReceiveProps(nextProps){
      this.setState({
        nom: nextProps.data.user.lastName,
        prenom: nextProps.data.user.firstName ,
      });
    }
	 render() {
   
    var user = this.props.data.user || {
      firstName: "",
      lastName: "",
      email: ""
    }
    var exo_total = 0;
    var exo_reussi = 0;
    var tentatives_total = 0;
    var tentatives_reussi = 0;
    var ex = [];
    for (var i =0; i < this.props.data.liste_exercice_user.length; i++){
      var exercice = this.props.data.liste_exercice_user[i];
      var exercice_success = false;
      var tentative_exo_total = 0;
      var tentative_exo_reussi = 0;
      for (var j =0; j < exercice.reponse.length; j++){
        var reponse = exercice.reponse[j];
        tentatives_total++;
        tentative_exo_total++;
        if (reponse.success){
          tentatives_reussi++;
          tentative_exo_reussi++;
          exercice_success = true;
        }
      }
      exo_total++;
      ex.push({
        exo: exercice,
        tenstatives: tentative_exo_total,
        tenstatives_reussi: tentative_exo_reussi,
        success: exercice_success
      })
      if (exercice_success){
        exo_reussi++;
      }
    } 
    const { classes} = this.props;

	 	return(
      <Grid  className={scss['home-eleve-main']} container direction="column" justify="flex-start" alignContent="center">
      
          <Paper className={scss['home-eleve-paper']}>
          <img alt="" src="/assets/images/geek-avatar.jpg" />
            <Typography variant="display1">Bienvenue {user.firstName} {user.lastName}</Typography>
            <a onClick={this.handleOpen}>Editer mon profile >></a>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              >
          <div style={getModalStyle()} className={classes.paper}>
            <Grid  container direction="column" justify="flex-start">
            <TextField
              id="nom"
              value={this.state.nom}
              onChange={(e) => {this.setState({nom: e.target.value});}}
              label="Nom"
              // className={classes.textField}
              margin="normal"
            />
            <TextField
              id="prenom"
              value={this.state.prenom}
              onChange={(e) => {this.setState({prenom: e.target.value});}}
              label="Prenom"
              // className={classes.textField}
              margin="normal"
            />

            <TextField
              id="mdp"
              value={this.state.mdp}
              onChange={(e) => {this.setState({mdp: e.target.value});}}
              label="Mot de passe"
              // className={classes.textField}
              margin="normal"
            />
            <div>
              <Button onClick={this.submitdata} color="primary">
                Send
              </Button>
            </div>
            </Grid>
            </div>
          </Modal>
            <br/>
            <br/>
            <div><b>email :</b> {user.email}</div>
            <br/>
            <div><b>Statistiques exercices : </b></div>
            <br/>
            <div>
              <div>Nombre d'exercices realisé : {exo_total}</div>
              <div>Nombre d'exercices reussi : {exo_reussi}</div>
              <div>Nombre de tentatives total : {tentatives_total}</div>
              <div>Nombre de tentatives reussi : {tentatives_reussi}</div>
            </div>
            <br/>
            <br/>
            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom de l'exercice</TableCell>
                    <TableCell align="right">Disponible du</TableCell>
                    <TableCell align="right">Tentatives Total</TableCell>
                    <TableCell align="right">Tentatives Reussi</TableCell>
                    <TableCell align="right">Resultat</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ex.map(exercice => {
                    return (
                    <TableRow key={exercice.exo.exercice.name}>
                      <TableCell component="th" scope="row">
                        {exercice.exo.exercice.name}
                      </TableCell>
                      <TableCell align="right">{exercice.exo.exercice.dateEnd.substring(0,10)}</TableCell>
                      <TableCell align="right">{exercice.tenstatives}</TableCell>
                      <TableCell align="right">{exercice.tenstatives_reussi}</TableCell>
                      <TableCell align="right">{exercice.success?"true": "false"}</TableCell>
                    </TableRow>
                  )
                  })}
                </TableBody>
                <TableFooter>
                  <TablePagination rowsPerPageOptions={[5, 10, 25]} colSpan={3} count={ex.length} rowsPerPage={this.state.rowsPerPage} page={this.state.page} SelectProps={{
                      native: true
                  }} onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} />

                </TableFooter>
              </Table>
            </div>
          </Paper>
	 		 </Grid>
	 	);
	 }
}
HomeEleve.propTypes = {
  classes: PropTypes.object.isRequired,
};
const HomeEleveWrapped = withStyles(styles)(HomeEleve);

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom, 
      user:                             state.authData.user,
      liste_exercice_user:              state.exerciceData.liste_exercice_user 
    }
  };
}
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }),
  connect(mapStateToProps, {getUserByToken,getClassUser, editProfile}))(HomeEleveWrapped);