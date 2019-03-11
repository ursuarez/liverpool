import React, { Component } from 'react';
import './App.css';
import Navbar       from './components/Navbar';
import Searchbar    from './components/Searchbar';
import RecentSearch from './components/RecentSearch';
import ProductList  from './components/ProductList';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      productsData: []
    };
   }

  metodoPadre = (data) => {
    console.log(data);
    this.setState({
      productsData: data
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <Searchbar metodoPadre={this.metodoPadre}/>

        <RecentSearch/>

        <ProductList/>
      </div>
    );
  }
}

export default App;
