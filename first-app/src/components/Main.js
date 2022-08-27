import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json'
import Row from 'react-bootstrap/Row';




class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            total : 100
        }
    }
   
    DecrementTotal = () => {
        this.setState({
            total : this.state.total -1
        })
    }

    render(){
        return(
            // <div>
            //     <h2>Total Food: </h2>
            // <HornedBeast key='1' title='UniWhal' image_url='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='Parent rhino with two babies' />
            // <HornedBeast key='2' title= 'Unicorn Head' image_url='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' description='Someone wearing a very silly unicorn head mask' />
            // </div>



            <div>
                <h2>Total number of Food: {this.state.total} </h2>
                <Row xs={1} md={3} className="g-4">
                {/* {Data.map( (item, i) => {
                    
                    return <HornedBeast
                    key= {item._id}
                    title= {item.title}
                    image_url={item.image_url}
                    description={item.description}
                     />
                    
                })} */}
                {Data.map( (item, i) => 
                    <HornedBeast
                    key= {item._id}
                    title= {item.title}
                    image_url={item.image_url}
                    description={item.description}
                    sendFromMain={this.DecrementTotal}
                     />
                )}

                 </Row>
            </div>
        )
    }
}
export default Main;