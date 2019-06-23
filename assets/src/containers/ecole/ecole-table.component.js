import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './ecole.style';
import { addSelectaction, removeSelectaction } from '../../actions/ecole.actions';

class TableauEcole extends Component  {

  constructor() {
    super();
    this.rows = [];

  }


  onChangeSelect = (row) => {
    let newTabSelect = this.props.data.tabSelected;

    if(newTabSelect.indexOf(row.id) === -1){
     return this.props.addSelectaction(row.id);
    }else {
      return this.props.removeSelectaction(row.id);
    }

  };

  isChecked(id){
    if(this.props.data.tabSelected.indexOf(id) !== -1){
      return true;
    }
    return false;
  }

  render() {
    this.rows = this.props.data.proffs;

    let { classes } = this.props;
    return (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom Prenom</TableCell>
                    <TableCell numeric>Matière</TableCell>
                    <TableCell numeric>Nombre de classes</TableCell>
                    <TableCell numeric>Nombre d'éléves</TableCell>
                    <TableCell >Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.rows.map(row => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.nom}
                        </TableCell>
                        <TableCell numeric>{row.matiere}</TableCell>
                        <TableCell numeric>{row.eleves}</TableCell>
                        <TableCell numeric>{row.autre}</TableCell>
                        <TableCell >
                            <Checkbox
                            checked = {this.isChecked(row.id)}
                            onChange={() => this.onChangeSelect(row)}
                            />
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

TableauEcole.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  addSelectaction: PropTypes.func.isRequired,
  removeSelectaction: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {addSelectaction, removeSelectaction})
)(TableauEcole);
