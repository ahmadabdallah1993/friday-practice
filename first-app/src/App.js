import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';
import Forms from './components/Form'
class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      food :  100,
      show : false,
      cell: {},
      Dfilter: Data
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

  

  dataFiltering = (numHorn) => {
    let x;
    if(numHorn === 0){
      x = 2;
    } else if(numHorn === 3){
      x = 1;
    } else {
      x = 3;
    }
    // let x = numHorn;
    console.log(numHorn)
    const n = Data.filter( item => {
      return item.horns === x
      }
    
    )
    
    this.setState({
      Dfilter: n
    })
  }


  render(){
    return(
      <div>
        <Header />
        <Forms sendDataToFilterIt={this.dataFiltering} />
        <h3>Total number of food: {this.state.food} </h3>
        
        <Main sendData={this.state.Dfilter} decrementTotal={this.decTotal} send={this.onShow} />
        <SelectedBeast sh={this.state.show} cl={this.onClose} q={this.state.cell} />
        <Footer />
      </div>
    )
  }
}
export default App;