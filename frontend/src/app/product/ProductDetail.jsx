import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component{
    render() {
        const { product } = this.props
        return (
          <div>
            <Link to="/">Back Home</Link>
            <br/>
            <br/>
            Product Name: { product.name }
            <br/>
            - Price: { product.price }
            <br/>
            - Product Image 1: { product.product_images["1"] }
            <br/>
            - Product Image 2: { product.product_images["2"] }
          </div>
        )
    }
}

export default ProductDetail;