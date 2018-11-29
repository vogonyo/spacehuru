

import React , { Component } from 'react';
import { connect } from  'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import SpaceList from '../SpaceList/SpaceList';
import SpaceForm from '../SpaceForm/SpaceForm';
import { createSpace, deleteSpace, updateSpace } from '../spaceActions';

const mapState = (state) => ({
  spaces: state.spaces
})

const actions = {
  createSpace,
  deleteSpace,
  updateSpace
}
class SpaceDashboard extends Component {
     state = {
       isOpen: false,
       selectedSpace: null
     }
     
     handleFormOpen = () => {
      this.setState({
          selectedSpace: null,
          isOpen: true
      });
    }
  
    handleCancel = () =>{
      this.setState({
        isOpen: false
      });
    }
    handleUpdateSpace = (updatedSpace) => {
       this.props.updateSpace(updatedSpace);
       this.setState({
          isOpen: false,
          selectedSpace: null
       });
    }

    handleDeleteSpace = (spaceId) => () => {
       this.props.deleteSpace(spaceId);
    }
   handleOpenSpace = (spaceToOpen) => () => {
       this.setState({
          selectedSpace: spaceToOpen,
          isOpen: true
       });
   }
   handleCreateSpace = (newSpace) => {
      newSpace.id = cuid();
      newSpace.PhotoURL = '/assets/user.png';
      this.props.createSpace(newSpace);
      this.setState({
        isOpen: false
      });
     }
     
    render() {
       const {selectedSpace} = this.state;
       const {spaces} = this.props;
        return (
            <Grid >
                <Grid.Column width = {6}>
                    <h2>Filters</h2>
                    <Button onClick={this.handleFormOpen} positive content="Create Space" className="ui floated right"/>
                    {this.state.isOpen && <SpaceForm updateSpace={this.handleUpdateSpace} selectedSpace={selectedSpace} createSpace={this.handleCreateSpace} handleCancel={this.handleCancel}/>}
                </Grid.Column>
                <Grid.Column width = {10}>    
                      <SpaceList 
                         deleteSpace={this.handleDeleteSpace} 
                         onSpaceOpen={this.handleOpenSpace} 
                         spaces={spaces}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(SpaceDashboard);