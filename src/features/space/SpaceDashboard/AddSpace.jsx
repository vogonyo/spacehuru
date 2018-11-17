import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import SpaceForm from '../SpaceForm/SpaceForm';

class AddSpace extends Component {
    state = {
      isOpen: false
    }


  handleFormOpen = () => {
    this.setState({
        isOpen: true
    });
  }

  handleCancel = () =>{
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
               <Button onClick={this.handleFormOpen} positive content="Create Space" className="ui floated right"/>
               {this.state.isOpen && <SpaceForm handleCancel={this.handleCancel}/>}         
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
      </Grid>
    )
  }
}


export default AddSpace;