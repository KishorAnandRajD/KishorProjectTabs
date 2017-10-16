import React,{Component} from 'react';


// Styling
import './css/bootstrapbreadcrumb.css';

class BootStrapBreadCrumb extends Component{





  render(){
    console.log("render method of SplitPanel");

    return(
      <div className="container-fluid">
            <ol className ="breadcrumb ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Private</a></li>
                <li><a href="#">Pictures</a></li>
                <li className="active">Vacation</li>
            </ol>
      </div>
    );
  }
}

export default BootStrapBreadCrumb;
