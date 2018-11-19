import React, { Component } from 'react';
import SpaceListItem from '../SpaceList/SpaceListItem';
import {Grid } from 'semantic-ui-react';

class SpaceList extends Component {
  render() {
    const { spaces , onSpaceOpen, deleteSpace} = this.props;
    return (
      <Grid stackable >
        
        {spaces.map((space) => (
          <Grid.Column width= {6} key={space.id}>  
          <SpaceListItem 
               key={space.id} 
               space={space} 
               onSpaceOpen={onSpaceOpen}
               deleteSpace={deleteSpace} 
               /> </Grid.Column> 
        ))}
                
      </Grid>
    )
  }
}

export default SpaceList;