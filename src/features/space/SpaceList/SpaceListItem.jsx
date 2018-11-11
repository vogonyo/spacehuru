import React, { Component } from 'react'
import { Card, Image} from 'semantic-ui-react';
import { ThumbsUp, MapMarkerAlt, Heart } from 'styled-icons/fa-solid';

class SpaceListItem extends Component {
  render() {
    return (
          <Card>
          <Image src='https://www.spacehuru.com/wp-content/uploads/2018/01/img_2451.jpg' />
          <Card.Content>
            <Card.Header>Twig Co Work</Card.Header>
            <Card.Meta>
              <MapMarkerAlt size="12"/><span>WestLands, Nairobi</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
           <ThumbsUp size="28"/><Heart size="24" className="right floated"/>
          </Card.Content>
        </Card>
           
          
       )
  }
}



export default SpaceListItem;