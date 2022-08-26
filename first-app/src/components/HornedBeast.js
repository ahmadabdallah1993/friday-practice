
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            numPets : 0,
            numFood : 0
        }
    }


    increment = () => {
        // alert("hiiiiiiiiiiiiiiiii");
        this.setState({
            numPets : this.state.numPets +1
        })
    }

    needFood = () => {
        this.setState({
            numFood: this.state.numFood +1
        })

    }




    render(){
        return(
            // <div>
            //     <h2>Title: {this.props.title} </h2>
            //     <img src={this.props.image_url} alt={this.props.title} title={this.props.title} ></img>
            //     <p>Description: {this.props.description} </p>
                
            // </div>
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.increment}/>
    //   <Card.Body>
    //     <Card.Title>{this.props.title}</Card.Title>
    //     <Card.Text>
    //       {this.props.description}
    //     </Card.Text>
    //     <Card.Text>
    //         number of pets: {this.state.numPets}
    //     </Card.Text>
    //     <Card.Text>
    //         i neet food: {this.state.numFood}
    //     </Card.Text>
    //     <Button variant="primary" onClick={this.needFood}>Go somewhere</Button>
    //   </Card.Body>
    // </Card>





        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.increment}/>
            <Card.Body>
              <Card.Title>Card title: {this.props.title}</Card.Title>
              <Card.Text>
              {this.props.description}
              </Card.Text>
              <Card.Text>
              number of pets: {this.state.numPets}
              </Card.Text>
              <Card.Text>
              i neet food: {this.state.numFood}
              </Card.Text>
              <Button variant="primary" onClick={this.needFood}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
    

        )
    }
}
export default HornedBeast;