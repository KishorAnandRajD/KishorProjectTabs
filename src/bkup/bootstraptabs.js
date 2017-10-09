import React,{Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';

class BoostrapTabs extends Component{

  constructor(props) {
    console.log("Constructor Start");
    super(props);
    this.state= {
      key: 1
    };
    console.log("Contructor End");
  }

  onSelectTab(key) {
    console.log("onSelectTab Start");
    //alert('selected ' + key);
    this.setState({
      key:key
    });
    console.log("onSelectTab End");
  }

  render(){
    return(
      <Tabs onSelect={this.onSelectTab}  id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Disabled Tab 3" disabled>Tab 3 content</Tab>
        <Tab eventKey={4} title="Tab 4" >Tab 4 content</Tab>
      </Tabs>
    );
  }
}

export default BoostrapTabs;
