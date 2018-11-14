import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import SpaceForm from '../SpaceForm/SpaceForm';

class AddSpace extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
               <Button positive content="Create Space" className="ui floated right"/>
               <SpaceForm />         
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
      </Grid>
    )
  }
}


export default AddSpace;