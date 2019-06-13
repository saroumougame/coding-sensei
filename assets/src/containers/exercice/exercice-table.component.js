import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import scss from './exercice.module.scss';
import styles from './exercice.style';
import { addSelectaction, removeSelectaction } from '../../actions/exercice.actions';
import DeleteIcon from '@material-ui/icons/Delete';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const API = 'http://51.38.38.246:8080';
const DEFAULT_QUERY = 'exercices';


class TableauExercice extends Component  {
  
  constructor(props) {
    super(props);
    this.state = {
      exos: [],
      isLoading: false,
      show: ''
    };
  }

  isChecked(id){
    if(this.props.data.tabSelected.indexOf(id) != -1){
      return true;
    }
    return false;
  }


  componentWillMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(exos => 
        this.setState({ exos : exos,isLoading: false })
      );
  }


  onDeleteExo(exo){
    var response =fetch(API+ DEFAULT_QUERY +'/'+ exo.id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      //response.json()
      this.componentWillMount();
    });
   
  }


  render() {
  
    //this.props.data.proffs;
    let { classes } = this.props;
    const { exos, isLoading } = this.state;
    var dataExo = exos['hydra:member'];

    console.log(isLoading);
  
    console.log(exos['hydra:member']);
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Titre</TableCell>
                    <TableCell numeric>Desription</TableCell>
                    <TableCell numeric>Fonction</TableCell>
                    <TableCell numeric>Entree</TableCell>
                    <TableCell >Sortie</TableCell>
                    <TableCell >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody> 
                  {dataExo.map(exo => {
                    return (
                      <TableRow key={exo.id} >
                        <TableCell component="th" scope="row">
                          {exo.name}
                        </TableCell>
                        <TableCell numeric>{exo.description}</TableCell>
                        <TableCell numeric>{exo.fonction}</TableCell>
                        <TableCell numeric>{exo.inData.arg}</TableCell>
                        <TableCell numeric>{exo.autre}</TableCell>

                        <TableCell >
                           multi select attr classe
                        </TableCell>

                        <TableCell >
                        <Button  onClick={() => this.onDeleteExo(exo)} variant="fab" aria-label="Delete" className={scss['btn_fab-right']} >
                <DeleteIcon />
              </Button>
                    
                        </TableCell>
                        <TableCell >
                            <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
                              Modifier
                            </Button>
                        </TableCell>

                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
    );};
};


function mapStateToProps(state) {
  return {
    data: {
      test: state.customData.test,
      proffs: state.customData.users,
      tabSelected: state.customData.tabSelected,
    }
  };
}

TableauExercice.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  addSelectaction: PropTypes.func.isRequired,
  removeSelectaction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {addSelectaction, removeSelectaction})
)(TableauExercice);
