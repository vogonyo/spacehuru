

import React , { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import SpaceList from '../SpaceList/SpaceList';
import SpaceForm from '../SpaceForm/SpaceForm';


export const spacesList = [
  {
    id: '1',
    name: 'Nyama Mama',
    date: '2018-11-12',
    category: 'Restaurant',
    description:
      'Sankara Hotels & Resorts creates and operates luxury and upperect local culture, food, art and design.',
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
    date: '2018-01-06',
    category: 'restaurant',
    description:
      'Sankara Hotels & Resorts creates and operates luxury and upperect local culture, food, art and design.',
    city: 'London, UK',
    location: 'Mombasa',
    hostedBy: 'Tom',
    thumbnailURL: 'http://www.travelstart.co.ke/blog/wp-content/uploads/2014/11/SetHeight800-Villa-Rosa-Kempinski-Swimming-Pool.jpg',
    Photos: [
      {
        id: '1',
        photoURL: 'http://www.sankara.com/d/sankararedesign/media/__thumbs_582_336_crop/RESTAURANTBARS_Sarabi5.jpg?1473132865'
      },
      {
        id: '2',
        photoURL: 'https://www.africanmeccasafaris.com/wp-content/uploads/sankaranairobi2.jpg'
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
    handleUpdatedSpace = (updatedSpace) => {
       this.setState({
         spaces: this.state.spaces.map(space => {
           if(space.id === updatedSpace.id){
             return Object.assign({}, updatedSpace)
           }else{
             return space;
           }
         }),
          isOpen: false,
          selectedSpace: null
       });
    }
    handleDeleteSpace = (spaceId) => () => {
       const updatedSpaces = this.state.spaces.filter(e => e.id !== spaceId);
       this.setState({
         spaces: updatedSpaces
       });
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
                    {this.state.isOpen && <SpaceForm updateSpace={this.handleUpdatedSpace} selectedSpace={selectedSpace} createSpace={this.handleCreateSpace} handleCancel={this.handleCancel}/>}
                </Grid.Column>
                <Grid.Column width = {10}>    
                      <SpaceList deleteSpace={this.handleDeleteSpace} onSpaceOpen={this.handleOpenSpace} spaces= {this.state.spaces}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SpaceDashboard;