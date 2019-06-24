import React from 'react';
import { connect } from 'react-redux';
import scss from './ListeExercice.module.scss';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { listeExerciceAction } from '../../../actions/exercice.actions';


class listeEcercice extends React.Component {

  	constructor(props) {
    	super(props);

    	this.state = {
    		eleve: null,
        pagination: 0,
	    }
      //coucou
      this.props.listeExerciceAction();
	 }


   getDateRealisation(exercice) {
      if(exercice.dateEnd == null) {
        return 'Date limite: infinie';
      }
      return 'Date limite: '+ exercice.dateEnd;
   }
    handleExport(){
      let liste = this.props.data.liste_exerciceData;
      var res = '{';
      console.log(this);
      for (var i = 0; i < liste.length; i++){
          res += `\n{\n
    "name":"${liste[i].name}",\n
    "description":"${liste[i].description}",\n
    "inData":${JSON.stringify(liste[i].inData) },\n
    "outData":${JSON.stringify(liste[i].outData)},\n 
    "dateEnd":"${liste[i].dateEnd || ""}"\n 
},`;
      }
      res.substring(0, res.length - 1);
      res += '\n}\n';


        var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();



      var filename = "export_" + y + "-" + m + "-" + d + "_" + h + "-" + mi + "-" + s + ".coding-sensei"
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(res));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      console.log(res);

    }
   getListItem() {
      let count = 0;
      let liste = this.props.data.liste_exerciceData;
      if(typeof(liste) !== 'undefined' && typeof(liste) !== undefined) { 
        return liste.map((i) => {
          count++;
          if(count > this.state.pagination){  
          return (
              <ListItem key={count}  className={scss['UnExercice']} button onClick={() => {this.props.customClick(i)}}>
                <ListItemIcon>
                {/*
                  <StarIcon />
                */}
                </ListItemIcon>
                <ListItemText inset primary={i.name}  secondary={i.description} />

                <div>
                {this.getDateRealisation(i)} 
                </div>
              </ListItem>
            );
          }else {
            return <div></div>;
          }
        });
      }
   }    
    
	 render() {

    return(
	 		 <div className={scss['ListeExercices']} >  
         <List component="nav">
              {this.getListItem()}
          </List>
          <Button onClick={this.handleExport.bind(this)}>Export</Button>

	 		 </div>
	 	);
	 }
}

function mapStateToProps(state) {
  return {
    data: {
      FormDataUpdateClassNom:           state.classData.FormDataUpdateClassNom,  
      liste_exerciceData:               state.exerciceData.liste_exercice
    }
  };
}
export default 
  connect(mapStateToProps, {listeExerciceAction})(listeEcercice);