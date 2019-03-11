import React from 'react'

const Product = props => {
    return (
        <div className="product">
            <div className="productTitle">
                <p>{props.productTitle}</p>
            </div>

            <div className="productImage">
                <img src={props.productImageSrc} alt={props.productImageAlt}/>
            </div>

            <div className="productPrice">
                <p>${props.productPrice}0</p>
            </div>
        </div>
    )
}

export default Product;