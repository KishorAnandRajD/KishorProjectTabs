import React,{Component} from 'react';
//import {  Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
//import HomeIcon from  'react-icons/lib/fa/home';
import BellIcon from 'react-icons/lib/ti/bell';
import HelpIcon from 'react-icons/lib/md/help';

import './css/bootstrapnavbar.css';

class BootstrapNavibar extends Component{

  onClickDropDownItem1(event){
   console.log("onClickDropDownItem1:",event);
 }

 onClickLinkItem2(){
  console.log("onClickLinkItem2");
}
onClickLinkItem3(){
 console.log("onClickLinkItem3");
}
onClickDropdown(){
 console.log("onClickDropdown");
}
onClickHelpIcon(){
 console.log("onClickHelpIcon");
}
onClickHome(){
 console.log("onClickHome before calling parent bootstrapgrid onClickHomeIcon ");
 this.props.customarg;
 console.log("after calling parent onClickHomeIcon");
}
  render(){
    return(
   <nav className="navbar navbar-inverse">
        <div className="container-fluid ">
                    <div className="navbar-header ">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">Lab Equipments</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                          <ul className="nav navbar-nav">
                            <li ><a  onClick={this.props.customarg}>Home</a></li>
                            <li className="dropdown">
                              <a className="dropdown-toggle" onClick={this.onClickDropdown} data-toggle="dropdown" href="#">Dropdown <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a href="#" >Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                              </ul>
                            </li>
                            <li><a  onClick={this.onClickLinkItem2}>Link2</a></li>
                            <li><a  onClick={this.onClickLinkItem3}>Link3</a></li>
                          </ul>
                          <ul className="nav navbar-nav navbar-right">
                            <li className="iconstyle"><a href="#"><span className="glyphicon"></span> <BellIcon/></a></li>
                            <li className="iconstyle"><a href="#"><span className="glyphicon"></span> <HelpIcon/></a></li>
                            <li><a href="#" data-toggle="modal"  data-target="#myModal"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

                              <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                                      <h4 className="modal-title">Please Signup using email id</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                        <label >Email:</label>
                                        <input type="email" className="form-control" id="usr"/>
                                        </div>
                                        <div className="form-group">
                                        <label >Password:</label>
                                        <input type="password" className="form-control" id="pwd"/>
                                        </div>
                                        <div className="form-group">
                                        <label >Re-type Password:</label>
                                        <input type="password" className="form-control" id="pwd"/>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Register/Signup</button>
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                  </div>

                                </div>
                              </div>
                          </ul>
                    </div>
        </div>
  </nav>

 );
}
}

// function onClickNavItem1(){
//   console.log("onClickNavItem1");
// }
export default BootstrapNavibar;
