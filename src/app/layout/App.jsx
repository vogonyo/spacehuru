import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SpaceDashboard from '../../features/space/SpaceDashboard/SpaceDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'; 


class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Container className="main">
       <SpaceDashboard />
      </Container>
      </div>
    );
  }
}

export default App;




