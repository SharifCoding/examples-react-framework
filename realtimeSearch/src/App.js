import React from 'react';
import './App.css';

class Search extends React.Component{
  constructor(props){
	super(props);

	this.state = {searchString:''};
	this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
	// If you comment out this line, the text box will not change its value.
	// This is because in React, an input cannot change independently of the value
	// that was assigned to it. In our case this is this.state.searchString.
	this.setState({searchString: e.target.value});
  }
  render(){
	var libaries = this.props.items,
	  searchString = this.state.searchString.trim().toLowerCase();
		
	if(searchString.length > 0){
	  // We are searching. Filter the results.
	  libaries = libaries.filter((l)=>{
	  	return l.name.toLowerCase().match(searchString)
	  });
	}

	return (
	  <div>
		<input type="text" 
		  value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
			<ul>
			  {libaries.map((l)=>{
				return <li>{l.name}<a href={l.url}>{l.url}</a></li>
			  })}
			</ul>
	  </div>
	);
  }
}

export default Search;
