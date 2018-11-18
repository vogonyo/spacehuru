import React, { Component } from 'react'
import { Card, Button} from 'semantic-ui-react';
//import { ThumbsUp, MapMarkerAlt, Heart, ChevronCircleRight } from 'styled-icons/fa-solid';
import SpaceListPhotos from './SpaceListPhotos';

class SpaceListItem extends Component {
   render() {
    const {space, onSpaceSelect} = this.props;
    return (
          <div>
          <Card>
            <SpaceListPhotos space={space}/>
            <Card.Content>
            <Card.Header>{space.name}</Card.Header>
            <Card.Meta>
              <span>{space.location}</span>
            </Card.Meta>
            <Card.Meta>
              <span>{space.date}</span>
            </Card.Meta>
            <Card.Description>
                 {space.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
             <Button onClick={onSpaceSelect(space)} color="teal" floated="right" content="View"/>
          </Card.Content>
        </Card>
           
        </div>
       )
  }
}



export default SpaceListItem;