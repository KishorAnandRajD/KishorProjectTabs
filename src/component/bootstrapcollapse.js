import React,{Component} from 'react';
//import {Accordion,AccordionItem} from 'react-sanfona';
//require('../scss/collapsiblesanfona.scss');
//require('normalize.css');
import PostsIndex from './form/components/posts_index';

class BootStrapCollapse extends Component{

onAccordianItemExpand(item){
  console.log("onAccordianItemExpand",item);
}

onAccordianItemClose(item){
  console.log("onAccordianItemClose",item);
}

  render(){
    return(

        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                Collapsible Group 1</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                Collapsible Group 2</a>
              </h4>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                Collapsible Group 3</a>
              </h4>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.</div>
            </div>
          </div>
          <br/><br/>

          	{[11, 12, 13, 14, 15].map((item) => {
          		return (

                    <div className="panel panel-default" key={item}>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${item }`} >
                          Dynamic Group {item}</a>
                        </h4>
                      </div>
                      <div id={`collapse${item}`} className="panel-collapse collapse container-fluid" >
                          {`Item ${ item } content`}
                          {item===11?<PostsIndex/>:null}
                  		 		{item === 13 ? <p><img src="https://cloud.githubusercontent.com/assets/38787/8015584/2883817e-0bda-11e5-9662-b7daf40e8c27.gif" /></p> : null}
                      </div>
                    </div>

          		);
          	})}


        </div>






    );
  }
}

export default BootStrapCollapse;
