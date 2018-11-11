

import React , { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SpaceList from '../SpaceList/SpaceList';

class SpaceDashboard extends Component {
    render() {
        return (
            <Grid >
                <Grid.Column width = {4}>
                    <h2>Filters</h2>
                </Grid.Column>
                <Grid.Column width = {12}>    
                      <SpaceList />
                </Grid.Column>
            </Grid>
        )
    }
}

export default SpaceDashboard;