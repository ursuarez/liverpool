import React, {Component} from 'react';
import {buscarProductos} from '../utils/api'

class Searchbar extends Component {
	state = {
		palabraBusqueda: []
	}

	searchRef = React.createRef();

	getSearchText = e => {
		e.preventDefault();

		let searchText = this.searchRef.current.value;

		let palabraBusqueda = [...this.state.palabraBusqueda, searchText]

		// Removiendo busquedas duplicadas
		palabraBusqueda = [...new Set(palabraBusqueda)]

		this.setState({
			palabraBusqueda
		})

		buscarProductos(searchText, data => {
			this.props.prepareProductsData(data);
		});
	}

	componentDidUpdate() {
		localStorage.setItem(
			'palabraBusqueda',
			JSON.stringify(this.state.palabraBusqueda)
		)
	}

	componentDidMount() {
		const palabrasBusquedaLS = localStorage.getItem('palabraBusqueda')

		if (palabrasBusquedaLS) {
			this.setState({
				palabraBusqueda: JSON.parse(palabrasBusquedaLS)
			})
		}
	}

	render() {
		return(
			<div className="container o-searchBar">
				<form className="form-inline m-searchBar" onSubmit={this.getSearchText}>
					<input className="form-control a-searchBar_input" type="search" placeholder="Buscar ..." aria-label="Buscar" ref={this.searchRef}/>
					<button className="btn a-searchBar_btn" type="submit">
						<i className="fas fa-search"></i>
					</button>
				</form>
			</div>
		)
	}
}

export default Searchbar;