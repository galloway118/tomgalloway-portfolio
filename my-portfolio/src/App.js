import React from 'react';
import logo from './logo.svg';
import './welcome_page.css';
import Banner from './components/navbar/header/header'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/sidebar'
import Backdrop from './components/navbar/backdrop/backdrop'

class App extends React.Component {
  state = { 
    user: 'Tom Galloway',
    sideBarOpen: false
  };
  render() {
    let sideBar;
    if(this.state.sideBarOpen) {
      sideBar = <Sidebar/>;
    }
    return (
      <div className="welcome_page">
        <Navbar navBarClickHandler={this.sideBarHandler}/>
        {sideBar}
        <Banner user={this.state.user} />
      </div>
    )
  } 
sideBarHandler = () => {
  this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
  })
};
};

export default App;
