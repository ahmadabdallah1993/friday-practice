import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Data from './components/Data.json';


class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      food :  100
    }
  }


  decTotal = () => {
    this.setState({
      food: this.state.food -1
    })
  }






  render(){
    return(
      <div>
        <Header />
        <h3>Total number of food: {this.state.food} </h3>
        
        <Main sendData={Data} decrementTotal={this.decTotal} />
        <Footer />
      </div>
    )
  }
}
export default App;