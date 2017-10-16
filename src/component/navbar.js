import React,{Component} from 'react';
import {  Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
//import HomeIcon from  'react-icons/lib/fa/home';
import BellIcon from 'react-icons/lib/ti/bell';
import HelpIcon from 'react-icons/lib/md/help';

import './css/navbar.css';

class Navibar extends Component{

  onClickNavItem1(event){
   console.log("onClickNavItem1:",event);
 }

 onClickNavItem2(){
  console.log("onClickNavItem2");
}
onClickMenuItemAction(){
 console.log("onClickMenuItemAction");
}
onClickHelpIcon(){
 console.log("onClickHelpIcon");
}

  render(){
    return(
      <Navbar  inverse >
     <Navbar.Header>
       <Navbar.Brand>
         <a>Home</a>
       </Navbar.Brand>
     </Navbar.Header>
     <Nav >
       <NavItem eventKey={1}  onClick={this.onClickNavItem1}>Link</NavItem>
       <NavItem eventKey={2} href="#" onClick={this.onClickNavItem2}>Link</NavItem>

       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
         <MenuItem eventKey={3.1} onClick={this.onClickMenuItemAction}>Action</MenuItem>
         <MenuItem eventKey={3.2}>Another action</MenuItem>
         <MenuItem eventKey={3.3}>Something else here</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={3.4}>Separated link</MenuItem>
       </NavDropdown>

       <NavItem eventKey={4}><div className="iconstyle"><BellIcon/></div></NavItem>
       <NavItem eventKey={5} onClick={this.onClickHelpIcon}><div className="iconstyle"><HelpIcon/></div></NavItem>
     </Nav>

   </Navbar>
 );
}
}

// function onClickNavItem1(){
//   console.log("onClickNavItem1");
// }
export default Navibar;
