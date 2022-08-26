import React from 'react';

class Square extends React.Component{
    render(){
        return(
            <div>
                Square {this.props.sqNum}
            </div>
        )
    }
}
export default Square;