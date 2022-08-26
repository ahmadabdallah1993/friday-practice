import React from 'react';


class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h2>Title: {this.props.title} </h2>
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title} ></img>
                <p>Description: {this.props.description} </p>
            </div>
        )
    }
}
export default HornedBeast;