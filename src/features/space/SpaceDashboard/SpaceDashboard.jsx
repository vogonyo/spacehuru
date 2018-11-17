

import React , { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SpaceList from '../SpaceList/SpaceList';

export const spacesList = [
  {
    id: '1',
    title: 'Nyama Mama',
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
    title: 'Sankara',
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
   constructor(props){
     super(props)

     this.state = {
       spaces: spacesList
     }
   }
 
    render() {
        return (
            <Grid >
                <Grid.Column width = {4}>
                    <h2>Filters</h2>
                </Grid.Column>
                <Grid.Column width = {12}>    
                      <SpaceList spaces= {this.state.spaces}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SpaceDashboard;