import React, {Component} from 'react';
import uuid    from 'uuid';
import Product from './Product';

class ProductList extends Component {
	constructor(props){
		super(props);
		this.productsList = this.productsList.bind(this);
	}

	productsList(productosEncontrados) {
		let list = []
		productosEncontrados.forEach(producto => {
			list.push(
				<li key={uuid()}>
					<Product
						productTitle      = {producto.nombreProducto}
						productImageSrc   = {producto.imagenProducto}
						productImageAlt   = {producto.nombreProducto}
						productPrice      = {producto.precioProducto}
            productPriceCents = {producto.precioProductoCents}
            productPromo      = {producto.precioPromoProducto}
            productPromoCents = {producto.precioPromoProductoCents}
					/>
				</li>
			)
		});
		return list
	}

	render() {
    console.log(this.props.productosEncontrados)

		return(
			<div className="container o-productList">
				<ul className="products">
					{
            this.productsList(this.props.productosEncontrados)
					}
				</ul>
			</div>
		)
	}
}

export default ProductList;