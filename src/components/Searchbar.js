import React, {Component} from 'react';
import {buscarProductos} from '../utils/api'

class Searchbar extends Component {
    searchRef = React.createRef();

    getSearchText = e => {
        e.preventDefault();

        let searchText = this.searchRef.current.value

        buscarProductos(searchText, data => {
            this.props.metodoPadre(data);
        });

        // this.props.buscarProducto(this.searchRef);
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