import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';
import Weather from './components/weather';
import './App.css';

class App extends Component {
  render() {
    return(
    <div>
      <Header />      
      <Search />
      <Weather />
    </div>
    )
  }
}

export default App;
