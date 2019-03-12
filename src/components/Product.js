import React from 'react'

const Product = props => {
	let priceContent

	if ((Math.round(props.productPromo)) !== 0) {
		priceContent = 
			<React.Fragment>
				<span className="productPrice--list">
					$ {props.productPrice}
					<sup>{props.productPriceCents}</sup>
				</span>

				<span className="productPrice--promo">
					$ {props.productPromo}
					<sup>{props.productPromoCents}</sup>
				</span>
			</React.Fragment>;
	} else {
		priceContent = 
			<React.Fragment>
				<span className="productPrice--promo --onlyPrice">
					$ {props.productPrice}
					<sup>{props.productPriceCents}</sup>
				</span>
			</React.Fragment>;
	}


	return (
		<div className="product">
			<div className="productTitle">
				<p>{props.productTitle}</p>
			</div>

			<div className="productImage">
				<img src={props.productImageSrc} alt={props.productImageAlt}/>
			</div>

			<div className="productPrice">
				{priceContent}
			</div>
		</div>
	)
}

export default Product;