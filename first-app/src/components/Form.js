import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userName: '',
            checkAnimal: '',
            b: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        

        this.setState({
            userName: e.target.name.value,
            checkAnimal: e.target.check.checked,
            
        })
        // this.props.sendDataToFilterIt(this.state.theSelect);
    }



    handleChange = (e) => {
        this.setState({
            b: parseInt(e.target.value) 
            // userName: e.target.value,
            
        })
        this.props.sendDataToFilterIt(this.state.b);
        
    }





    render(){
        return(
    
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name"  id="name" />
        <Form.Text className="text-muted">
          please enter your name. {this.state.userName}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="do you like animals" id="check" />
      </Form.Group>
      <Form.Select id="disabledSelect" onChange={this.handleChange}>
            <option value='1'>One horns</option>
            <option value='2'>Two horns</option>
            <option value='3'>Three horns</option>
          </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 
        )
    }
}
export default Forms;