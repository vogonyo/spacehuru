import React, { Component } from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';

class SpaceForm extends Component{
    render(){
        return(
            <div>
                     <Segment>
                       <Form>
                         <Form.Field>
                           <label>Enter Name of Space</label>
                           <input placeholder="Space Name" />
                         </Form.Field>
                         <Form.Field>
                           <label> Description</label>
                           <input type="text" placeholder="brief description of Space" />
                         </Form.Field>
                         
                         <Form.Field>
                           <label>Date </label>
                           <input type="date" placeholder="Date from which space is available" />
                         </Form.Field>
                         <Form.Field>
                           <label>Pricing </label>
                           <input type="number" placeholder="Date from which space is available" />
                         </Form.Field>
                         <Form.Field>
                           <label>Type of Billing </label>
                           <input type="text" placeholder="monthly, nightly or custom" />
                         </Form.Field>
                         <Form.Field>
                           <label>Size in Square Feet </label>
                           <input type="number" placeholder="Size in Square Feet" />
                         </Form.Field>
                         <Form.Field>
                           <label>City</label>
                           <input placeholder="City space is located" />
                         </Form.Field>
                         <Form.Field>
                           <label>Building</label>
                           <input placeholder="Enter building in which it is located" />
                         </Form.Field>
                         <Form.Field>
                           <label>Hosted By</label>
                           <input placeholder="Enter the name of person hosting" />
                         </Form.Field>
                         <Button positive type="submit">
                           Submit
                         </Button>
                         <Button type="button">Cancel</Button>
                       </Form>
                     </Segment>
            </div>
        )
    }
}


export default SpaceForm;