import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import scss from './ecole.module.scss';
import styles from './ecole.style';

class TableauEcole extends Component  {

  constructor() {
    super();
    this.id = 0;
  }

  createData = (name, calories, fat, carbs, protein) => {
    this.id += 1;
    let id = this.id;
    return { id, name, calories, fat, carbs, protein };
  };

  createCustomData = (i) => {
    this.id += 1;
    let id = this.id;
    i.id = id;
    return i;
  };

  onChangeSelect = (row) => {
    console.log(row);
  };

  render() {
    let { classes } = this.props;
    const customRows = [];
    const rows = [];

    this.props.data.proffs.map(i => {
      this.createCustomData(i);
      rows.push(i);
    });

    return (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom Prenom</TableCell>
                    <TableCell numeric>Matière</TableCell>
                    <TableCell numeric>Nombre de classes</TableCell>
                    <TableCell numeric>Nombre d'éléves</TableCell>
                    <TableCell numeric>Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.nom}
                        </TableCell>
                        <TableCell numeric>{row.matiere}</TableCell>
                        <TableCell numeric>{row.eleves}</TableCell>
                        <TableCell numeric>{row.autre}</TableCell>
                        <TableCell ><Checkbox
                          onChange={() => this.onChangeSelect(row)}
                        /></TableCell>
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
    }
  };
}

TableauEcole.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(TableauEcole);
