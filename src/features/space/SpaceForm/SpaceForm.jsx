import React, { Component } from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';

const emptySpace = {
  name: '',
  description: '',
  availabilityDate: '',
  pricing: '',
  billing: '',
  size: '',
  location: '',
  building: '',
  useCase: '',
  hostedBy: ''
}
class SpaceForm extends Component{
  state = {
    space: emptySpace
  }

  componentDidMount(){
    if(this.props.selectedSpace !== null){
      this.setState({
        space: this.props.selectedSpace
      });
    }
  }
  componentWillReceiveProps(nextProps){
     console.log('current:', this.props.selectedSpace);
     console.log('next: ', nextProps.selectedSpace);
  }
  onFormSubmit = (e) =>{
      e.preventDefault() ;
      this.props.createSpace(this.state.space);  
  }
  onInputChange = (e) => {
     const newSpace = this.state.space;
     newSpace[e.target.name] = e.target.value;
      this.setState({
         space: newSpace 
      });
  }
  render(){
    const {handleCancel} = this.props;
    const {space} = this.state;
      return(
            <div>
                     <Segment>
                       <Form onSubmit={this.onFormSubmit}>
                         <Form.Field>
                           <label>Enter Name of Space</label>
                           <input name='name' onChange={this.onInputChange} value={space.name} placeholder="Space Name" />
                         </Form.Field>
                         <Form.Field>
                           <label> Description</label>
                           <input  name='description' onChange={this.onInputChange} value={space.description} type="text" placeholder="brief description of Space" />
                         </Form.Field>
                         
                         <Form.Field>
                           <label>Date </label>
                           <input name='availabilityDate' onChange={this.onInputChange} value={space.availabilityDate} type="date" placeholder="Date from which space is available" />
                         </Form.Field>
                         <Form.Field>
                           <label>Pricing </label>
                           <input name='pricing' onChange={this.onInputChange} value={space.pricing} type="number" placeholder="Set your price here" />
                         </Form.Field>
                         <Form.Field>
                           <label>Type of Billing </label>
                           <input name='billing' onChange={this.onInputChange} value={space.billing} type="text" placeholder="monthly, nightly or custom" />
                         </Form.Field>
                         <Form.Field>
                           <label>Size in Square Feet </label>
                           <input name='size' onChange={this.onInputChange} value={space.size} type="number" placeholder="Size in Square Feet" />
                         </Form.Field>
                         <Form.Field>
                           <label>Location</label>
                           <input name='location' onChange={this.onInputChange} value={space.location} placeholder="City space is located" />
                         </Form.Field>
                         <Form.Field>
                           <label>Building</label>
                           <input name='building' onChange={this.onInputChange} value={space.building} placeholder="Enter building in which it is located" />
                         </Form.Field>
                         <Form.Field>
                           <label>Use Case</label>
                           <input name='useCase' onChange={this.onInputChange} value={space.useCase} placeholder="What your space should be typically used for" />
                         </Form.Field>
                         <Form.Field>
                           <label>Hosted By</label>
                           <input name='hostedBy' onChange={this.onInputChange} value={space.hostedBy} placeholder="Enter the name of person hosting" />
                         </Form.Field>
                         <Button positive type="submit">
                           Submit
                         </Button>
                         <Button onClick={handleCancel} type="button">Cancel</Button>
                       </Form>
                     </Segment>
            </div>
        )
    }
}


export default SpaceForm;