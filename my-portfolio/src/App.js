import React from 'react';
import logo from './logo.svg';
import './welcome_page.css';
import Banner from './components/navbar/header/header'

import Backdrop from './components/navbar/backdrop/backdrop'
import TomGinfo from './components/navbar/Tom G profile/Tom'



class App extends React.Component {
  state = { 
    user: 'Tom Galloway',
  };
  render() {
    
    return (
      <div className="welcome_page">
        <Banner user={this.state.user} />
        <TomGinfo/> 
      </div>
    )
  } 

};

export default App;
