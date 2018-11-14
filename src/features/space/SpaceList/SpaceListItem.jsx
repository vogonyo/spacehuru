import React, { Component } from 'react'
import { Card} from 'semantic-ui-react';
//import { ThumbsUp, MapMarkerAlt, Heart, ChevronCircleRight } from 'styled-icons/fa-solid';
import SpaceListPhotos from './SpaceListPhotos';

class SpaceListItem extends Component {
   render() {
    const {space} = this.props;
    return (
          <div>
          <Card>
            <SpaceListPhotos space={space}/>
            <Card.Content>
            <Card.Header>{space.title}</Card.Header>
            <Card.Meta>
              <span>{space.location}</span>
            </Card.Meta>
            <Card.Description>
                 {space.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
           
        </div>
       )
  }
}



export default SpaceListItem;