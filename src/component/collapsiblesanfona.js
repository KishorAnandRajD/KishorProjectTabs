import React,{Component} from 'react';
import {Accordion,AccordionItem} from 'react-sanfona';
//require('../scss/collapsiblesanfona.scss');
//require('normalize.css');

class CollapsableSanfona extends Component{

onAccordianItemExpand(item){
  console.log("onAccordianItemExpand",item);
}

onAccordianItemClose(item){
  console.log("onAccordianItemClose",item);
}

  render(){
    return(
        <Accordion allowMultiple={true}>
  				{[1, 2, 3, 4, 5].map((item) => {
  					return (
  						<AccordionItem title={`Item ${ item }`} slug={item} key={item}
              onExpand={this.onAccordianItemExpand} onClose={this.onAccordianItemClose}>
  							<div>
  								{`Item ${ item } content`}
  								{item === 3 ? <p><img src="https://cloud.githubusercontent.com/assets/38787/8015584/2883817e-0bda-11e5-9662-b7daf40e8c27.gif" /></p> : null}
  							</div>
  						</AccordionItem>
  					);
  				})}
  			</Accordion>
    );
  }
}

export default CollapsableSanfona;
