import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import Weather from './components/weather';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = { 
			search_target: '',
			forecast: {},
			showForecast: false
		}
	}

	handleChange = (event) => {
  		this.setState({ search_target: event.target.value });
  	}

  	handleSubmit = (event) => {
		event.preventDefault();
  		const API_KEY = '4b045d179305ecb8c61787eafd5486ae';
  		const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.search_target}&APPID=${API_KEY}&units=metric`;
  		fetch(url)
	  		.then(response => response.json())
       		.then(data => this.setState({ forecast: data , showForecast : true }));
  	}

  	render() {
	    return(
		    <div>
		      <Header />      
		      <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
		      { this.state.showForecast ? <Weather forecast={this.state.forecast} /> : null }

		    </div>
		)
	}
}




export default App;
