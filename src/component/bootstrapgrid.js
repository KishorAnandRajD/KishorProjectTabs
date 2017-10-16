import React,{Component} from 'react';

import HomeIcon from  'react-icons/lib/fa/home';
import DVRIcon from 'react-icons/lib/md/dvr';
import HelpOutlineIcon from 'react-icons/lib/md/help-outline';
//import Navibar from './navbar';
import BootstrapNavibar from './bootstrapnavbar';

//import BoostrapTabs from './bootstraptabs';
//import SimpleTabs from './simpletabs';
import BootStrapTabs from './bootstraptabs';
//import CollapsableSanfona from './collapsiblesanfona';
import BootStrapCollapse from './bootstrapcollapse';
import BootStrapBreadCrumb from './bootstrapbreadcrumb';
//var clickOption="HomeIconClicked";

// Styling
import './css/bootstrapgrid.css';

class BootStrapGrid extends Component{

  constructor(props){
    super(props);
    this.state={
      clickOption:"HomeIconClicked"
    };
    // Bind the 3 methods using the setState or else use Arrow function in those 3 methods which automatically take care of the binding
    //https://stackoverflow.com/questions/43644583/react-cannot-read-property-setstate-of-null
    // If you don't do the binding, you will get the error "TypeError: Cannot read property 'setState' of null"
    this.onClickHomeIcon = this.onClickHomeIcon.bind(this);
    this.onClickDVRIcon = this.onClickDVRIcon.bind(this);
    this.onClickHelpOutlineIcon = this.onClickHelpOutlineIcon.bind(this);
  }

  onClickHomeIcon(event){
   console.log("onClickHomeIcon:",event);
   //clickOption="HomeIconClicked";
   this.setState({clickOption:"HomeIconClicked"});
  // console.log("onClickHomeIcon clickOption:",clickOption);
 }
 onClickDVRIcon(event){
  console.log("onClickDVRIcon:",event);
  //clickOption="DVRIconClicked";
  this.setState({clickOption:"DVRIconClicked"});
//  console.log("onClickDVRIcon clickOption:",clickOption);
}
onClickHelpOutlineIcon(event){
 console.log("onClickHelpOutlineIcon:",event);
 //clickOption="HelpIconClicked";
 this.setState({clickOption:"HelpIconClicked"});
 //console.log("onClickHelpOutlineIcon clickOption:",clickOption);
}

  render(){
    console.log("render method of SplitPanel");

    return(
          <div className="container-fluid">
              <div className="row">
                  <BootstrapNavibar customarg={this.onClickHomeIcon}/>
              </div>
              <div className="row">
                 <div className="col-md-1 divleftpane">
                   <a onClick={this.onClickHomeIcon}><h2><HomeIcon/></h2>  </a>
                   <a onClick={this.onClickDVRIcon}><h2><DVRIcon/></h2>  </a>
                   <a onClick={this.onClickHelpOutlineIcon}><h2><HelpOutlineIcon/></h2>  </a>
                 </div>
            	   <div className="col-md-9">
                      <div className="divbreadcrumb"><BootStrapBreadCrumb/></div>
                      <div className="divcenterpane">
                        {this.state.clickOption==="HomeIconClicked"?<h1>Welcome to Homepage</h1>:null}
                        {this.state.clickOption==="DVRIconClicked"?<BootStrapTabs/>:null}
                        {this.state.clickOption==="HelpIconClicked"?<h2>Please reach us for Help @0903454</h2>:null}
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="divcollapsible"><BootStrapCollapse/></div>
                  </div>
              </div>

          </div>
    );
  }
}

export default BootStrapGrid;
