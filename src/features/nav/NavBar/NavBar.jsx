import React, { Component } from 'react';
import { Menu, Button, Container} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <div>

      <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header>
                    <img src="assets/spacehurulogo.png" alt="logo" />
                    Spacehuru
                  </Menu.Item>
                  <Menu.Item name="Spaces" />
                  <Menu.Item name="Nomads" />
                  <Menu.Item name="Travel" />
                  <Menu.Item>
                  <Button floated="right" inverted content="Add Space" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                  </Menu.Item>
                </Container>
              </Menu>
      </div>
    )
  }
}
export default NavBar;