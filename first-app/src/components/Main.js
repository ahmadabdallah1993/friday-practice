import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
    

class Main extends React.Component{
    render(){
        return(
            <div>
                <Row xs={1} md={2} className="g-4">

                {this.props.sendData.map( (item) => {
                    return <HornedBeast 
                    key={item._id}
                    imgUrl={item.image_url}
                    title={item.title}
                    description={item.description}
                    horns={item.horns}
                    decrementTotal={this.props.decrementTotal}

                    />
                })}
                </Row>
                
            </div>
        )
    }
}
export default Main;