import React, { Component } from 'react';

import './App.css';
import ForeCast from './components/Routing/FiveDayForeCast'
//fetch('https://api.openweathermap.org/data/2.5/weather?q=Gokak&appid=9a566627df04c9ed63f4c5c0d254cc44')
import ErrorBoundry from './components/HOC/ErrorBoundry/ErrorBoundry'
import Wrapper from './Container/wrapper'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {

  // shouldComponentUpdate(){
  //   if(!this.state.data && this.state.isLoaded)
  // }

  render() {
    return(
      
       <BrowserRouter>
        <div className='App'>
               
               <ForeCast/>
           
          
          </div>
          </BrowserRouter>
        
          
   
      
  )
  
  }
}

export default App;
