import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Group from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';



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

class SimpleModalRedux extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let { classes, titleButton, title, text, open, customClick, customClose } = this.props;

    if(typeof(open) == undefined || typeof(open) == 'undefined' || open == null) {
      open = false;
    }

    return (
      <div className={styles.div} >
      <ListItem
                title={"add_class"}
                onClick={customClick}
                divider
                button
              >
                <AddIcon className={classNames(classes.portalContactsListItemIcon)}>        
                  <Group />
                </AddIcon>
                <ListItemText
                  primary={titleButton}
                />
        
              </ListItem>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={customClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {text}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModalRedux.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModalRedux);

export default SimpleModalWrapped;
