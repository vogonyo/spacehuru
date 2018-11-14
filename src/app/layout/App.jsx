import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { Route } from 'react-router-dom';
import SpaceDashboard from '../../features/space/SpaceDashboard/SpaceDashboard';
import AddSpace from '../../features/space/SpaceDashboard/AddSpace';

import NavBar from '../../features/nav/NavBar/NavBar'; 


class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Container className="main">
       <Route path="/spaces" component={SpaceDashboard}/>
       <Route path="/addSpace" component={AddSpace}/>
      </Container>
      </div>
    );
  }
}

export default App;




