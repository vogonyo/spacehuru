import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import SpaceDashboard from '../../features/space/SpaceDashboard/SpaceDashboard';
import SpaceForm from '../../features/space/SpaceForm/SpaceForm';
import NavBar from '../../features/nav/NavBar/NavBar'; 
import HomePage from '../../features/home/HomePage';
import UserDetailed from '../../features/user/UserDetailed/UserDetailed';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SpaceDetailedPage from '../../features/space/SpaceDashboard/SpaceDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';

class App extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route exact path="/" component={HomePage}/>
         </Switch>
           <Route path="/(.+)" render={() => (
            <div>
            <NavBar/>
            <Container className="main">
                <Switch>
                  <Route path="/spaces" component={SpaceDashboard}/>
                  <Route path="/space/:id" component={SpaceDetailedPage}/>
                  <Route path="/nomads" component={PeopleDashboard}/>
                  <Route path="/travel" component={HomePage} />
                  <Route path="/profile/:id" component={UserDetailed}/>
                  <Route path="/settings" component={SettingsDashboard}/>
                  <Route path="/createSpace" component={SpaceForm}/>
             </Switch>
            </Container>
            </div>
           )}/>
      </div>
    );
  }
}

export default App;




