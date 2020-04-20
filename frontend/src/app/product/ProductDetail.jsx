import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component{
    render() {
        const { hasFetched, products } = this.props
        if(!hasFetched){return <div>Fetching product details...</div>}

        const product = products[0]
        return (
            <div>
              <Link to="/">Back Home</Link>
              Product Page: { product.name }
            </div>
        )
    }
}

export default ProductDetail;