import React, { Component } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


// Material UI
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

// Components

import Courencies from './components/courencies/Courencies';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      courenciesCount:1
    }
  }
  // Event handlers
  addRemoveCourencies(i) {
    if(i) {
      this.setState({
        courenciesCount:(this.state.courenciesCount + 1),
      })
    }
    else {
      if(this.state.courenciesCount > 1) {
        this.setState({
          courenciesCount:this.state.courenciesCount - 1,
        })
      }
    }
  }
  // --------------


  showCourencies() {
    let result = [];
    for(var i=0;i<this.state.courenciesCount;i++) {
      result.push(<Courencies key={i}/>);
    }
    return result;
  }
  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item md>
            <div className="action-buttons">
              <Fab color="primary" className="add-remove-block" onClick={this.addRemoveCourencies.bind(this,1)}><FontAwesomeIcon icon={faPlus} /></Fab>
              <Fab color="secondary" className="add-remove-block" onClick={this.addRemoveCourencies.bind(this,0)}><FontAwesomeIcon icon={faMinus} /></Fab>
            </div>
          </Grid>
        </Grid>
        <Grid container className="courencies-block">
          {this.showCourencies()}
        </Grid>
      </div>
    );
  }
}

export default App;