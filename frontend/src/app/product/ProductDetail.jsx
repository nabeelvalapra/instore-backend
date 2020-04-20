import React, { Component } from 'react';

class ProductDetail extends Component{
    render() {
        let product = this.props.products[0]
        return (
            <div>
              Product Page: { product.name }
            </div>
        )
    }
}

export default ProductDetail;