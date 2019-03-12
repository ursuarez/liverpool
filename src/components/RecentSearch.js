import React, {Component} from 'react';

class RecentSearch extends Component {
	state = {
		palabrasBusqueda: [],
		
	}

	componentDidMount() {
		const palabrasBusquedaLS = localStorage.getItem('palabraBusqueda')

		if(palabrasBusquedaLS) {
			this.setState({
				palabrasBusqueda: JSON.parse(palabrasBusquedaLS)
			})
		}
	}

	render() {
		return(
			<div className="container o-recentSearch">
				<h5 className="a-recentSearch-headline">Búsquedas recientes</h5>

				<div className="m-recentSearch">
					{
						(this.state.palabrasBusqueda).length === 0
						? <span>No has realizado ninguna búsqueda...</span>
						: this.state.palabrasBusqueda.map((itemLS, index) => <span key={index}>{itemLS}</span>)
					}
				</div>
			</div>
		)
	}
}

export default RecentSearch;