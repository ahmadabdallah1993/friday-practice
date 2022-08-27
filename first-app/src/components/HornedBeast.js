import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{


    constructor(props){
        super(props);
        this.state ={
            animal: 0,
            needFood : 0
        }
    }

    increment = () => {
        this.setState({
            animal : this.state.animal +1
        })
    }

    foodReq = () => {
        this.setState({
            needFood: this.state.needFood +1
        })
        this.props.decrementTotal();
    }



    render(){
        return(
        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.imgUrl} onClick={this.increment} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text>
                Number of Horns: {this.props.horns}
              </Card.Text>
              <Card.Text>
                Number of Animal: {this.state.animal}
              </Card.Text>
              <Card.Text>
                Number of Food: {this.state.needFood}
              </Card.Text>
              <Button variant="primary" onClick={this.foodReq}>ask for food request</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
}
export default HornedBeast;