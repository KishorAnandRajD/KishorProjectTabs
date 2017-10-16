import React, { Component } from 'react';
import './App.css';
//import Navibar from './component/navbar';
import SplitPanel from './component/splitpane';
import BootStrapGrid from './component/bootstrapgrid';

/*
Removed the <Navibar/> before the <BootStrapGrid/>
*/
class App extends Component {
  render() {
    return (
      <div >
        <div >
          <BootStrapGrid/>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
