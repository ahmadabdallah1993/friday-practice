
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';



class HornedBeast extends React.Component{

   constructor(props){
    super(props);
    this.state = {
        animal : 0,
        food : 0
    }
   }


   increment = () => {
    this.setState({
        animal : this.state.animal +1
    })
   }

   iNeedFood = () => {
    this.setState({
        food: this.state.food +1
    })
    this.props.sendFromMain();
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
                Number of animal: {this.state.animal}
              </Card.Text>
              <Card.Text>
                i need food: {this.state.food}
              </Card.Text>
              
              <Button variant="primary" onClick={this.iNeedFood}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
    

        )
    }
}
export default HornedBeast;