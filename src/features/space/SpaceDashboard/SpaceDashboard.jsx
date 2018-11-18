

import React , { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import SpaceList from '../SpaceList/SpaceList';
import SpaceForm from '../SpaceForm/SpaceForm';


export const spacesList = [
  {
    id: '1',
    name: 'Nyama Mama',
    date: '2018-03-27',
    category: 'Restaurant',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: '',
    location: "Nairobi, Kenya",
    hostedBy: 'Bob',
    thumbnailURL: 'https://nomadicfoxcom.files.wordpress.com/2017/09/the-terrace-at-nyama-mama-delta-photo-by-jan-fox.jpg?w=1500',
    Photos: [
      {
        id: '1',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: '2',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    name: 'Sankara',
    date: '2018-03-28',
    category: 'restaurant',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    location: 'Mombasa',
    hostedBy: 'Tom',
    thumbnailURL: 'http://www.travelstart.co.ke/blog/wp-content/uploads/2014/11/SetHeight800-Villa-Rosa-Kempinski-Swimming-Pool.jpg',
    Photos: [
      {
        id: '1',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: '2',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class SpaceDashboard extends Component {
     state = {
       spaces: spacesList,
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
   handleSelectedSpace = (spaceToUpdate) => () => {
       this.setState({
          selectedSpace: spaceToUpdate,
          isOpen: true
       });
   }
   handleCreateSpace = (newSpace) => {
      newSpace.id = cuid();
      newSpace.PhotoURL = '/assets/user.png';
      const updatedSpaces = [...this.state.spaces, newSpace];
      this.setState({
        spaces: updatedSpaces,
        isOpen: false
      });
     }
 
    render() {
       const {selectedSpace} = this.state;
        return (
            <Grid >
                <Grid.Column width = {6}>
                    <h2>Filters</h2>
                    <Button onClick={this.handleFormOpen} positive content="Create Space" className="ui floated right"/>
                    {this.state.isOpen && <SpaceForm selectedSpace={selectedSpace} createSpace={this.handleCreateSpace} handleCancel={this.handleCancel}/>}
                </Grid.Column>
                <Grid.Column width = {10}>    
                      <SpaceList onSpaceSelect={this.handleSelectedSpace} spaces= {this.state.spaces}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SpaceDashboard;