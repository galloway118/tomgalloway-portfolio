import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/navbar/sidebar'

import App from '../App'
import Projects from '../components/pages/projects';
import Contact from '../components/pages/contact';
import About from '../components/pages/about_me';

class Main extends React.Component {
  state = { 
    sideBarOpen: false
  };
  render() {
    let sideBar;
    if(this.state.sideBarOpen) {
      sideBar = <Sidebar/>;
    }
  return (
    <BrowserRouter> 
     <Navbar navBarClickHandler={this.sideBarHandler}/>
        {sideBar}
    <Switch>
      <Route exact path='/App' component={App}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/about_me' component={About}></Route>
    </Switch>
    </BrowserRouter>
  );
}
sideBarHandler = () => {
  this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
  })
};
}

export default Main;