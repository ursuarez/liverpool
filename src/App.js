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

  prepareProductsData = (data) => {
    let productos = []

    data.forEach(producto => {
      let 
          precioProducto      = (producto.listPrice[0]).split(".")[0],
          precioProductoCents = (producto.listPrice[0]).split(".")[1],
          precioPromo         = (producto.minimumPromoPrice[0]).split(".")[0],
          precioPromoCents    = (producto.minimumPromoPrice[0]).split(".")[1];

      productos.push({
        nombreProducto:           producto.productDisplayName[0],

        precioProducto:           precioProducto.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        precioProductoCents:      precioProductoCents.length > 1 ? precioProductoCents : precioProductoCents += '0',

        precioPromoProducto:      precioPromo.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        precioPromoProductoCents: precioPromoCents.length > 1 ? precioPromoCents : precioPromoCents += '0',

        imagenProducto: producto.smallImage == null ? 'http://assets.liverpool.com.mx/assets/images/fillers/filler_REC.gif' : producto.smallImage[0]
      })
    })

    this.setState({
      productsData: productos
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <Searchbar    prepareProductsData={this.prepareProductsData}/>

        <RecentSearch busquedasRecientes={this.state.productsData}/>

        <ProductList  productosEncontrados={this.state.productsData}/>
      </div>
    );
  }
}

export default App;