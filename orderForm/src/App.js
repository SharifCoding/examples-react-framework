import React from 'react';
import './App.css';

// This is more complex example that uses two components -
// a `ServiceChooser` form, and the individual `Service` inside it.
class ServiceChooser extends React.Component{
  constructor(props){
	super(props);

	this.state={total:0};
	this.addTotal = this.addTotal.bind(this);
  }
  addTotal(price){
	this.setState({total: this.state.total +price});
  }
  render(){
	var self = this;
	var services = this.props.items.map((s)=>{
	// Create a new Service component for each item in the items array.
	// Notice that I pass the self.addTotal function to the component.
	  return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
	});
	return(
	  <div>
		<h1>Our services</h1>
		  <div id="services">
			{services}
			  <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
		  </div>
	  </div>
	);
  }
}

class Service extends React.Component{
  constructor(props){
	super(props);

  this.state = {active: false};
  this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    var active = !this.state.active;
    this.setState({active : active});
    // Notify the ServiceChooser, by calling its addTotal method
    this.props.addTotal(active ? this.props.price : -this.props.price)
  }
  render(){
	return(
	  <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
		{this.props.name} <b>${this.props.price.toFixed(2)}</b>
	  </p>
	);
  }
}

export default ServiceChooser;
