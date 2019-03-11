import React, {Component} from 'react';

class RecentSearch extends Component {
    render() {
        return(
            <div className="container o-recentSearch">
                <h5 className="a-recentSearch-headline">Búsquedas recientes</h5>

                <div className="m-recentSearch">
                    <span>Ropa de mujer</span>
                    <span>Chamarra hombre</span>
                    <span>Videojuegos</span>

                </div>
            </div>
        )
    }
}

export default RecentSearch;