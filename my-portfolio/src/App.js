import React from 'react';
import logo from './logo.svg';
import './welcome_page.css';
import Banner from './components/navbar/header/header'
import Navbar from './components/navbar/Navbar'

class App extends React.Component {
  state = { 
    user: 'Tom Galloway'
  };
  render() {
    return (
      <div className="welcome_page">
        <Navbar/>
        <Banner user={this.state.user} />
      </div>
    )
  } 
}

export default App;
