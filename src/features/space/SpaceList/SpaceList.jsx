import React, { Component } from 'react';
import SpaceListItem from '../SpaceList/SpaceListItem';
import {Grid } from 'semantic-ui-react';

class SpaceList extends Component {
  render() {
    return (
      <Grid stackable >
        <Grid.Column width = {5}><SpaceListItem /></Grid.Column>
        <Grid.Column width = {5}><SpaceListItem /></Grid.Column>
        <Grid.Column width = {5}><SpaceListItem /></Grid.Column>
        <Grid.Column width = {5}><SpaceListItem /></Grid.Column>               
      </Grid>
    )
  }
}

export default SpaceList;