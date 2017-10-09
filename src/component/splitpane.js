import React,{Component} from 'react';
import SplitPane from 'react-split-pane'; //https://github.com/tomkp/react-split-pane
import HomeIcon from  'react-icons/lib/fa/home';
import DVRIcon from 'react-icons/lib/md/dvr';
import HelpOutlineIcon from 'react-icons/lib/md/help-outline';

//import BoostrapTabs from './bootstraptabs';
import SimpleTabs from './simpletabs';
import CollapsableSanfona from './collapsiblesanfona';

class SplitPanel extends Component{

  onClickHomeIcon(event){
   console.log("onClickHomeIcon:",event);
 }
 onClickDVRIcon(event){
  console.log("onClickDVRIcon:",event);
}
onClickHelpOutlineIcon(event){
 console.log("onClickHelpOutlineIcon:",event);
}

  render(){
    return(
    //   <SplitPane split="vertical" minSize={50} defaultSize={100} >
    //      <div></div>
    //      <div></div>
    //  </SplitPane>

    <SplitPane split="vertical" minSize={50}>
          <div>
            <a onClick={this.onClickHomeIcon}><h2><HomeIcon/></h2>  </a>
            <a onClick={this.onClickDVRIcon}><h2><DVRIcon/></h2>  </a>
            <a onClick={this.onClickHelpOutlineIcon}><h2><HelpOutlineIcon/></h2>  </a>
          </div>
          <SplitPane split="horizontal">
              <div>Breadcrumb</div>
              <SplitPane split="vertical"  minSize={1500}>
                  <div><SimpleTabs/></div>
                  <div><CollapsableSanfona/></div>
              </SplitPane>
          </SplitPane>
      </SplitPane>
    );
  }
}

export default SplitPanel;
