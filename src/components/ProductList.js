import React, {Component} from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return(
            <div className="container o-productList">
                <ul className="products">
                    <li>
                        <Product 
                            productTitle="Control Nintendo Switch Super Mario"
                            productImageSrc="https://ss423.liverpool.com.mx/sm/1081439253.jpg"
                            productImageAlt="Control Nintendo Switch Super Mario"
                            productPrice="719.2"
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProductList;