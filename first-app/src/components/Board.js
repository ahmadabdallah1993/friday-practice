import React from 'react';
import Square from './square';

class Board extends React.Component{
    render(){
        return(
            <div>
                <Square sqNum='1' />
                <Square sqNum='2' />
                <Square sqNum='3' />
                <Square sqNum='4' />
                <Square sqNum='5' />
                <Square sqNum='6' />
            </div>
        )
    }
}
export default Board;