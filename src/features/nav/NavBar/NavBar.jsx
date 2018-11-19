import React, { Component } from 'react';
import { Menu, Button, Container} from 'semantic-ui-react';
import { NavLink, Link, withRouter} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
  state = {
    autheticated: false
  }
  handleSignIn = () => {
     this.setState({
        autheticated: true
     });
  }
  handleSignOut = () => {
    this.setState({
      autheticated: false
    });

    this.props.history.push('/');
  }
  render() {
    const {autheticated} = this.state;
    return (
      <div>
          <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header as={Link} to="/">
                    <img src="assets/spacehurulogo.png" alt="logo" />
                    Spacehuru
                  </Menu.Item>
                  <Menu.Item name="Spaces" as={NavLink} to='/spaces' />
                  <Menu.Item name="Nomads" as={NavLink} to='/nomads'/>
                  <Menu.Item name="Travel" as={NavLink} to='/travel'/>
                  <Menu.Item>
                  <Button as={Link} to="/createSpace" floated="right" inverted content="new space" />
                  </Menu.Item>
                  {autheticated ? (<SignedInMenu signOut={this.handleSignOut}/>) : (<SignedOutMenu signIn={this.handleSignIn}/>) }
                </Container>
              </Menu>
      </div>
    )
  }
}
export default withRouter(NavBar);