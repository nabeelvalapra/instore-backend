import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


class Products extends Component{
    render() {
        if(!this.props.hasFetched){return <div>Product Fetching...</div>}

        const products = this.props.products
        return (
            <div>
                {
                    products.map(product => (
                        <div key={product.name}>
                        <br/>
                        Product ID: { product.id }
                        <br/>
                        Product URL: <Link to={`/product/${product.id}/`}>link</Link>
                        <br/>
                        Product Name: { product.name }
                        <br/>
                        - Price: { product.price }
                        <br/>
                        - Product Image 1: { product.product_images["1"] }
                        <br/>
                        - Product Image 2: { product.product_images["2"] }
                        </div>
                    ))
                } 
            </div>
        )
    }
}

Products.propTypes = {
    products: PropTypes.array,
}
export default Products