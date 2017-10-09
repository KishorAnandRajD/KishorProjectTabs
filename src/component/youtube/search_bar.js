//import React from 'react';
import React,{Component} from 'react';

// SearchBar as class based Component

// ES6 Syntax based on import React,{Component} from 'react'
class SearchBar extends Component{

  // 'State' can be used only in class based components and NOT in functional components
  // State is specific to a class and when its changed, the whole class is rendered again
  // State is a plain JavaScript object and is initialized in a constructor
  constructor(props){
    super(props);// Call the parent component constructor

    // When the input search text is keyed in, this state is updated with term
    this.state={term: ''}; // Create a new state object with properties 'term' with blank value

  }
  render() {

    // Value of the input text is based on value from state
    return(
      <div className="search-bar">
        <input value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
         NOTE: State is maintained in component 
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

// Export the section to be imported by index.js
export default SearchBar;
