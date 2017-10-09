import React, { Component } from 'react';
import './App.css';
import Navibar from './component/navbar';
import SplitPanel from './component/splitpane';

class App extends Component {
  render() {
    return (
      <div >
        <div>
          <Navibar/>
          <SplitPanel/>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
