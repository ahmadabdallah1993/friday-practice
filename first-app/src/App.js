import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      food :  100,
      show : false,
      cell: {}
    }
  }


  decTotal = () => {
    this.setState({
      food: this.state.food -1
    })
  }

  onShow = (title) => {
    const c = Data.find( item => item.title === title)
    this.setState({
      show: true,
      cell: c
    })
  }

  onClose = () => {
    this.setState({
      show: false
    })
  }


  render(){
    return(
      <div>
        <Header />
        <h3>Total number of food: {this.state.food} </h3>
        
        <Main sendData={Data} decrementTotal={this.decTotal} send={this.onShow} />
        <SelectedBeast sh={this.state.show} cl={this.onClose} q={this.state.cell} />
        <Footer />
      </div>
    )
  }
}
export default App;